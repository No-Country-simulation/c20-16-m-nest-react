import { FaRegHeart } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCloud } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section className="relative flex justify-center items-center w-full h-[600px] bg-[url('/images/background-about-us.png')] bg-cover bg-no-repeat">
      <div className="relative size-[300px] bg-[url('/images/picture-about-us.png')] bg-cover bg-center md:size-[400px]">
        <div className="absolute p-3 top-0 left-0 bg-secondary-v3 rounded-full md:p-6">
          <FaRegHeart className="text-4xl text-white" />
        </div>
        <div className="absolute p-3 top-0 right-0 bg-secondary-v3 rounded-full md:p-6">
          <BsChatHeart className=" text-4xl text-white" />
        </div>
        <div className="absolute p-3 bottom-0 left-0 bg-secondary-v3 rounded-full md:p-6">
          <AiOutlineUser className=" text-4xl text-white" />
        </div>
        <div className="absolute p-3 bottom-0 right-0 bg-secondary-v3 rounded-full md:p-6">
          <AiOutlineCloud className=" text-4xl text-white" />
        </div>
      </div>
    </section>
  );
}
