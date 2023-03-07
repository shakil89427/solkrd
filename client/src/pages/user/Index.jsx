import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetUser from "../../hooks/queries/useGetUser";
import logorect from "../../assets/images/logorect.png";
import productlogo from "../../assets/images/productlogo.png";
import Loading from "../../components/Loading";
import useUpdateUsersLinks from "../../hooks/mutations/useUpdateUsersLinks";
import useAddUsersContacts from "../../hooks/mutations/useAddUsersContacts";
import { BsArrowLeft } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { toast } from "react-toastify";

const Index = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showContact, setShowContact] = useState(false);
  const [showUpi, setShowUpi] = useState({});
  const [showAttachments, setShowAttachments] = useState(false);
  const [showAttachment, setShowAttachment] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { isLoading, isError, data } = useGetUser(userId);
  const updateUsersLinks = useUpdateUsersLinks();
  const addUsersContacts = useAddUsersContacts(
    setShowContact,
    setName,
    setEmail,
    setPhone,
    setMessage
  );

  const handleLink = async (item) => {
    if (item?.type?.toLowerCase() === "address") {
      window.open(`https://maps.google.com/?q=${item?.link}`);
    }
    if (item?.type?.toLowerCase() === "upi") {
      setShowUpi(item);
    }
    if (item?.type?.toLowerCase() === "attachment") {
      setShowAttachment(item);
    }
    if (item?.type?.toLowerCase() === "link") {
      window.open(item?.link);
    }
    if (item?.type?.toLowerCase() === "number" && item?.link?.includes("http")) {
      window.open(item?.link);
    }
    if (item?.type?.toLowerCase() === "number" && !item?.link?.includes("http")) {
      window.open(`tel:${item?.link}`);
    }
    if (item?.type?.toLowerCase() === "email") {
      window.open(`mailto:${item?.link}`);
    }
    updateUsersLinks.mutate({ userId, linkId: item?.linkId });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black">
        <Loading />
      </div>
    );
  }

  if (isError) {
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black">
      <p className="text-white">Something went wrong</p>
    </div>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black">
      <div className="w-full h-full md:max-w-[450px] md:h-[90%] md:max-h-[850px] overflow-hidden bg-white relative flex flex-col items-start justify-start md:rounded-xl">
        {/* Top */}
        <div className="h-16 bg-mediumblue px-2 flex items-center w-full shrink-0">
          <img
            onClick={() => navigate("/")}
            loading="lazy"
            src={logorect}
            alt=""
            className="w-28 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-2 w-full shrink-0 px-2">
          <img
            loading="lazy"
            src={data?.profileImageUrl}
            alt=""
            className="w-20 h-20 rounded-full object-cover object-center"
          />
          <p className="font-bold text-lg text-mediumblue">{data?.name}</p>
          <p className="text-sm text-gray-600 max-w-[80%] text-center">{data?.bio}</p>
          <button
            onClick={() => setShowContact(true)}
            className="bg-mediumblue h-12 w-full mt-2 rounded-md text-white font-semibold max-w-[60%] text-lg"
          >
            Contact
          </button>
        </div>
        <div className="px-5 pb-5 grow overflow-y-auto mt-8 hidescroll">
          <div className="grid grid-cols-3 gap-5">
            {/* Product */}
            {Array.isArray(data?.attachments) && data?.attachments?.length > 0 && (
              <div
                onClick={() => setShowAttachments(true)}
                className="bg-lightblue/5 p-5 pb-2 rounded-lg shadow hover:scale-105 duration-200 cursor-pointer select-none"
              >
                <img
                  className="w-full aspect-square object-cover object-center rounded-xl"
                  src={productlogo}
                  alt=""
                  loading="lazy"
                />
                <p className="text-sm text-center font-medium mt-2 text-gray-600">Products</p>
              </div>
            )}

            {/* Links */}
            {Array.isArray(data?.links) &&
              data?.links?.length > 0 &&
              data?.links?.map((item) => (
                <div
                  key={item?.linkId}
                  onClick={() => handleLink(item)}
                  className="bg-lightblue/5 p-5 pb-2 rounded-lg shadow hover:scale-105 duration-150 cursor-pointer select-none"
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

        {/* Contact form */}
        {showContact && (
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowContact(false)} />
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUsersContacts.mutate({ userId, name, email, phone, message });
          }}
          className={`absolute left-0 bottom-0 p-5 bg-white grid grid-cols-1 gap-5 w-full duration-200 rounded-xl overflow-y-auto max-h-[90%] hidescroll ${
            showContact ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <p className="text-center text-2xl font-semibold text-black/80">Please fill this form</p>
          <div>
            <p className="font-semibold text-black/80">* Name</p>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className={`h-11 px-2 rounded border outline-none w-full mt-1 focus:border-black/80 ${
                name ? "border-black/80" : ""
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-black/80">* Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className={`h-11 px-2 rounded border outline-none w-full mt-1 focus:border-black/80 ${
                email ? "border-black/80" : ""
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-black/80">* Phone</p>
            <input
              value={phone}
              onChange={(e) => {
                !/\D/g.test(e.target.value) && setPhone(e.target.value);
              }}
              required
              type="text"
              placeholder="Enter your phone"
              className={`h-11 px-2 rounded border outline-none w-full mt-1 focus:border-black/80 ${
                phone ? "border-black/80" : ""
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-black/80">* Message</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              placeholder="Type your message here"
              className={`p-2 rounded border outline-none resize-none w-full mt-1 focus:border-black/80 ${
                message ? "border-black/80" : ""
              }`}
            ></textarea>
          </div>
          <button
            disabled={addUsersContacts.isLoading}
            type="submit"
            className="bg-mediumblue h-11 rounded text-white font-medium flex items-center justify-center"
          >
            {addUsersContacts.isLoading ? <Loading size={20} color="#fff" /> : <span>Submit</span>}
          </button>
        </form>

        {/* Upi details */}
        <div
          className={`absolute inset-0 duration-200 rounded-xl bg-white flex flex-col items-center justify-start ${
            showUpi?.type ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-16 flex items-center justify-center bg-mediumblue text-white w-full shrink-0">
            <BsArrowLeft
              className="absolute left-4 text-3xl cursor-pointer"
              onClick={() => setShowUpi({})}
            />
            <p className="text-xl font-bold">UPI</p>
          </div>
          <img src={showUpi?.imageUrl} alt="" className="w-20 aspect-square shrink-0 mt-5" />
          <div className="text-black/80 font-bold mt-5 p-5 pt-0 grow overflow-y-auto hidescroll w-full">
            <p className="text-lg">Title:</p>
            <p className="mt-1 ml-3">{showUpi?.name}</p>
            <p className="text-lg mt-5">UPI Id:</p>
            <p className="mt-1 ml-3">{showUpi?.link}</p>
            <p
              onClick={() => {
                window.navigator.clipboard.writeText(showUpi?.link || "");
                toast.success("UPI ID Copied");
              }}
              className="h-11 bg-gradient-to-r from-darkblue to-mediumblue mt-7 rounded-full flex items-center justify-center text-white cursor-pointer"
            >
              COPY UPI ID
            </p>
          </div>
        </div>

        {/* All Attachments */}
        <div
          className={`absolute inset-0 duration-200 rounded-xl bg-white flex flex-col items-center justify-start ${
            showAttachments ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-16 flex items-center justify-center bg-mediumblue text-white w-full shrink-0">
            <BsArrowLeft
              className="absolute left-4 text-3xl cursor-pointer"
              onClick={() => setShowAttachments(false)}
            />
            <p className="text-xl font-bold">Products</p>
          </div>
          <div className="p-5 grow overflow-y-auto hidescroll w-full">
            <div className="grid grid-cols-1 gap-5">
              {Array.isArray(data?.attachments) &&
                data?.attachments?.length > 0 &&
                data?.attachments?.map((item) => (
                  <div
                    key={item?.linkId}
                    onClick={() => handleLink(item)}
                    className="bg-lightblue/5 p-5 rounded-lg hover:scale-[101%] duration-200 cursor-pointer select-none flex items-center justify-center hover:bg-lightblue/20"
                  >
                    <img
                      className="w-12 aspect-square object-cover object-center rounded-md shrink-0"
                      src={item?.imageUrl}
                      alt=""
                      loading="lazy"
                    />
                    <div className="ml-5 grow">
                      <p className="font-bold text-black/80 line-clamp-1">{item?.name}</p>
                      <p className="text-sm font-medium text-gray-600 line-clamp-1">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Attachment details */}
        <div
          className={`absolute inset-0 duration-200 rounded-xl bg-white flex flex-col items-center justify-start ${
            showAttachment?.type ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="h-16 flex items-center justify-center bg-mediumblue text-white w-full shrink-0">
            <BsArrowLeft
              className="absolute left-4 text-3xl cursor-pointer"
              onClick={() => setShowAttachment({})}
            />
            <p className="text-xl font-bold">Attachment</p>
          </div>
          {Array.isArray(showAttachment?.blob) && showAttachment?.blob?.length > 0 && (
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="bg-black aspect-video w-full shrink-0"
            >
              {showAttachment.blob.map((url) => (
                <SwiperSlide key={url}>
                  <img
                    src={url}
                    alt=""
                    className="h-full block mx-auto"
                    loading="lazy"
                    onClick={() => window.open(url)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="grow w-full overflow-y-auto hidescroll p-5">
            <p className="text-lg text-gray-500 font-bold">Title:</p>
            <p className="mt-1">{showAttachment?.name}</p>
            <p className="text-lg mt-5 text-gray-500 font-bold">Description</p>
            <p className="mt-1">{showAttachment?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
