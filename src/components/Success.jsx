import { Link } from "react-router-dom";
import { Footer } from ".";

const Success = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-5">
        <img
          src="/check.png"
          alt=""
          className="w-[50%] mx-auto animate-pulse"
        />
        <p>Form Submitted</p>
        <Link
          to="/"
          className="block py-3 px-10 bg-slate-500 text-white rounded-xl mx-5"
        >
          Go Home
        </Link>
      </div>
      <div className="w-full lg:px-44 md:px-20 px-5">
        <Footer />
      </div>
    </div>
  );
};

export default Success;
