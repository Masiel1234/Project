
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundHome from "../background/BackgroundHome";
import { useTranslation } from "react-i18next";

interface MenuItem {
  label: string;
  to: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}


const MenuButton: React.FC<MenuProps> = ({ title, items }) => {
   const { t } = useTranslation();  
  const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [pendingRoute , setPendingRoute] = useState<string | null>(null);

    const handMenuClick = (to: string) => {
        setPendingRoute(to);
        setShowModal(true);   
    }

    const confirmNavegation = () =>{
      if(pendingRoute){
        navigate(pendingRoute);
        setPendingRoute(null);
        setShowModal(false)
      }
    }
    const cancelNavegation = () => {
      setPendingRoute(null);
      setShowModal(false);
    }
  return (
    <div className="group px-10 py-2 rounded text-center font-bold inset-x-0 bottom-0">
      <button className="bg-pink-400 text-black text-xl px-10 py-2 rounded-full">
        {title}
      </button>
      <div className="absolute-center hidden group-hover:block bg-white shadow-lg mt-2 rounded">
        {items.map((item) => (
          <button
            key={item.to}
           onClick={() => handMenuClick(item.to)}
            className="block mx-auto my-5 w-full h-10 hover:bg-blue-100 text-black"
          >
            {item.label}
        </button>
        ))}
        
    </div>
    <BackgroundHome>
     {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-pink-300/60 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-4">{t('menuButton.h2title')}</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmNavegation}
                className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-600 cursor-pointer"
              >
                {t('menuButton.confirmButton')}
              </button>
              <button
                onClick={cancelNavegation}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 hover:cursor-pointer"
              >
               {t('menuButton.cancelButton')}
              </button>
            </div>
          </div>
        </div>
    )}
</BackgroundHome>
    </div>
    
  );
};

export default MenuButton;
