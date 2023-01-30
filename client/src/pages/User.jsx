import { useParams } from "react-router-dom";
import useGetUser from "../hooks/queries/useGetUser";
import mainlogo from "../assets/images/mainlogo.png";

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
      <div className="w-full h-full md:w-[450px] md:h-fit md:max-h-[90%] md:rounded-xl overflow-hidden flex flex-col items-start justify-start pb-2 bg-white">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt=""
          className="w-full aspect-[2/1] shrink-0"
        />
        <div className="relative w-36 h-36 mx-auto -mt-20 bg-white p-1.5 rounded-full px-2 shrink-0">
          <img
            src={data?.profileImageUrl}
            alt=""
            className="w-full h-full rounded-full object-cover object-center"
          />
          <div className="absolute w-16 h-16 bg-white p-1 rounded-full right-0 bottom-0 translate-x-2">
            <img
              src={mainlogo}
              alt=""
              className="w-full h-full rounded-full object-cover object-center"
            />
          </div>
        </div>
        <div className="text-center my-4 font-medium px-2 shrink-0 w-full">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">{data?.name}</p>
          <p className="text-sm lg:text-base text-gray-500">Los Angeles,CA</p>
          <p className="text-sm lg:text-base text-gray-500 mt-2">{data?.bio}</p>
          <button className="w-full h-12 max-w-[300px] block mx-auto bg-black mt-5 text-white rounded-full text-base font-semibold duration-300 hover:scale-105">
            Connect
          </button>
        </div>
        <div className="px-2 overflow-y-auto grow scroller">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat facilis tempora
          consequatur iste minima officiis quisquam in temporibus quis similique architecto, odit
          nisi quam officia asperiores. Eum eaque accusantium, iusto autem dignissimos eos accusamus
          architecto, tempore, impedit ab blanditiis magnam! Earum accusantium ipsa dolorem
          reiciendis, fugiat quam odio alias facilis maxime nostrum recusandae sapiente vel repellat
          nesciunt voluptas, dignissimos voluptatum voluptatibus iusto illo eveniet praesentium
          illum, eum consectetur dolore? Ad adipisci, alias mollitia incidunt officiis in culpa
          iste, nisi tempora dolorum ullam error vitae inventore fugit minus ex architecto dicta et
          pariatur. Asperiores est magni eius illum atque vero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corrupti repellat facilis tempora consequatur iste minima
          officiis quisquam in temporibus quis similique architecto, odit nisi quam officia
          asperiores. Eum eaque accusantium, iusto autem dignissimos eos accusamus architecto,
          tempore, impedit ab blanditiis magnam! Earum accusantium ipsa dolorem reiciendis, fugiat
          quam odio alias facilis maxime nostrum recusandae sapiente vel repellat nesciunt voluptas,
          dignissimos voluptatum voluptatibus iusto illo eveniet praesentium illum, eum consectetur
          dolore? Ad adipisci, alias mollitia incidunt officiis in culpa iste, nisi tempora dolorum
          ullam error vitae inventore fugit minus ex architecto dicta et pariatur. Asperiores est
          magni eius illum atque vero!
        </div>
      </div>
    </div>
  );
};
export default User;
