
import FondoIndex from "../../assets/index.png"

interface BackgroundIndexProps{
    children: React.ReactNode;
}
const BackgroundIndex: React.FC<BackgroundIndexProps> =({children}) => {
    return(
 <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoIndex})` }}
    >
      
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundIndex;