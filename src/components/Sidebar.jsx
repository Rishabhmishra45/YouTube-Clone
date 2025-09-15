import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming, SiYoutubemusic, SiYoutubekids, SiYoutubestudio } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdWatchLater, MdOutlineWatchLater, MdPodcasts } from "react-icons/md";
import { PiUserSquareThin, PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { IoGameControllerOutline, IoMusicalNotesOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BiVideo } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import { CgMediaLive } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            id: 3,
            name: "Subscriptions",
            icon: <MdOutlineSubscriptions />
        },
    ]
    const sidebarItems2 = [
        {
            id: 1,
            name: "Your Channel",
            icon: <CgProfile />
        },
        {
            id: 2,
            name: "History",
            icon: <MdHistory />
        },
        {
            id: 3,
            name: "Playlists",
            icon: <MdOutlineSubscriptions />
        },
        {
            id: 4,
            name: "Your Videos",
            icon: <BiVideo />
        },
        {
            id: 5,
            name: "Watch Later",
            icon: <MdOutlineWatchLater />
        },
        {
            id: 6,
            name: "Liked Videos",
            icon: <AiOutlineLike />
        },
    ]
    const explore = [
        {
            id: 1,
            name: "Shopping",
            icon: <RiShoppingBag4Line />
        },
        {
            id: 2,
            name: "Music",
            icon: <IoMusicalNotesOutline />
        },
        {
            id: 3,
            name: "Films",
            icon: <PiFilmSlateLight />
        },
        {
            id: 4,
            name: "Live",
            icon: <CgMediaLive />
        },
        {
            id: 5,
            name: "Gaming",
            icon: <SiYoutubegaming />
        },
        {
            id: 6,
            name: "News",
            icon: <ImNewspaper />
        },
        {
            id: 7,
            name: "Sports",
            icon: <TfiCup />
        },
        {
            id: 8,
            name: "Courses",
            icon: <PiLightbulbLight />
        },
        {
            id: 9,
            name: "Fashion & Beauty",
            icon: <HiOutlineShoppingBag />
        },
        {
            id: 10,
            name: "Podcasts",
            icon: <MdPodcasts />
        },
    ]
    const morefromyoutube = [
        {
            id: 1,
            name: "YouTube Premium",
            icon: <FaYoutube />
        },
        {
            id: 2,
            name: "YouTube Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 3,
            name: "YouTube Kids",
            icon: <SiYoutubekids />
        },
        {
            id: 4,
            name: "YouTube TV",
            icon: <GiLinkedRings />
        },
    ]
    const sidebarItems5 = [
        {
            id: 1,
            name: "Settings",
            icon: <IoSettingsOutline />
        },
        {
            id: 2,
            name: "Report History",
            icon: <MdOutlineOutlinedFlag />
        },
        {
            id: 3,
            name: "Help",
            icon: <FaRegQuestionCircle />
        },
        {
            id: 4,
            name: "Send Feedback",
            icon: <SiYoutubestudio />
        },
    ]
    return (
        <div className='px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>
            {/* Home */}
            <div className='space-y-3 items-center'>
                {
                    sidebarItems.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1' key={item.id}>
                                <div className="text-xl cursor-pointer">{item.icon}</div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            {/* You */}
            <div className='mt-4 space-y-3 items-center'>
                <div className="flex items-center space-x-2">
                    <h1 className="font-semibold">You</h1>
                    <FaChevronRight className="cursor-pointer" />
                </div>
                {
                    sidebarItems2.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1' key={item.id}>
                                <div className="text-xl cursor-pointer">{item.icon}</div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            {/* Explore */}
            <div className='mt-4 space-y-3 items-center'>
                <div className="flex items-center space-x-2">
                    <h1 className="font-semibold">Explore</h1>
                    <FaChevronRight className="cursor-pointer" />
                </div>
                {
                    explore.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1' key={item.id}>
                                <div className="text-xl cursor-pointer">{item.icon}</div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            {/* More from YouTube */}
            <div className='mt-4 space-y-3 items-center'>
                <div className="flex items-center space-x-2">
                    <h1 className="font-semibold whitespace-nowrap">More From YouTube</h1>
                    <FaChevronRight className="cursor-pointer" />
                </div>
                {
                    morefromyoutube.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1' key={item.id}>
                                <div className="text-xl cursor-pointer">{item.icon}</div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            {/* Settings */}
            <div className='mt-4 space-y-3 items-center'>
                {
                    sidebarItems5.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 cursor-pointer hover:bg-gray-300 duration-300 rounded-xl p-1' key={item.id}>
                                <div className="text-xl cursor-pointer">{item.icon}</div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
            </div>
            <br />
            <hr />
            <p className="text-sm text-gray-500 mt-4">About Press Copyright Contact us Creators Advertise Developers <br /> <br /> Terms Privacy Policy & Safety <br /> How YouTube works Test new features <br /> <br /> © 2024 Google LLC</p>
        </div>
    );
}

export default Sidebar;
