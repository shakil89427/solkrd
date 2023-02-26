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
      <div className="mb-28">
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
            className="mt-8 bg-cover bg-center bg-no-repeat p-5 sm:p-8 md:p-11 lg:p-14"
            style={{ backgroundImage: `url(${bigbg})` }}
          >
            <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
              Fill out the form below
            </p>
            <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
              and we will get back to you ASAP
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 max-w-[1200px] mx-auto"
            >
              <div className="grid gap-2 grid-cols-1">
                <p className="font-medium text-lg text-black/80">Full Name</p>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  required
                  className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
                />
              </div>
              <div className="grid gap-2 grid-cols-1">
                <p className="font-medium text-lg text-black/80">Email Address</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
                />
              </div>
              <div className="grid gap-2 grid-cols-1">
                <p className="font-medium text-lg text-black/80">Phone</p>
                <input
                  value={phone}
                  onChange={(e) => {
                    /^[0-9]*$/.test(e.target.value) && setPhone(e.target.value);
                  }}
                  type="text"
                  className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
                />
              </div>
              <div className="grid gap-2 grid-cols-1">
                <p className="font-medium text-lg text-black/80">Address</p>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="h-12 rounded-lg border-0 outline-none px-2 bg-white"
                />
              </div>
              <div className="md:col-span-2 grid gap-2 grid-cols-1">
                <p className="font-medium text-lg text-black/80">What is your questions about</p>
                <textarea
                  value={question}
                  onChange={(e) => setQuestions(e.target.value)}
                  rows="6"
                  className="rounded-lg border-0 outline-none p-2 bg-white resize-none"
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
      </div>
      <Footer />
    </>
  );
};
export default Index;
