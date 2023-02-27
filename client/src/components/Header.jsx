import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logorect from "../assets/images/logorect.png";

const Header = () => {
  const navigate = useNavigate();
  const navigateItems = useRef([
    { title: "Shop", to: "/" },
    { title: "Download", to: "/download" },
    { title: "Support", to: "/" },
  ]);

  return (
    <div className="bg-darkblue w-full">
      <div className="container h-16 lg:h-20 flex items-center justify-between py-3.5">
        <img
          loading="lazy"
          onClick={() => navigate("/")}
          src={logorect}
          alt=""
          className="h-full cursor-pointer"
        />
        <div className="flex items-center gap-x-14">
          <div className="hidden lg:flex items-center gap-x-7">
            {navigateItems.current.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="py-1.5 text-white uppercase font-bold relative [&>:nth-child(2)]:hover:scale-x-100"
              >
                <span>{item.title}</span>
                <span className="absolute w-full scale-x-0 duration-300 left-0 bottom-0 h-0.5 bg-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
