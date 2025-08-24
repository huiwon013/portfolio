import { useActionState, useState } from "react";
import { DiVisualstudio } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiAndroidstudio, SiApachetomcat, SiCss3, SiDart, SiDbeaver, SiEclipseide, SiFirebase, SiIntellijidea, SiJavascript, SiMysql, SiOracle, SiReact, SiSpring, SiSupabase, SiTailwindcss, SiThymeleaf } from "react-icons/si";

const images = [
    {
        src: "./Img/MusicShare/main.gif",
        caption: "MusicShare",
        description: "▪ 나만의 플레이리스트를 만들고, 음악을 공유하며 소통을 하는 음악SNS",
        skills: (
            <>
                <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><FaHtml5 /><span className="pl-1">HTML5</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiCss3 /><span className="pl-1">CSS3</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiEclipseide /><span className="pl-1">Eclipse</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiOracle /><span className="pl-1">Oracle</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiApachetomcat /><span className="pl-1">Tomcat</span></div>
            </>
        ),
        date: "25.07.28 ~ 25.08.18 (5인 프로젝트)",
    },
    {
        src: "./img/test2.jpg",
        caption: "오생꿀 (오늘의 생활 꿀팁)",
        description: "▪ 1인 가구를 위한 생활정보와 거래를 할 수 있는 커뮤니티 ",
        skills: (
            <>
                <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><FaHtml5 /><span className="pl-1">HTML5</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiCss3 /><span className="pl-1">CSS3</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiReact /><span className="pl-1">React</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiEclipseide /><span className="pl-1">VS Code</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiSupabase /><span className="pl-1">Supabase</span></div>
            </>
        ),
        date: "25.05.12 ~ 25.06.30 (5인 프로젝트)",
    },
    {
        src: "./img/main.PNG",
        caption: "Rocket bookstore",
        description: "▪ JSP를 이용한 도서 주문 사이트",
        skills: (
            <>
                <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><FaHtml5 /><span className="pl-1">HTML5</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiCss3 /><span className="pl-1">CSS3</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiEclipseide /><span className="pl-1">Eclipse</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiOracle /><span className="pl-1">Oracle</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiApachetomcat /><span className="pl-1">Tomcat</span></div>
            </>
        ),
        date: "25.03.20 ~ 25.04.08 (5인 프로젝트)",
    },

    {
        src: "",
        caption: "HAH (How About Here)",
        description: (
            <>
                ▪ 여행지에 대해 사용자들과 자유롭게 이야기하는 커뮤니티 앱 <br />
                ▪ google maps로 세계지도를 볼 수 있음.
            </>
            
        )
    },
    {
        src: "",
        caption: "Memoria",
        description: "그룹원들과 일정을 공유하고 QnA를 통해 ...",
    },
    {
        src: "",
        caption: "Code Mate",
        description: "그룹을 만들어 코딩 공부를 하는 앱",
        skills: (
            <>
                <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><FaHtml5 /><span className="pl-1">HTML5</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiCss3 /><span className="pl-1">CSS3</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
                <div className="flex items-center rounded-md px-1 w-auto  "><SiReact /><span className="pl-1">React</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiEclipseide /><span className="pl-1">VS Code</span></div>
                <div className="flex items-center rounded-md px-1 w-auto "><SiSupabase /><span className="pl-1">Supabase</span></div>
            </>
        ),
        date: "25.05.12 ~ 25.06.30 (5인 프로젝트)",
    },
]


export function Project() {
    return (
        <div className="relative py-5">
            <h2 className="text-center text-6xl ml-4 font-bold">Project</h2>
            <div className="m-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <div key={index} className="relative group rounded-xl m-2 border border-orange-300 bg-yellow-50">
                        <div className=" object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={image.src}
                                    alt="image.caption"
                                    className="w-full h-64"
                                />
                            </div>
                            <div className="">
                                <div className="m-4 bottom-0 bg-yellow-200  px-4 py-2 group-hover:opacity-100 first-line:transition-opacity font-semibold rounded-2xl text-center text-gray-800">
                                    {image.caption}
                                </div>
                                <div className="my-1 px-4 py-2 bg-gray-100">
                                    {image.description}
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            {image.date}
                            <div className="flex flex-wrap font-mono text-sm border-[1px] border-yellow-500 rounded-md bg-white my-2">{image.skills}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}