import { DiVisualstudio } from "react-icons/di";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiAndroidstudio, SiDart, SiDbeaver, SiEclipseide, SiFirebase, SiIntellijidea, SiJavascript, SiMysql, SiOracle, SiReact, SiSpring, SiSupabase, SiTailwindcss, SiThymeleaf } from "react-icons/si";

export function Skills() {
    return (
        <div className="relative mb-28 py-5 flex flex-col items-center">
            <h2 className="text-6xl font-bold mx-4">
                Skills
            </h2>
            <div className="w-3/4 my-8 space-y-4 border p-8 border-orange-300 bg-yellow-50 rounded-xl">
                {/* Language */}
                <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg mb-2 text-left w-32">☑️Language</h2>
                    <div className="ml-8 flex gap-2 text-white font-mono">
                        <div className="flex items-center rounded-md px-2 w-auto bg-java"><FaJava /><span className="pl-1">Java</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-HTML"><FaHtml5 /><span className="pl-1">HTML5</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-CSS"><IoLogoCss3 /><span className="pl-1">CSS3</span></div>
                        {/* <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Thymeleaf"><SiThymeleaf /><span className="pl-1">Thymeleaf</span></div> */}
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-JavaScript text-gray-800"><SiJavascript /><span className="pl-1">Javascript</span></div>

                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Dart"><SiDart /><span className="pl-1">Dart</span></div>
                    </div>
                </div>

                {/* Frontend */}
                <div className="flex items-center gap-2 ">
                    <h2 className=" font-semibold text-lg mb-2 text-left w-32">☑️Frontend</h2>
                    <div className="ml-8 flex gap-2 text-white">
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-React"><SiReact /><span className="pl-1">React</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Tailwind"><SiTailwindcss /><span className="pl-1">Tailwind CSS</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Flutter"><FaFlutter /><span className="pl-1">Flutter</span></div>
                    </div>
                </div>

                {/* Backend */}
                <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg mb-2 text-left w-32">☑️Backend</h2>
                    <div className="ml-8 flex gap-2 text-white">
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Oracle"><SiOracle /><span className="pl-1">Oracle</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Spring"><SiSpring /><span className="pl-1">Spring Boot</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-MySQL"><SiMysql /><span className="pl-1">MySQL</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Supabase "><SiSupabase /><span className="pl-1">Supabase</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Firebase text-gray-800"><SiFirebase /><span className="pl-1">Firebase</span></div>
                    </div>
                </div>

                {/* tool */}
                <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-lg mb-2 text-left w-32">☑️Tools</h2>
                    <div className="ml-8 flex gap-2 text-white">
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-IntelliJ"><SiIntellijidea /><span className="pl-1">IntelliJ</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-Eclipse"><SiEclipseide /><span className="pl-1">Eclipse</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-VScode"><DiVisualstudio /><span className="pl-1">VS Code</span></div>
                        <div className="flex items-center rounded-md px-2 py-1 w-auto bg-AndroidStudio"><SiAndroidstudio /><span className="pl-1 ">Android Studio</span></div>
                    </div>
                </div>
            </div>
        </div>
    )

}