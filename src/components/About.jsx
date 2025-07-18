import React from "react";

export function About() {


    return (

        <div className="relative bg-pink-50 py-5">
            <h2 className="text-left text-2xl ml-4 font-semibold">
                About me
            </h2>
            <div className="mx-4 flex">
                <div className="w-64 h-64">
                    <img src="./img/test1.jpg"
                    />
                </div>
                <div className="my-4 text-xl">
                    <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                        <div className="">
                            <div className="font-semibold">
                                이름
                            </div>
                            <div className="my-2">
                                박희원
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                생년월일
                            </div>
                            <div className="my-2">
                                2003.01.13
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                위치
                            </div>
                            <div className="my-2">
                                경기도 고양시 일산동구
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                이메일
                            </div>
                            <div className="my-2">
                                hui_0113@naver.com
                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                학력
                            </div>
                            <div className="my-2">

                            </div>
                        </div>
                        <div className="">
                            <div className="font-semibold">
                                자격증
                            </div>
                            <div className="my-2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}







