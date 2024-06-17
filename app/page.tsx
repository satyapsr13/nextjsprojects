import Image from "next/image";
import Logo from "../public/images/logo.png";
import DevImage from "../public/images/dev.png";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Header from "./component/header";
import Home2 from "../public/images/home2.png";
import { FaVideo } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "./component/footer";
import IconButton from "./component/iconButton";
import Project from "./component/project";
export default function Home() {
  return (
    <div className="  ">
      <Header />

      <section className="bg-secondary mx-auto h-screen px-8 md:px-16 overflow-hidden ">
        <div
          className="md:h-screen  pt-32 pb-8    text-center md:pt-1 bg-secondary  md:flex  items-center justify-evenly "
          id="home"
        >
          <div className=" text-white  p-2 w-full md:w-1/2 bg-slate-500  flex flex-col items-start text-start ">
            <h2 className="py-2 text-lg  ">Hello, It's Me</h2>
            <h1 className="text-5xl font-bold py-2">Satya Prakash</h1>
            <p className="py-2 text-xl">
              I'm <span className="text-primary">Software Engineer</span>{" "}
            </p>

            <p className=" py-2">
              SDE @ Styava Pvt Ltd. I am good at Mobile application Development
              & Web Development. Currently learning NextJs & Springboot
              (Microservices).
            </p>
            <div>
              {/* <IconButton
                icon={FaLinkedinIn}
                hoverColor="#00eeff"
                size="w-12 h-12"
                iconSize="w-10 h-10"
                borderColor="white"
                link="https://www.linkedin.com/in/satyapsr13/"
              /> */}
            </div>
          </div>
          <div className=" bg-red-400  w-full md:w-1/2 flex justify-center items-center mx-auto ">
            <div className="w-64 h-64">
              <Image src={DevImage} alt={""} />
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <Project/>
      

      <Footer />
    </div>
  );
}
