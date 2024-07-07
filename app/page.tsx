"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Aviation from "@/public/aviation.jpg";
import Aerospace from "@/public/aerospace.jpg";
import Training from "@/public/training.jpg";
import { HiBars3, HiOutlineChevronDoubleRight, HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import dis1 from "@/public/dis-1.jpg";
import dis2 from "@/public/12.jpg";
import dis3 from "@/public/6.jpg";
import why1 from "@/public/why-1.jpg";
import why2 from "@/public/why-2.jpg";
import why3 from "@/public/why-3.jpg";
import why4 from "@/public/why-4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,

    // centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings3 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus provident necessitatibus expedita, possimus qui adipisci commodi soluta magni laborum.",
      name: "President",
      title: "Chief owner",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus provident necessitatibus expedita, possimus qui adipisci commodi soluta magni laborum.",
      name: "Head Aviation",
      title: "Charter Company, China",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus provident necessitatibus expedita, possimus qui adipisci commodi soluta magni laborum.",
      name: "Phil Hirn",
      title: "Private Company, India",
    },
  ];
  const dis = [{ image: dis1 }, { image: dis2 }, { image: dis3 }];
  const why = [
    {
      image: why1,
    },
    {
      image: why2,
    },
    {
      image: why3,
    },
    {
      image: why4,
    },
  ];

  return (
    <div>
      <div className=" text-white  fixed  z-50 rotate-90 -right-14 flex items-center bg-red-500  top-1/2 ">
        <HiMail className="size-8 text-white" />
        <p className="bg-red-500 py-3 px-3">Enquire now</p>
      </div>

      <div className="hidden bg-purple-950 text-center text-white lg:block w-full">
        <div className="flex  justify-between  text-sm pr-10">
          <div className="bg-red-700   pl-8 px-3">
            <p>Tentacle Aerologist Pvt. Ltd</p>
          </div>
          <div className="flex px-5 space-x-4 justify-between">
            <div className="hover:text-red-600 flex space-x-2 items-center cursor-pointer">
              <FaLocationPin />
              <p>India & USA</p>
            </div>
            <div className="hover:text-red-600 flex space-x-2 items-center cursor-pointer">
              <p>Aerospace</p>
            </div>
            <div className="hover:text-red-600 flex space-x-2 items-center cursor-pointer">
              <SiGmail />
              <p>solutions@tentacle.in</p>
            </div>
            <div className="hover:text-red-600 flex space-x-2 items-center cursor-pointer">
              <HiPhone />
              <p>+91 80 2844 5866, +91 99019 04833</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <FaFacebook className="size-4" />
            <FaLinkedin className="size-4" />
          </div>
        </div>
      </div>

      <div className="py-8 flex space-x-10 sm:space-x-24 md:space-x-48 px-5  lg:justify-between lg:items-center">
        <div className="lg:hidden">
          <HiBars3 className="size-9" />
        </div>
        <div className="">
          <Image
            src={Logo}
            width={400}
            height={400}
            alt="logo"
            className="w-44"
          />
        </div>
        <div className="lg:flex hidden">
          <ul className="flex text-xs space-x-7">
            <li className="hover:text-red-600">HOME</li>
            <li className="hover:text-red-600">ABOUT </li>
            <li className="hover:text-red-600">PRODUCT & SERVICES</li>
            <li className="hover:text-red-600">CERTIFICATIONS</li>
            <li className="hover:text-red-600">DISTRIBUTORSHIP</li>
            <li className="hover:text-red-600">GALLERY</li>
          </ul>
        </div>
        <button className="text-xs py-2 border hidden lg:flex border-purple-600 px-2">
          CONTACT
        </button>
      </div>
      <div className="hidden bg-purple-950 text-center text-white lg:block">
        <div
          className="flex 
         
        px-5 
        items-center
         justify-between"
        >
          <div className="hover:bg-red-600 px-10 py-3 cursor-pointer">
            <p>Aviation</p>
          </div>
          <div className="hover:bg-red-600 px-10 py-3 cursor-pointer">
            <p>Aerospace</p>
          </div>
          <div className="hover:bg-red-600 px-10 py-3 cursor-pointer">
            <p>Aviation Training</p>
          </div>
          <div className="hover:bg-red-600 px-10 py-3 cursor-pointer">
            <p>MRO</p>
          </div>
          <div className="hover:bg-red-600 px-10 py-3 cursor-pointer">
            <p>Tentacell</p>
          </div>
        </div>
      </div>

      <div>
        <Slider {...settings}>
          <div>
            <motion.div className="relative">
              <Image
                src={Aerospace}
                width={700}
                height={500}
                alt="train"
                className="w-full h-80 md:h-[420px]"
              />
              <motion.div className="absolute top-1/4 text-center text-white right-0 left-0">
                <motion.h2
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="text-3xl font-semibold"
                >
                  AUTHORIZED
                </motion.h2>
                <motion.p
                  initial={{ y: 24 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  DISTRIBUTOR
                </motion.p>
                <motion.div
                  initial={{ y: 34 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Image
                    src={dis1}
                    width={200}
                    height={100}
                    alt="dis1"
                    className="w-36 h-10 mx-auto mt-9"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.div className="relative">
              <Image
                src={Training}
                width={700}
                height={500}
                alt="train"
                className="w-full h-80 md:h-[420px]"
              />
              <motion.div className="absolute top-1/2">
                <motion.h2
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="text-3xl font-semibold"
                >
                  Keep Flying
                </motion.h2>
              </motion.div>
            </motion.div>
          </div>
        </Slider>
      </div>
      <div className="bg-slate-100 pt-10 md:-pt-10 md:-mt-24">
        <div className="md:flex md:justify-center md:items-center md:space-x-14 md:w-4/5 md:mx-auto">
          <div className="bg-white text-center w-[94%] mx-auto translate-y-0 transition-all duration-500 group hover:-translate-y-3">
            <div>
              <h2 className="text-black font-semibold pb-5 pt-2">Aviation</h2>
            </div>
            <div>
              <Image
                src={Aviation}
                width={700}
                height={500}
                alt="aviation"
                className="w-full"
              />
            </div>
          </div>

          <div className="md:mt-0 mt-4 bg-white text-center w-[94%] mx-auto translate-y-0 transition-all duration-500 group hover:-translate-y-3">
            <div>
              <h2 className="text-black font-semibold pb-5 pt-2">
                Aerospace & Defence
              </h2>
            </div>
            <div>
              <Image
                src={Aerospace}
                width={700}
                height={500}
                alt="aviation"
                className="w-full"
              />
            </div>
          </div>

          <div className="md:mt-0 mt-4 bg-white text-center w-[94%] mx-auto translate-y-0 transition-all duration-500 group hover:-translate-y-3">
            <div>
              <h2 className="text-black font-semibold pb-5 pt-2">MRO</h2>
            </div>
            <div>
              <Image
                src={Aviation}
                width={700}
                height={500}
                alt="aviation"
                className="w-full"
              />
            </div>
          </div>

          <div className="md:mt-0 mt-4 bg-white text-center w-[94%] mx-auto translate-y-0 transition-all duration-500 group hover:-translate-y-3">
            <div>
              <h2 className="text-black font-semibold pb-5 pt-2">
                Aviation Training
              </h2>
            </div>
            <div>
              <Image
                src={Aerospace}
                width={700}
                height={500}
                alt="aviation"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto mt-10 pb-6 md:py-20">
          <p className="text-center font-medium text-sm">
            We understand the criticality of our customer's need{" "}
            <span className="font-bold underline">Get in Touch with us</span>
          </p>
        </div>
      </div>

      <div className="md:flex md:w-5/6 md:mx-auto md:space-x-10">
        <div className="mt-10 px-5 md:w-[50%]">
          <div>
            <p className="text-red-800 text-sm font-semibold">ABOUT US</p>
            <p className="text-2xl font-bold mt-5">Welcome To Tentacles</p>
            <p className="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              odio aut reiciendis labore deleniti perferendis illo consequatur,
              deserunt sit incidunt tenetur blanditiis, officiis alias odit
              ducimus nesciunt. Doloribus, dolorem ratione? Reiciendis corrupti,
              voluptate eum molestias sapiente amet hic.
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              laboriosam voluptate modi eius earum.
            </p>
            <div className="flex space-x-4 mt-6 text-sm text-red-800  ">
              <p className=" border-b border-b-black">Read More</p>
              <p className="text-black">|</p>
              <p className="border-b border-b-black">
                Online Product Carologue
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:w-[50%]">
          <div className="relative">
            <Image
              src={Aviation}
              width={800}
              height={900}
              alt="bg_img"
              className="opacity-35 h-[520px] w-[92%] mx-auto"
            />
            <div className="absolute top-0 right-0 left-0 text-center w-5/6 mx-auto">
              <h2 className="text-4xl font-semibold mt-10">
                What our Clients say
              </h2>
              <Slider {...settings1}>
                {data.map((item, index) => (
                  <div key={index}>
                    <p className="mt-20 text-lg">{item.message}</p>
                    <p className="font-semibold mt-20">{item.name}</p>
                    <p>{item.title}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="relative">
          <Image
            src={Aerospace}
            width={800}
            height={900}
            alt="bg_img"
            className="opacity-55 h-80 w-full md:h-96"
          />
          <div className="absolute top-0 right-0 left-0 text-center w-[95%] mx-auto">
            <p className="text-[16px] font-bold mt-10">
              TENTACLES IS AN AUTHORIZED DISTRIBUTOR FOR MANY INTERNATIONALLY
              RECOGNIZED MANUFACTURERS
            </p>
            <p className="font-semibold text-2xl mt-10">Distributorship</p>
            <Slider {...settings3}>
              {dis.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.image}
                    width={800}
                    height={900}
                    alt="bg_img"
                    className="w-32 mx-auto mt-5"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="w-full md:bg-slate-100 py-10">
        <div className="mt-8 md:w-4/5 md:mx-auto ">
          <Slider {...settings2}>
            {why.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.image}
                  width={800}
                  height={900}
                  alt="bg_img"
                  className="w-[95%] h-80 mx-auto translate-y-0 hover:-translate-y-2 hover:border-t-4 transition-all duration-500   border-t-8 border-t-red-600"
                />
              </div>
            ))}
          </Slider>
          <div className="mt-16 bg-slate-200 w-full shadow-xl md:w-4/5 md:mx-auto">
            <p className="md:w-1/2  border-l-4 py-4 px-5   text-lg font-bold border-l-red-500">
              THE LEADING AVIATION SUPPLY CHAIN MANAGEMENT COMPANY
              <span className="font-medium"> IN SOUTH ASIA SINCE 2008 </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 px-5 md:w-1/2 md:absolute md:right-7 md:-mt-[660px] md:bg-white md:p-4">
        <h2 className="font-bold text-2xl">Why Tentacles?</h2>
        <div className="flex space-x-7 mt-10">
          <p className="bg-red-700 size-12 font-bold rounded-full text-white flex justify-center items-center w-[40%] md:w-[30%]">
            01
          </p>
          <div>
            <p className="font-semibold">
              Large & Diversified Customer Portfolio
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus molestiae, veniam quis beatae necessitatibus culpa
              voluptatum magnam hic, dolor nihil atque iste vitae laudantium?
            </p>
          </div>
        </div>

        <div className="flex space-x-7 mt-5">
          <p className="md:w-[30%] bg-red-700 size-12 font-bold rounded-full text-white flex justify-center items-center w-[40%]">
            02
          </p>
          <div>
            <p className="font-semibold">
              Large & Diversified Customer Portfolio
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus molestiae, veniam quis beatae necessitatibus culpa
              voluptatum magnam hic, dolor nihil atque iste vitae laudantium?
            </p>
          </div>
        </div>

        <div className="flex space-x-7 mt-5">
          <p className="md:w-[30%] bg-red-700 size-12 font-bold rounded-full text-white flex justify-center items-center w-[40%]">
            03
          </p>
          <div>
            <p className="font-semibold">
              Large & Diversified Customer Portfolio
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus molestiae, veniam quis beatae necessitatibus culpa
              voluptatum magnam hic, dolor nihil atque iste vitae laudantium?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white px-5 pt-10 pb-5 md:grid md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-semibold text-2xl">About Us</h2>
          <hr className="border-2 border-red-600 w-[5%] mt-3" />
          <div className="mt-6">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              dolorem molestias atque impedit aliquam nobis dicta, sint adipisci
              quis tempora, tenetur soluta eius earum, deleniti animi error eum
              alias iure possimus illo.
            </p>
            <div className="flex space-x-5 mt-6">
              <RiFacebookCircleFill className="size-8 hover:text-red-600" />
              <RiLinkedinBoxFill className="hover:text-red-800 size-8" />
            </div>
            <button className="mt-6 text-xs bg-red-600 text-white font-semibold px-4 py-2 hover:bg-blue-700">
              READ MORE
            </button>
          </div>
        </div>

        <div className="mt-14 md:mt-0">
          <div>
            <h2 className="font-semibold text-2xl">Quick Links</h2>
            <hr className="border-2 border-red-600 w-[5%] mt-3" />
          </div>
          <div className="mt-10">
            <div className="flex items-center">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">Overview</p>
            </div>
            <div className="flex items-center mt-3">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">Distributorhip</p>
            </div>

            <div className="flex items-center mt-3">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">Annual returns</p>
            </div>
            <div className="flex items-center mt-3">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">News & Updates</p>
            </div>
            <div className="flex items-center mt-3">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">Career</p>
            </div>
            <div className="flex items-center mt-3">
              <HiOutlineChevronDoubleRight className="size-5 font-bold" />
              <p className="hover:text-red-600">Send Feedback</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div>
            <h2 className="font-semibold text-2xl">Products & Services</h2>
            <hr className="border-2 border-red-600 w-[5%] mt-3" />
          </div>
          <div className="flex items-center mt-10">
            <HiOutlineChevronDoubleRight className="size-5 font-bold" />
            <p className="hover:text-red-600">Aviation</p>
          </div>

          <div className="flex items-center mt-3">
            <HiOutlineChevronDoubleRight className="size-5 font-bold" />
            <p className="hover:text-red-600">Aerospace & Defence</p>
          </div>
          <div className="flex items-center mt-3">
            <HiOutlineChevronDoubleRight className="size-5 font-bold" />
            <p className="hover:text-red-600">MRO</p>
          </div>
          <div className="flex items-center mt-3">
            <HiOutlineChevronDoubleRight className="size-5 font-bold" />
            <p className="hover:text-red-600">Tentacell</p>
          </div>
          <div className="flex items-center mt-3">
            <HiOutlineChevronDoubleRight className="size-5 font-bold" />
            <p className="hover:text-red-600">Aviation Training</p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <div>
            <h2 className="font-semibold text-2xl">Contact Us</h2>
            <hr className="border-2 border-red-600 w-[5%] mt-3" />
          </div>
          <div className=" mt-10 ">
            <div className="flex space-x-4">
              <FaLocationPin className="size-5 font-bold text-red-600" />
              <p className="font-semibold text-sm">
                Tentacle Aerologistix Pvt. Ltd
              </p>
            </div>
            <div className="border-b-2 border-b-white pb-4">
              <p className="w-1/2 mt-5 ">
                Level 2, Indradhanush,#15, Gubbi Cross, Kothannur,
                Hennur-Bagalur Main Road, Bangalore 560 077, India.
              </p>
            </div>
            <div className="flex mt-5 space-x-5 border-b-2 border-b-white pb-5">
              <BiMessage className="size-7" />
              <p className="font-bold">solutions@tentacle.in</p>
            </div>
            <div className="flex space-x-5 mt-5">
              <HiPhone className="size-7" />
              <div>
                <p>+91 80 2844 5866</p>
                <p>+91 99019 04833</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-950 pt-20 pb-5  mx-auto text-center text-slate-500">
        <p className="w-4/5 mx-auto">
          Copyright @ 2008-2024 Tentacle Aerologistix Pvt. Ltd. All rights
          reserved. Website Developed by 3ACES
        </p>
      </div>
    </div>
  );
}
