import { useParams } from "react-router-dom";
import useGetUser from "../hooks/queries/useGetUser";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import logocir from "../assets/images/logocir.png";

const User = () => {
  const { userId } = useParams();
  const { isInitialLoading, isError, error, data } = useGetUser(userId);

  if (isInitialLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center mt-10">{error.message}</p>;
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <div className="w-full h-full md:max-w-[450px] md:h-[90%] md:max-h-[850px] overflow-hidden bg-white">
        <div className="h-16 bg-blue-200/60 relative flex items-center pl-5">
          <img loading="lazy" src={logocir} alt="" className="w-28" />
          <div className="absolute bg-blue-400 w-72 h-72 rounded-full right-0 top-0 translate-x-1/2 -translate-y-2/3" />
        </div>
        <div className="px-5">
          <div className="flex items-center justify-between mt-5 text-center">
            <img
              loading="lazy"
              src={data?.profileImageUrl}
              alt=""
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <div>
              <p className="font-bold">2</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div>
              <p className="font-bold">1</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-blue-500">{data?.name}</p>
            <p className="text-xs mt-1">{data?.bio}</p>
          </div>
          <button className="bg-blue-500 h-12 w-full mt-5 rounded-lg text-white font-medium">
            Contact
          </button>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <AiFillFacebook className="text-4xl mr-3" />
              <p>Facebook</p>
            </button>
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <AiFillTwitterSquare className="text-4xl mr-3" />
              <p>Twitter</p>
            </button>
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <AiFillInstagram className="text-4xl mr-3" />
              <p>Instagram</p>
            </button>
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <AiFillLinkedin className="text-4xl mr-3" />
              <p>Linkedin</p>
            </button>
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <AiFillGithub className="text-4xl mr-3" />
              <p>Github</p>
            </button>
            <button className="bg-gray-200 rounded-lg h-12 flex items-center justify-start px-3 font-medium">
              <FaWhatsappSquare className="text-4xl mr-3" />
              <p>Whatsapp</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
