import { useState } from "react";
import contactusbanner from "../../assets/images/contactusbanner.png";
import bigbg from "../../assets/images/bigbg.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Index = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestions] = useState("");

  return (
    <>
      <Header />
      <div className="container px-0">
        <img
          loading="lazy"
          src={contactusbanner}
          alt=""
          className="w-full aspect-[4/1.6] lg:aspect-[4/1.4] object-cover object-center"
        />
      </div>
      <div className="container">
        <div
          className="my-8 bg-cover bg-center bg-no-repeat p-5"
          style={{ backgroundImage: `url(${bigbg})` }}
        >
          <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 text-center">
            Fill out the form below
          </p>
          <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 text-center">
            and we will get back to you ASAP
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto"
          >
            <div className="grid gap-1 grid-cols-1">
              <p className="font-medium">Full Name</p>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                required
                className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
              />
            </div>
            <div className="grid gap-1 grid-cols-1">
              <p className="font-medium">Email Address</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
              />
            </div>
            <div className="grid gap-1 grid-cols-1">
              <p className="font-medium">Phone</p>
              <input
                value={phone}
                onChange={(e) => {
                  /^[0-9]*$/.test(e.target.value) && setPhone(e.target.value);
                }}
                type="text"
                className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
              />
            </div>
            <div className="grid gap-1 grid-cols-1">
              <p className="font-medium">Address</p>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
              />
            </div>
            <div className="md:col-span-2 grid gap-1 grid-cols-1">
              <p className="font-medium">What is your questions about</p>
              <textarea
                value={question}
                onChange={(e) => setQuestions(e.target.value)}
                rows="6"
                className="rounded-lg border-0 outline-none p-2 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-blue-800 to-blue-400 py-3 font-medium text-white outline-none rounded-lg"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
