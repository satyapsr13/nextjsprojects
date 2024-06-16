import Image from "next/image";
import Logo from "../public/images/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Header from "./component/header";
import Home2 from "../public/images/home2.png";
import { FaVideo } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import Footer from "./component/footer";
export default function Home() {
  return (
    <div className=" bg-red-500   ">
    {/* <div className=" bg-[#f6ede1]  "> */}
      <Header />
      <section>
        <div className="  grid md:grid-cols-2  gap-4 max-w-7xl    md:mx-auto ">
          <div className="  items-center justify-center w-full ">
            <div>
              <p className="md:text-6xl text-xl text-center font-bold text-[#003b55]">
                Connecting developers and tech experts
              </p>
            </div>
            <div className="flex pt-8">
              <div className="w-36 h-12 hidden   justify-center rounded-3xl text-center items-center bg-[#f07443] text-white mx-4">
                Sign Up
              </div>

              <p className="text-[#a48e6e] text-ls text-center">
                A community where developer connect and learn from tech expert
                for free
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full">
            <Image
              className=" bg-[#f6ede1]"
              src={Home2}
              alt="Next.js Logo"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* <section className="">
        <div className="w-full  bg-[#2aaae1] ">
          <div className="w-full flex justify-center  -mt-12 ">
            <div className="w-16 h-16 mx-2 flex cursor-pointer items-center justify-center rounded-full bg-[#f6ede1]">
              <FaVideo size={25} color="#003b55" />
            </div>
            <div className="w-16 h-16 mx-2 flex items-center cursor-pointer justify-center rounded-full bg-[#f6ede1]">
              <MdAddCall size={25} color="#003b55" />
            </div>{" "}
            <div className="w-16 h-16 mx-2 flex items-center cursor-pointer justify-center rounded-full bg-[#f6ede1]">
              <FaMicrophoneAlt size={25} color="#003b55" />
            </div>
          </div>
          <h1 className="text-white flex justify-center text-xl my-4">
            Recorded Training
          </h1>
        </div>
      </section> */}

      <section className="bg-[#2aaae1] p-4  ">
        <div className=" sm:h-96 md:h-72 grid md:grid-cols-4 mx-auto gap-4 max-w-xl justify-center ">
          <div className="  md:p-1 bg-[#dcfbff] flex flex-col items-center justify-around  rounded-2xl">
            <Image
              src={"https://pngfre.com/wp-content/uploads/Ladies-Bag-17.png"}
              width={50}
              height={50}
              alt={""}
            />
            <h1 className="text-center text-[#2aaae1] font-bold">
              Beiggner Friendly
            </h1>
          </div>
          <div className="w-full bg-[#dcfbff] md:col-span-2 flex flex-col items-center justify-evenly  rounded-2xl">
            <Image
              src={"https://pngfre.com/wp-content/uploads/Ladies-Bag-17.png"}
              width={50}
              height={50}
              alt={""}
            />
            <h1 className="text-center text-[#2aaae1] font-bold">
              Beiggner Friendly
            </h1>
          </div>
          <div className="w-full bg-[#dcfbff] flex flex-col items-center justify-evenly md:row-span-2 rounded-2xl">
            <Image
              src={"https://pngfre.com/wp-content/uploads/Ladies-Bag-17.png"}
              width={50}
              height={50}
              alt={""}
            />
            <h1 className="text-center text-[#2aaae1] font-bold">
              Beiggner Friendly
            </h1>
          </div>
          <div className="w-full bg-[#dcfbff] flex flex-col items-center justify-evenly md:col-span-2 rounded-2xl">
            <Image
              src={"https://pngfre.com/wp-content/uploads/Ladies-Bag-17.png"}
              width={50}
              height={50}
              alt={""}
            />
            <h1 className="text-center text-[#2aaae1] font-bold">
              Beiggner Friendly
            </h1>
          </div>
          <div className="w-full  bg-[#dcfbff] flex flex-col items-center justify-evenly  rounded-2xl">
            {" "}
            <Image
              src={"https://pngfre.com/wp-content/uploads/Ladies-Bag-17.png"}
              width={50}
              height={50}
              alt={""}
            />
            <h1 className="text-center text-[#2aaae1] font-bold">
              Beiggner Friendly
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto  bg-[#003b55] flex-col items-center  justify-center">
          <div className="text-white text-center"> Events</div>
          <div>
            {" "}
            <p className="text-white text-center m-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              labore asperiores accusamus beatae! Corporis quo esse magnam rem
              qui voluptatum?
            </p>{" "}
          </div>
          <div className="sm:min-h-96 md:min-h-64 max-w-4xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 p-4  ">
            <div className="   bg-white rounded-xl">sa</div>
            <div className="  bg-[#2aaae1] rounded-xl"></div>
            <div className="  bg-white rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* <div className="h-64"></div> */}
      <section>
        <div className="w-full bg-[#f6ede1] p-8">
          <h2 className="text-orange-500 text-center ">Review</h2>
          <h1 className="text-center text-[#003b55] text-2xl font-extrabold my-8">
            Hear what our members say
          </h1>
          {/* <div></div> */}
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-4 min-h-64  ">
            <div className="  rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
            <div className=" rounded-2xl  bg-white   border-black border-2"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
