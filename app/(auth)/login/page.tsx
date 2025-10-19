"use client"
import { GoogleLogin } from "@/lib/auth-client";
import { ArrowLeft, Award, Contact, LocateFixed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { RiContactsLine } from "react-icons/ri";
export default function Page() {

  
  return (
    <div className="w-full  relative">
      <div className=" relative max-w-7xl min-h-screen flex  mx-auto w-full  justify-center items-center p-2">
        <div className=" grid gap-2  max-w-2xl  md:max-w-4xl mx-auto w-full   min-h-[600px]">
          <div className=" relative flex flex-col  mt-14 justify-between  ">
            <Main />
            <p className=" flex text-xs dark:text-neutral-500 text-neutral-700 font-semibold mt-6">
              © 2025 isuzwal. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

const Main = () => {
  return (
    <div className="  relative flex gap-1  mt-10  p-6 ">
      <div className=" h-10 w-8  border-neutral-700 dark:border-neutral-500 absolute  left-0 top-0 border-t-2 border-l-2  " />
      <div className=" h-10 w-8  border-neutral-700 dark:border-neutral-500 absolute z-10  bottom-0 right-0 border-r-2 border-b-2  " />
      <div className="flex flex-1 flex-col  gap-3   ">
        <h1 className=" flex flex-col  justify-start   font-semibold text-[12px]">
          isuzwal
          <p className="text-neutral-500 text-[10px] ">Working on the college project</p>
        </h1>
        <div className="flex gap-2 justify-between  items-center w-full mt-2 ">
          <div className="w-52   relative rounded-4xl h-10 flex  items-center bg-neutral-100  dark:bg-neutral-900 dark:border-neutral-950 border border-neutral-200  ">
            <Image
              src={"/images/isuzwal.jpg"}
              height={50}
              width={30}
              alt="isuzwal"
              className=" ml-1 z-40 rounded-full border border-neutral-50 dark:border-neutral-800"
            />
            <Image
              src={"/images/old.jpeg"}
              height={50}
              width={30}
              alt="isuzwal"
              className="rounded-full  z-30   absolute   left-6  border-neutral-50 border dark:border-neutral-800"
            />
            <Image
              src={"/images/isuzwal.jpg"}
              height={50}
              width={30}
              alt="isuzwal"
              className=" absolute  z-20  left-12 rounded-full border border-neutral-50 dark:border-neutral-800"
            />
            <Image
              src={"/images/isuzwal.jpg"}
              height={50}
              width={30}
              alt="isuzwal"
              className="rounded-full z-10  absolute left-18 border dark:border-neutral-800"
            />
          </div>
          <p className="text-neutral-500 font-semibold text-[10px] leading-tight w-full">
            Join with{" "}
            <span className="dark:text-neutral-700 text-neutral-950 font-bold">1500+</span>
            <br />
            happy users
          </p>
        </div>
        <div className="flex  w-full gap-2 flex-col mt-2   ">
          <div>
            <h1 className=" dark:text-neutral-300  text-neutral-950 font-semibold text-2xl ">
              Your Studio Is Ready.
            </h1>
            <h2 className="dark:text-neutral-300  text-neutral-950 font-semibold text-2xl">
              Let Every Call Tell a Story
            </h2>
          </div>
          <p className=" mt-1 text-neutral-500 font-semibold text-[10px] leading-tight">
            {" "}
            Log in to start building your next million-dollar SaaS company. <br />
            Your dream is our mission. Let’s make it real.{" "}
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2 ">
          <Link
            href="/"
            className="relative px-5 py-3 rounded flex gap-2 items-center border border-neutral-200 dark:border-neutral-900 bg-zinc-200 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 text-[12px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white dark:from-neutral-950 dark:to-neutral-900 z-0 transition-all duration-500 group-hover:scale-110" />

            <div className="flex items-center gap-2 z-10 relative">
              <ArrowLeft className="size-4" />
              <span>Back</span>
            </div>
          </Link>
          <button onClick={GoogleLogin} className="relative flex items-center gap-2 text-neutral-800 dark:text-neutral-300 px-3 py-3 cursor-pointer border border-neutral-200 dark:border-neutral-900 bg-zinc-200 dark:bg-neutral-900 text-[12px] rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white dark:from-neutral-950 dark:to-neutral-900 z-0" />

            <div  className="flex items-center  text-neutral-500   font-semibold gap-2 z-10 relative">
              <FcGoogle />
              Continue with Google
            </div>
          </button>
        </div>
      </div>
      <div className=" hidden relative sm:flex   w-72 h-full  overflow-hidden">
        <Image src="/images/isuzwal.jpg" fill alt="_change" className="object-cover relative" />
        <button  className=" cursor-pointer rounded-md bg-neutral-600/30   absolute bottom-1 right-1 text-neutral-500 font-semibold  text-[10px] px-3 py-1.5 flex items-center gap-2"><RiContactsLine />Contact us</button>
      </div>
    </div>
  );
};
