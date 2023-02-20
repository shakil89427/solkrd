import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetUser from "../hooks/queries/useGetUser";
import logorect from "../assets/images/logorect.png";
import HashLoader from "react-spinners/HashLoader";
import useUpdateUsersLinks from "../hooks/mutations/useUpdateUsersLinks";
import useAddUsersContacts from "../hooks/mutations/useAddUsersContacts";

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { isInitialLoading, data } = useGetUser(userId);
  const updateUsersLinks = useUpdateUsersLinks();
  const addUsersContacts = useAddUsersContacts(
    setShowContact,
    setName,
    setEmail,
    setPhone,
    setMessage
  );

  const handleClick = async (item) => {
    if (item?.type === "address") {
    }
    if (item?.type === "upi") {
    }
    if (item?.type === "link") {
      window.open(item?.link);
    }
    if (item?.type === "number" && item?.link?.includes("http")) {
      window.open(item?.link);
    }
    if (item?.type === "number" && !item?.link?.includes("http")) {
      window.open(`tel:${item?.link}`);
    }
    if (item?.type === "email") {
      window.open(`mailto:${item?.link}`);
    }
    updateUsersLinks.mutate({ userId, linkId: item?.linkId });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black">
      {isInitialLoading && <HashLoader size={30} color="blue" />}
      {!isInitialLoading && !data?.userId && <p className="text-white">Something went wrong</p>}
      {data?.userId && (
        <div className="w-full h-full md:max-w-[450px] md:h-[90%] md:max-h-[850px] overflow-hidden bg-white relative flex flex-col items-start justify-start md:rounded-xl">
          <div className="h-16 bg-mediumblue px-2 flex items-center w-full shrink-0">
            <img
              onClick={() => navigate("/")}
              loading="lazy"
              src={logorect}
              alt=""
              className="w-28"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-2 w-full shrink-0 px-2">
            <img
              loading="lazy"
              src={data?.profileImageUrl}
              alt=""
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <p className="font-semibold text-lg text-mediumblue">{data?.name}</p>
            <p className="text-xs text-gray-600 max-w-[80%] text-center">{data?.bio}</p>
            <button
              onClick={() => setShowContact(true)}
              className="bg-mediumblue h-12 w-full mt-2 rounded-lg text-white font-medium max-w-[60%]"
            >
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
                    loading="lazy"
                  />
                  <p className="text-sm text-center font-medium mt-2 text-gray-600">{item?.name}</p>
                </div>
              ))}
            </div>
          </div>
          {showContact && (
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowContact(false)} />
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addUsersContacts.mutate({ userId, name, email, phone, message });
            }}
            className={`absolute left-0 bottom-0 p-5 bg-white grid grid-cols-1 gap-4 w-full duration-200 rounded-xl ${
              showContact ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="h-11 px-2 rounded border border-lightblue outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="h-11 px-2 rounded border border-lightblue outline-none"
            />
            <input
              value={phone}
              onChange={(e) => {
                !/\D/g.test(e.target.value) && setPhone(e.target.value);
              }}
              required
              type="text"
              placeholder="Enter your phone"
              className="h-11 px-2 rounded border border-lightblue outline-none"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              placeholder="Message"
              className="p-2 rounded border border-lightblue outline-none resize-none"
            ></textarea>
            <button
              disabled={addUsersContacts.isLoading}
              type="submit"
              className="bg-mediumblue h-11 rounded text-white font-medium flex items-center justify-center"
            >
              {addUsersContacts.isLoading ? (
                <HashLoader size={20} color="white" />
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default User;
