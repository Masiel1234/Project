
import FondoHome from "../../assets/home.png"

interface BackgroundHomeProps{
    children: React.ReactNode;
}
const BackgroundHome: React.FC<BackgroundHomeProps> =({children}) => {
    return(
 <div
      className="w-full h-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${FondoHome})` }}
    >
      
    <div className="bg-pink-300/30 bg-opacity-50 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
    )
}
export default BackgroundHome;