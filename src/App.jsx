import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Intro } from './components/intro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './components/about'
import { Skills } from './components/Skills'
import { Navbar } from './components/Navbar'
import { Project } from './components/Project'

function App() {
  // 각 섹션에 ref 생성
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  // 스크롤 함수
  // const scrollToRef = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' }); // Navbar랑 겹침
  // };

  // scrollToRef 함수 (스크롤 함수) 
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 56, // 여기에 80은 Navbar 높이
      behavior: 'smooth',
    });
  };


  return (
    <div>
      <Navbar scrollToRef={scrollToRef}
        refs={{ homeRef, aboutRef, skillsRef, projectRef }}
      />
      <main>
        <section ref={homeRef}>
          <Intro scrollToRef={scrollToRef} projectRef={projectRef} />
        </section>
        <div className='max-w-screen-xl mx-auto'>
          <section ref={aboutRef}><About /></section>
          <section ref={skillsRef}><Skills /></section>
          <section ref={projectRef}><Project /></section>

        </div>
      </main>
    </div>

  );
}

export default App
