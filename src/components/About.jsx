import React from "react";

export function About() {


    return (

        <div className="relative mb-28 py-5 flex flex-col items-center">
            <h2 className="text-6xl ml-4 font-bold">
                About me
            </h2>
            <div className="m-8 flex justify-center">
                {/* 프로필 이미지 */}
                <div className="w-60 h-60 flex items-center justify-center overflow-hidden">
                    <img src="./Img/profileImg.jpg" className="max-w-full max-h-full object-contain"
                    />
                </div>
                {/* 프로필 정보 */}
                <div className="m-4 text-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-4">
                        <div className="">
                            <div className="font-semibold">
                                이름
                            </div>
                            <div className="my-2 text-lg">
                                박희원
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                생년월일
                            </div>
                            <div className="my-2 text-lg">
                                2003.01.13
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                위치
                            </div>
                            <div className="my-2 text-lg">
                                경기도 고양시 일산동구
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                이메일
                            </div>
                            <div className="my-2 text-lg">
                                hui_0113@naver.com
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                학력
                            </div>
                            <div className="my-2 text-lg">
                                인하공업전문대학 컴퓨터시스템공학과 졸업
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                자격증
                            </div>
                            <div className="my-2 text-lg">
                                - SQLD <br />
                                - 정보처리산업기사 (예정)
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}







