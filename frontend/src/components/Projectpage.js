import { useEffect, useState } from "react";
import "../styles/projectpage.css";

function ProjectPage({ myEmail }) {
  console.log(myEmail);
  const [data, setData] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // fetch user
  useEffect(() => {
    fetch(`https://phase3-project.onrender.com/user/${myEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setisLoading(true);
      });
  }, [myEmail]);

  console.log(data);

  // user details

  let name = data["first_name"] + " " + data["last_name"];
  let bio = data["bio"]
  let career = data["career"]


  // menu icon state
  let [isMenuVisible, setMenuVisible] = useState(false);

  let menuIcon = isMenuVisible ? "close" : "menu";

  // toggle menu visibilty
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("active-menu");
    if (isMenuVisible) {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  }

  return (
    <div id="homepage-container">
      <header id="header-projects">
        <h2>
          Folio<span>flow</span>.
        </h2>
        <span id="links">
          <a href="#">PROJECTS</a>
          <a href="#pre-skills">SKILLS</a>
          <a href="#">ABOUT ME</a>
          <a href="#">CONTACTS</a>
          <i
            onClick={() => {
              toggleMenu();
            }}
            className="material-icons"
          >
            {menuIcon}
          </i>
        </span>
        <div className="inactive-menu" id="menu">
          <div id="profile-section">
            <div id="profile-pic"></div>
            {/* <span><i className="material-symbols-outlined">person</i><h5>Jeff Maina</h5></span>
                   <span><i className="material-symbols-outlined">mail</i><h5>Jeff@gmail.com</h5></span> */}
          </div>
          <span>
            <i className="material-symbols-outlined">new_label</i>
            <h4>Add skill</h4>
            <i id="menu-arrow" className="material-symbols-outlined">
              arrow_forward
            </i>
          </span>
          <span>
            <i className="material-symbols-outlined">add</i>
            <h4>Add Project</h4>
            <i id="menu-arrow" className="material-symbols-outlined">
              arrow_forward
            </i>
          </span>
          <span>
            <i className="material-symbols-outlined">logout</i>
            <h4>Log out</h4>
            <i id="menu-arrow" className="material-symbols-outlined">
              arrow_forward
            </i>
          </span>
        </div>
      </header>
      {isLoading && (
        <section id="project-body">
          <h1 id="user-name">
            {name}
            <span>.</span>
          </h1>
          <div id="introduction">
            <h3>INTRODUCTION</h3>
            <h2>{career}</h2>
            <p>
             {bio}
            </p>
          </div>
          <div id="skills-container">
          <span id="pre-skills"></span>
            <div id="skills-box">
              <h2>SKILLS</h2>
              <div id="my-skills">
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
                <div className="skill"></div>
              </div>
            </div>
          </div>
          <div id="projects">
            <h2>PROJECTS</h2>
            <div id="my-projects">
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
            </div>
          </div>
          <div id="contacts">
            <h2>CONTACT ME</h2>
            <div>
              <p>
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
                lorem ipsum dolor sit amet, consect id adip nonum soc sapiente
              </p>
            </div>
          </div>
        </section>
      )}
      {isLoading || (
        <div className="project-loader">
          <div class="loader">
            <svg viewBox="0 0 80 80">
              <rect x="8" y="8" width="64" height="64"></rect>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
