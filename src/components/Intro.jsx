import React from "react";
import { Typed } from "react-typed"; // react 텍스트 타이핑 효과
import { Link } from "react-router-dom";

export function Intro( {scrollToRef, projectRef} ) {

    return (
        // content 영역

        <div className="w-screen h-screen bg-cover bg-center bg-opacity-50 bg-yellow-200 flex items-center justify-center" >
            <div className="text-center break-words px-4 w-3/4">
                <h1 className="text-5xl font-bold mb-4">안녕하세요, 저는 사용자 친화적인 인터페이스를 만드는 프론트엔드 개발자 박희원입니다.</h1>
                {/* <p className="text-lg md:text-xl mb-4">
                    코드로 문제를 해결하고, 사용자 경험을 디자인하는 걸 좋아합니다.
                </p> */}
                <button className="pt-3" onClick={() => scrollToRef(projectRef)}>
                    view my work

                </button>
            </div>
        </div>


    )
}