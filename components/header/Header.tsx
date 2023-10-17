"use client";
import Image from "next/image";
import { Fade as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [ScreenPositioning, setScreenPositioning] = useState(0);
  const [MobileNavStatus, setMobileNavStatus] = useState(false);
  useEffect(() => {
    // Set the initial value of ScreenPositioning to window.pageYOffset
    const handleScroll = () => {
      setScreenPositioning(window.pageYOffset);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  function HandleMobileNavBar() {
    setMobileNavStatus(!MobileNavStatus);
  }
  return (
    <>
      {/* Main Header ---------------------------------------------------------- */}
      <nav
        className={`fixed inset-x-0 z-50  lg:flex lg:items-center lg:justify-between ${
          MobileNavStatus
            ? "h-[100dvh] bg-white  transition-all duration-500 "
            : "  h-[4.6rem] bg-transparent transition-all  duration-500"
        }  lg:px-9 ${
          ScreenPositioning > 9
            ? "top-0 transition-all duration-200"
            : "top-10 transition-all duration-200"
        }  
        ${
          ScreenPositioning > 9
            ? "bg-white lg:py-10"
            : "bg-transparent py-1 lg:py-10"
        }
        overflow-hidden `}
      >
        <section
          className={`grid  grid-flow-col grid-cols-3 place-items-center bg-transparent lg:grid-cols-1 `}
        >
          <div className="lg:hidden"></div>
          <Link
            onClick={() => {
              setMobileNavStatus(false);
            }}
            href={"/"}
          >
            {MobileNavStatus || ScreenPositioning > 9 ? (
              <Image
                src="/IIDC_Black_Logo.png"
                alt="India International Dance Congress Logo"
                width={100}
                height={100}
                className="w-[4.6rem] lg:w-[4.9rem]   "
              />
            ) : (
              <Image
                src="/IIDC_White_Logo.png"
                alt="India International Dance Congress Logo"
                width={100}
                height={100}
                className="w-16  lg:w-[4.2rem] "
              />
            )}
          </Link>

          {/* Menu Button For Mobile,sm and Md Screens --------------------------------*/}
          {MobileNavStatus || ScreenPositioning > 9 ? (
            <div className="ml-10 md:ml-36 lg:hidden" title="hamburger icon">
              <Hamburger
                toggled={MobileNavStatus}
                toggle={HandleMobileNavBar}
                color="#000000"
                distance="sm"
                size={24}
              />
            </div>
          ) : (
            <div className="ml-10 md:ml-36  lg:hidden" title="hamburger icon">
              <Hamburger
                toggled={MobileNavStatus}
                toggle={HandleMobileNavBar}
                color="#f1f1f1"
                distance="sm"
                size={24}
              />
            </div>
          )}
        </section>

        {/* Menu Button for Large Screen Only -------------------------------------------*/}
        <ul
          className={`hidden grid-flow-col place-items-center gap-10 text-[.76rem]   font-semibold  -tracking-tighter lg:grid ${
            ScreenPositioning > 9 ? "text-black" : "text-white"
          } `}
        >
          <li>
            {" "}
            <Link
              href={"/"}
              className={`${
                ScreenPositioning > 9
                  ? "hover:text-[#DF9627]"
                  : " hover:text-[#cecdcd]"
              } duration-500 `}
            >
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/about-iidc"}
              className={`${
                ScreenPositioning > 9
                  ? "hover:text-[#DF9627]"
                  : " hover:text-[#cecdcd]"
              } duration-500 `}
            >
              ABOUT IIDC
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              href={"/artist-lineup-iidc"}
              className={`${
                ScreenPositioning > 9
                  ? "hover:text-[#DF9627]"
                  : " hover:text-[#cecdcd]"
              } duration-500 `}
            >
              ARTISTS LINE-UP
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/about-venue"}
              className={`${
                ScreenPositioning > 9
                  ? "hover:text-[#DF9627]"
                  : " hover:text-[#cecdcd]"
              } duration-500 `}
            >
              ABOUT VENUE
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/iidc-itinerary"}
              className={`${
                ScreenPositioning > 9
                  ? "hover:text-[#DF9627]"
                  : " hover:text-[#cecdcd]"
              } duration-500 `}
            >
              {" "}
              EVENT ITINERARY
            </Link>
          </li>
          <li>
            <Link
              href={"/buy-tickets-iidc"}
              className="group flex items-center justify-center gap-1 rounded-md border-2 border-[#DF9627] px-5 py-3 transition-all duration-700  hover:bg-[#DF9627] "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-[#DF9627] transition-all duration-700  group-hover:fill-white"
                viewBox="0 0 24 24"
                id="ticket"
              >
                <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
              </svg>{" "}
              <h5 className="text-base text-[#DF9627] transition-all  duration-700 group-hover:text-white">
                BUY TICKETS
              </h5>{" "}
            </Link>
          </li>
        </ul>
        {/* mobile Dropdown -----------------------------------------------------*/}
        <nav className={` lg:hidden ${MobileNavStatus ? "block" : "hidden"}  `}>
          <ul className="ml-8 mt-8 grid  gap-6 overflow-scroll text-sm font-semibold -tracking-tight text-[#413030] ">
            <Link
              onClick={() => {
                setMobileNavStatus(false);
              }}
              href={"/"}
              className="duration-500 hover:text-[#DF9627]"
            >
              <li>HOME</li>
            </Link>

            <Link
              onClick={() => {
                setMobileNavStatus(false);
              }}
              href={"/about-iidc"}
              className="duration-500 hover:text-[#DF9627]"
            >
              <li>ABOUT IIDC</li>{" "}
            </Link>
            <Link
              onClick={() => {
                setMobileNavStatus(false);
              }}
              href={"/artist-lineup-iidc"}
              className="duration-500 hover:text-[#DF9627]"
            >
              <li>ARTISTS LINE-UP</li>
            </Link>
            <Link
              onClick={() => {
                setMobileNavStatus(false);
              }}
              href={"/about-venue"}
              className="duration-500 hover:text-[#DF9627]"
            >
              <li>ABOUT VENUE</li>{" "}
            </Link>
            <Link
              href={"/iidc-itinerary"}
              onClick={() => {
                setMobileNavStatus(false);
              }}
              className="duration-500 hover:text-[#DF9627]"
            >
              <li>EVENT ITINERARY</li>
            </Link>
            <Link
              onClick={() => {
                setMobileNavStatus(false);
              }}
              href={"/buy-tickets-iidc"}
            >
              <li className="group flex w-fit  items-center justify-center gap-1 rounded-md border-2 border-[#DF9627] px-5 py-3 transition-all duration-700  hover:bg-[#DF9627] ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#DF9627] transition-all duration-700  group-hover:fill-white"
                  viewBox="0 0 24 24"
                  id="ticket"
                >
                  <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
                </svg>{" "}
                <h5 className="text-base text-[#DF9627] transition-all  duration-700 group-hover:text-white">
                  BUY TICKETS
                </h5>{" "}
              </li>
            </Link>
          </ul>
        </nav>
      </nav>
    </>
  );
};

export default Header;
