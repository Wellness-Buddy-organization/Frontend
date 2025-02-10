import { FaHome, FaClipboardList, FaBell, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BsGraphUpArrow, BsBarChart } from "react-icons/bs";
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
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#A8D5BA] p-6 flex flex-col justify-between shadow-lg">
      {/* Logo */}
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <img src="../assets/logo.png" alt="Wellness Buddy Logo" className="w-[109px] h-[130px]" />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <NavItem icon={<FaHome />} text="Home" onClick={() => navigate("/dashboard")} />
          <NavItem icon={<MdOutlineHealthAndSafety />} text="Wellness Tracking" onClick={() => navigate("/wellness")} />
          <NavItem icon={<FaClipboardList />} text="Reminders" onClick={() => navigate("/reminders")} />
          <NavItem icon={<BsGraphUpArrow />} text="Mental Health" onClick={() => navigate("/mental-health")} />
          <NavItem icon={<BsBarChart />} text="Work-Life Balance" onClick={() => navigate("/work-life")} />
        </nav>
      </div>

      {/* Bottom Links */}
      <div className="space-y-4">
        <NavItem icon={<FaUserCog />} text="Settings" onClick={() => navigate("/settings")} />
        <NavItem icon={<FaSignOutAlt />} text="Logout" onClick={handleLogout} />
      </div>
    </aside>
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
