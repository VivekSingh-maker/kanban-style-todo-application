import { TaskManagerContext } from "@/context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await callLogoutApi();

    if (response?.success) {
      setUser(null);
      navigate("/auth");
    }
  }

  return (
    <header className="kanbanheader border-b border-gray-200">
      <div className="container mx-auto h-16">
        <div className="flex h-[64px] items-center w-full justify-between">
          <div className="w-auto">
            <h1>Task Manager</h1>
          </div>
          <div className="flex gap-4">
            <Link className="text-black text-xl font-bold" to={"/tasks/list"}>
              Tasks
            </Link>
            <Link
              className="text-black text-xl font-bold"
              to={"/tasks/scrum-board"}
            >
              Kanban Board
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
