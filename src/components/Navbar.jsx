import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import CustomDialogLog from "./ui/dialogLog";

export default function Navbar() {
  const [openDialog, setOpenDialog] = useState(false); // Stan do otwierania i zamykania dialogu

  const handleOpenDialog = () => {
    setOpenDialog(true); // Otwiera dialog
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Zamknięcie dialogu
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center w-full">
      <div className="text-xl font-bold">
        <Link to="/" className="flex items-center gap-2">
          🎫 eBilet
        </Link>
      </div>
      <div className="flex gap-6 text-blue-400 text-sm sm:text-base">
        <Link to="/events" className="hover:underline">Wydarzenia</Link>
        <Link to="/cart" className="hover:underline"><HiMiniShoppingCart /></Link>
        
        <div onClick={handleOpenDialog} className="cursor-pointer">
          <FaUser />
        </div>

      </div>

      <CustomDialogLog open={openDialog} onClose={handleCloseDialog} />
    </nav>
  );
}
