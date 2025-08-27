import { useActionState, useState, useEffect } from "react";
import { DiVisualstudio } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiAndroidstudio, SiApachetomcat, SiCss3, SiDart, SiDbeaver, SiEclipseide, SiFirebase, SiIntellijidea, SiJavascript, SiMysql, SiOracle, SiReact, SiSpring, SiSupabase, SiTailwindcss, SiThymeleaf } from "react-icons/si";
import Modal from "./Modal";

const images = [
    {
        src: "/img/MusicShare/main.gif",
        caption: "MusicShare",
        description: "▪ 나만의 플레이리스트를 만들고, 음악을 공유하며 소통을 하는 음악SNS",
        skills: [
            { icon: <FaJava />, name: "Java" },
            { icon: <SiJavascript />, name: "Javascript" },
            { icon: <SiJavascript />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiSpring />, name: "Spring Boot" }
        ],
        date: "25.07.28 ~ 25.08.18 (5인 프로젝트)",
        role: [
            "- 전체 플레이리스트 페이지",
            "- 플레이리스트 상세페이지",
            "- 플레이리스트 수정, 삭제 기능"
        ],

        detail: [
            {
                title: "Deezer 음악 API 연동 ",
                contents: [
                    "",
                    "설명 2"
                ]
            },
            {
                title: "Deezer 음악 API 연동2222 ",
                contents: [
                    "설명 1",
                    "설명 2"
                ]
            },

        ]
    },
    {
        src: "", // *수정
        caption: "오생꿀 (오늘의 생활 꿀팁)",
        description: "▪ 1인 가구를 위한 생활정보와 거래를 할 수 있는 커뮤니티 ",
        // skills: (
        //     <>
        //         <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">React</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto  "><SiTailwindcss /><span className="pl-1">Tailwind CSS</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiMysql /><span className="pl-1">MySQL</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiSpring /><span className="pl-1">Spring Boot</span></div>
        //     </>
        // ),
        skills: [
            { icon: <FaJava />, name: "Java" },
            { icon: <SiJavascript />, name: "Javascript" },
            { icon: <SiJavascript />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiSpring />, name: "Spring Boot" }
        ],
        date: "25.05.12 ~ 25.06.30 (5인 프로젝트)",
        role: [
            "- 좋아요 기능",
            "- 댓글 기능",
            "- 알림 기능"
        ],

        detail: [
            {
                title: "Deezer 음악 API 연동 ",
                contents: [
                    "설명 1",
                    "설명 2"
                ]
            },
            {
                title: "Deezer 음악 API 연동2222 ",
                contents: [
                    "설명 1",
                    "설명 2"
                ]
            },

        ]
    },
    {
        src: "./img/main.PNG",
        caption: "Rocket bookstore",
        description: "▪ JSP를 이용한 도서 주문 사이트",
        // skills: (
        //     <>
        //         <div className="flex items-center px-1 w-auto"><FaJava /><span className="pl-1">Java</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><FaHtml5 /><span className="pl-1">HTML5</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiCss3 /><span className="pl-1">CSS3</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto  "><SiJavascript /><span className="pl-1">Javascript</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiEclipseide /><span className="pl-1">Eclipse</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiOracle /><span className="pl-1">Oracle</span></div>
        //         <div className="flex items-center rounded-md px-1 w-auto "><SiApachetomcat /><span className="pl-1">Tomcat</span></div>
        //     </>
        // ),
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
        
        date: "25.05.12 ~ 25.06.30 (5인 프로젝트)",
    },
]


export function Project() {
    const [modalIndex, setModalIndex] = useState(null); // 모달창

    useEffect(() => {
        if (modalIndex !== null) {
            // 모달 열리면 스크롤 막기
            document.body.style.overflow = 'hidden';
        } else {
            // 모달 닫히면 스크롤 다시 가능하게
            document.body.style.overflow = '';
        }

        // cleanup 함수 (컴포넌트 언마운트 시도 안전하게)
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalIndex]);

    return (
        <div className="relative py-5">
            <h2 className="text-center text-6xl ml-4 font-bold">Project</h2>
            <div className="m-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-filter duration-300">
                {images.map((image, index) => (
                    <div key={index} className="relative group rounded-xl m-2 border border-orange-300 bg-yellow-50">
                        <div className="relative overflow-hidden">
                            <div className="cursor-pointer"
                                onClick={() => setModalIndex(index)}>
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className="w-full h-64 transition-transform duration-500 ease-in-out transform hover:scale-110"

                                />
                                <div className="m-4 bottom-0 bg-yellow-200 px-4 py-2 font-semibold rounded-2xl text-center text-gray-800">
                                    {image.caption}
                                </div>
                            </div>
                            <div className="my-1 px-4 py-2 bg-gray-100">
                                {image.description}
                            </div>
                        </div>


                        <div className="px-4">
                            {image.date}

                            {/* 사용 기술스택 */}
                            {/* <div className="flex flex-wrap font-mono text-sm border-[1px] border-yellow-500 rounded-md bg-white my-2">{image.skills}</div> */}
                            <div className="flex flex-wrap text-sm rounded-md my-2">
                                {Array.isArray(image.skills) && image.skills.length > 0 && image.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center px-2 rounded-xl border-orange-200 border mb-1 mr-1 bg-lime-100">
                                        {skill.icon} <span className="pl-1 font-semibold font-sans text-gray-700">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* 모달창 영역 */}
            {modalIndex !== null && (
                <Modal onClose={() => setModalIndex(null)} image={images[modalIndex]} />
            )}
        </div>
    );
}