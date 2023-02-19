import { useParams } from "react-router-dom";
import useGetUser from "../hooks/queries/useGetUser";
import logorect from "../assets/images/logorect.png";
import HashLoader from "react-spinners/HashLoader";
import useUpdateUsersLinks from "../hooks/mutations/useUpdateUsersLinks";

const User = () => {
  const { userId } = useParams();
  const { isInitialLoading, data } = useGetUser(userId);
  const { mutate } = useUpdateUsersLinks();

  const handleClick = async (item) => {
    if (item?.type === "address") {
    }
    if (item?.type === "upi") {
    }
    if (item?.type === "link") {
      window.open(item?.link);
    }
    if (item?.type === "number") {
      window.open(`tel:${item?.link}`);
    }
    if (item?.type === "email") {
      window.open(`mailto:${item?.link}`);
    }
    mutate({ userId, linkId: item?.linkId });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black">
      {isInitialLoading && <HashLoader size={30} color="blue" />}
      {!isInitialLoading && !data?.userId && <p className="text-white">Something went wrong</p>}
      {data?.userId && (
        <div className="w-full h-full md:max-w-[450px] md:h-[90%] md:max-h-[850px] overflow-hidden bg-white relative flex flex-col items-start justify-start md:rounded-xl">
          <div className="absolute bg-lightblue w-24 aspect-square rounded-bl-full right-0 top-0" />
          <div className="h-16 bg-mediumblue px-2 flex items-center w-full shrink-0">
            <img loading="lazy" src={logorect} alt="" className="w-28" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-2 w-full shrink-0 px-2">
            <img
              loading="lazy"
              src={data?.profileImageUrl}
              alt=""
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <p className="font-semibold text-lg text-mediumblue">{data?.name}</p>
            <p className="text-xs text-gray-600 max-w-[80%] text-center">
              {data?.bio} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, adipisci.
            </p>
            <button className="bg-mediumblue h-12 w-full mt-2 rounded-lg text-white font-medium max-w-[60%]">
              Contact
            </button>
          </div>
          <div className="px-5 grow overflow-y-auto mt-8 hidescroll">
            <div className="grid grid-cols-3 gap-5">
              {data?.usersLinks?.map((item) => (
                <div
                  key={item?.linkId}
                  onClick={() => handleClick(item)}
                  className="bg-lightblue/5 p-5 rounded-lg shadow hover:scale-105 duration-150 cursor-pointer select-none"
                >
                  <img
                    className="w-full aspect-square object-cover object-center rounded-xl"
                    src={item?.imageUrl}
                    alt=""
                  />
                  <p className="text-sm text-center font-medium mt-2 text-gray-600">{item?.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default User;
