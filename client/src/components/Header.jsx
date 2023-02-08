import { useNavigate } from "react-router-dom";
import logocir from "../assets/images/logocir.png";
import logorect from "../assets/images/logorect.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-400 h-14 lg:h-16 py-3">
      <div className="h-full flex items-center justify-center relative">
        <img
          loading="lazy"
          onClick={() => navigate("/")}
          src={logocir}
          alt=""
          className="h-full absolute left-4 cursor-pointer"
        />
        <img
          loading="lazy"
          onClick={() => navigate("/")}
          src={logorect}
          alt=""
          className="h-full justify-self-center cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Header;
