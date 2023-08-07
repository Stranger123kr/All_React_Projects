import "./Resume.css";
import { useEffect, useRef } from "react";

function Resume({ skills, experience, education }) {
  const resumeRef = useRef("Resume_container");
  const resume_btnRef = useRef("span");

  function dark_mode() {
    resumeRef.current.classList.toggle("dark");
    resume_btnRef.current.classList.toggle("dark");

    // ========================================================

    if (localStorage.getItem("color_mode") === "dark") {
      localStorage.setItem("color_mode", "light");
    } else {
      localStorage.setItem("color_mode", "dark");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("color_mode") === "light") {
      resumeRef.current.classList.remove("dark");
      resume_btnRef.current.classList.remove("dark");
    } else if (localStorage.getItem("color_mode") === "dark") {
      resumeRef.current.classList.add("dark");
      resume_btnRef.current.classList.add("dark");
    } else {
      localStorage.setItem("color_mode", "light");
    }
  }, []);

  return (
    <>
      <div className="Resume_container" ref={resumeRef}>
        <div className="heading">
          <h1>Resume</h1>
          <span onClick={dark_mode} ref={resume_btnRef}></span>
        </div>
        <hr />
        <div className="Resume">
          {/* first line of info about Resume */}
          <ul className="Resume_head">
            <span>Interests</span>
            <li>Drawing</li>
            <li>Photography</li>
            <li>Design</li>
            <li>Programming</li>
            <li>Computer Science</li>
          </ul>
          {/* second line of info about Resume */}
          <ul className="Resume_head">
            <span>skills</span>
            <li>{skills[0]}</li>
            <li>{skills[1]}</li>
            <li>{skills[2]}</li>
            <li>{skills[3]}</li>
            <li>{skills[4]}</li>
            <li>{skills[5]}</li>
          </ul>
          {/* third line of info about Resume */}
          <ul className="Resume_head">
            <span>Education</span>
            <li>{education[0]}</li>
            <li>{education[1]}</li>
          </ul>
          {/* third line of info about Resume */}
          <ul className="Resume_head">
            <span>Experience</span>
            <li>{experience[0].company}</li>
            <li>{experience[0].role}</li>
            <li>{experience[0].year}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
