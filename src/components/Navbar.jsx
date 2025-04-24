import { useState } from "react"; 
import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import CustomDialogLog from "./ui/dialogLog";

export default function Navbar() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <nav className="bg-gray-900 text-white w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">

        {/* Левая часть — eBilet */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold">
            🎫 eBilet
          </Link>

          <div onClick={handleOpenDialog} className="cursor-pointer">
            <FaUser className="w-6 h-6" />
          </div>

          <Link to="/events" className="text-base hover:underline">
            Wydarzenia
          </Link>
        </div>

        {/* Правая часть — корзина */}
        <div>
          <Link to="/cart" className="hover:underline">
            <HiMiniShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <CustomDialogLog open={openDialog} onClose={handleCloseDialog} />
    </nav>
  );
}
