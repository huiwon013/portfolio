import React from "react";
import { Typed } from "react-typed"; // react 텍스트 타이핑 효과
import { Link } from "react-router-dom";

export function Intro() {


    return (
        // content 영역

        <div className="w-screen h-screen bg-cover bg-center bg-opacity-50 bg-yellow-200" >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">안녕하세요 포트폴리오 사이트입니다.</h1>
                <p className="text-lg md:text-xl mb-4">
                    어쩌구 저쩌구
                </p>
                <p className="pt-3">
                    view my work

                </p>
            </div>
        </div>


    )
}