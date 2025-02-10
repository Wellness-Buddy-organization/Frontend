import { FaHome, FaClipboardList, FaBell, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../src/config";

const Sidebar = () => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(ENDPOINTS.SIGN_IN);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-[#A8D5BA] w-64 h-screen p-6 flex flex-col justify-between">
        {/* Logo */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center">
            <img src="../assets/logo.png" alt="Wellness Buddy Logo" className="w-[109px] h-[130px]" />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <NavItem icon={<FaHome />} text="Home" onClick={() => navigate("/dashboard")} />
            <NavItem icon={<MdOutlineHealthAndSafety />} text="Wellness Tracking" />
            <NavItem icon={<FaClipboardList />} text="Reminders" />
            <NavItem icon={<BsGraphUpArrow />} text="Mental Health Support" />
            <NavItem icon={<FaUserCog />} text="Work-life Balance" />
          </nav>
        </div>

        {/* Bottom Links */}
        <div className="space-y-4">
          <NavItem icon={<FaUserCog />} text="Settings" />
          <NavItem icon={<FaSignOutAlt />} text="Logout" onClick={handleLogout} />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-6">
        {/* Top Right Notification Icon */}
        <div className="flex justify-end">
          <FaBell className="text-[#1B5E3A] text-xl cursor-pointer" />
        </div>
        <h1 className="text-2xl font-bold">Welcome to Wellness Buddy</h1>
      </main>
    </div>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ icon, text, onClick }) => (
  <div
    className="flex items-center space-x-3 text-[#0E0828] hover:text-[#1B5E3A] cursor-pointer"
    onClick={onClick}
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-lg font-bold">{text}</span>
  </div>
);

export default Sidebar;
