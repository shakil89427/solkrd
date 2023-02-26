import demobg from "../../assets/images/demobg.jpeg";

const Demo1 = () => {
  return (
    <div className="bg-gradient-to-r from-lightblue to-darkblue mt-10 lg:mt-16 xl:mt-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-5 py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="flex items-center justify-center">
          <img
            src={demobg}
            alt=""
            className="rounded-xl w-full max-w-[550px] aspect-square object-cover object-center"
          />
        </div>
        <div className="text-white xl:text-lg flex flex-col items-start justify-center">
          <p
            style={{ lineHeight: "120%" }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-5 max-w-[20ch] text-center mx-auto sm:ml-0 sm:text-left"
          >
            Find the right business card for you
          </p>
          <p
            style={{ lineHeight: "170%" }}
            className="mt-3 text-gray-100/90 text-center sm:text-left font-medium"
          >
            If you're like most people, you probably have a stack of business cards sitting in your
            wallet. And if you're like most people, those business cards are not doing much for you.
            They don't really help you stand out among the crowd. And they definitely don't help you
            get more customers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Demo1;
