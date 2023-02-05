import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-400 h-14 lg:h-16 py-2">
      <div className="h-full flex items-center justify-center relative">
        <img src={logo1} alt="" className="h-full absolute left-4" />
        <img src={logo2} alt="" className="h-full justify-self-center" />
      </div>
    </div>
  );
};
export default Header;
