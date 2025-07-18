import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa";

export function Navbar({ scrollToRef, refs }) {
    const [open, setOpen] = useState(false); // ref
    const [isScrolled, setIsScrolled] = useState(false); // 스크롤

    // ref 함수
    const handleClick = (ref) => {
        scrollToRef(ref);
    }

    // home 눌렀을때 top 이동
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll); // 이벤트 리스너 추가

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`sticky top-0 transition-colors duration-700
            ${isScrolled
                ? "bg-blue-200"
                : "bg-white"
            }  shadow-md z-50 p-4`}>
            {/* 데스크톱 메뉴: md */}
            <ul className="max-w-screen-xl mx-auto hidden md:flex justify-start space-x-6 font-bold flex-1">
                <li><button className="focus:outline-none border-none" onClick={handleTop} >HOME</button></li>
                <li><button className="focus:outline-none border-none" onClick={() => handleClick(refs.aboutRef)}>ABOUT</button></li>
                <li><button className="focus:outline-none border-none" onClick={() => handleClick(refs.skillsRef)} >SKILLS</button></li>
                <li><button className="focus:outline-none border-none" onClick={() => handleClick(refs.projectRef)} >PORTFOLIO</button></li>
                <li><button className="focus:outline-none border-none" onClick={() => handleClick(refs.homeRef)} >CONTACT</button></li>
            </ul>

            {/* 햄버거 버튼 */}
            <button className="justify-end md:hidden focus:outline-none border-none"
                onClick={() => setOpen(!open)} aria-label="Toggle menu">
                <div className="w-6 h-6">
                    <FaBars />
                </div>

            </button>

            {/* 모바일 메뉴: 햄버거 클릭 시 토글 */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white absolute top-full left-0 w-full z-50 ${open ? 'max-h-96' : 'max-h-0 pointer-events-none'}`}>
                <ul className="flex flex-col font-semibold">
                    <li><button className="block hover:bg-gray-100 px-4 py-2 focus:outline-none border-none w-full text-left" onClick={handleTop} >HOME</button></li>
                    <li><button className="block hover:bg-gray-100 px-4 py-2 focus:outline-none border-none w-full text-left" onClick={() => handleClick(refs.aboutRef)}>ABOUT</button></li>
                    <li><button className="block hover:bg-gray-100 px-4 py-2 focus:outline-none border-none w-full text-left" onClick={() => handleClick(refs.skillsRef)} >SKILLS</button></li>
                    <li><button className="block hover:bg-gray-100 px-4 py-2 focus:outline-none border-none w-full text-left" onClick={() => handleClick(refs.projectRef)} >PORTFOLIO</button></li>
                    <li><button className="block hover:bg-gray-100 px-4 py-2 focus:outline-none border-none w-full text-left" onClick={() => handleClick(refs.homeRef)} >CONTACT</button></li>
                </ul>
            </div>


        </nav>
    )
}