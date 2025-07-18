import { DiVisualstudio } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiAndroidstudio, SiDart, SiDbeaver, SiEclipseide, SiFirebase, SiIntellijidea, SiJavascript, SiMysql, SiOracle, SiReact, SiSpring, SiSupabase, SiTailwindcss, SiThymeleaf } from "react-icons/si";

export function Skills() {
    return (

        <div className="relative bg-green-50 py-5">
            <h2 className="text-2xl text-left font-semibold mx-4">
                Skills
            </h2>
            <div className="m-4">

                {/* Stacks */}
                <div>
                    <h2 className="w-full font-semibold text-lg mb-2 text-left">언어?</h2>
                    <div className="flex flex-wrap gap-2 text-white font-mono">
                        <div className="flex items-center rounded-md px-2 w-auto bg-java"><FaJava /><span className="pl-1">Java</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-HTML"><FaHtml5 /><span className="pl-1">HTML5</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-CSS"><IoLogoCss3 /><span className="pl-1">CSS3</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Tailwind"><SiTailwindcss /><span className="pl-1">Tailwind CSS</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Spring"><SiSpring /><span className="pl-1">Spring Boot</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Thymeleaf"><SiThymeleaf /><span className="pl-1">Thymeleaf</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-JavaScript text-gray-800"><SiJavascript /><span className="pl-1">Javascript</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-React"><SiReact /><span className="pl-1">React</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Flutter"><FaFlutter /><span className="pl-1">Flutter</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Dart"><SiDart /><span className="pl-1">Dart</span></div>
                    </div>
                </div>

                {/* DB */}
                <div>
                    <h2 className="w-full font-semibold text-lg mb-2 text-left">DB?</h2>
                    <div className="flex flex-wrap gap-2 text-white">
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Oracle"><SiOracle /><span className="pl-1">Oracle</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-MySQL"><SiMysql /><span className="pl-1">MySQL</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Supabase "><SiSupabase /><span className="pl-1">Supabase</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Firebase text-gray-800"><SiFirebase /><span className="pl-1">Firebase</span></div>
                    </div>
                </div>

                {/* tool */}
                <div>
                    <h2 className="w-full font-semibold text-lg mb-2 text-left">Tool?</h2>
                    <div className="flex flex-wrap gap-2 text-white">
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-IntelliJ"><SiIntellijidea /><span className="pl-1">IntelliJ</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Eclipse"><SiEclipseide /><span className="pl-1">Eclipse</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-VScode"><DiVisualstudio /><span className="pl-1">VS Code</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-AndroidStudio"><SiAndroidstudio /><span className="pl-1 ">Android Studio</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-DBeaver"><SiDbeaver /><span className="pl-1">DBeaver</span></div>
                    </div>
                </div>
            </div>
        </div>
    )

}