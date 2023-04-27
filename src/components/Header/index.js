import React from "react";
import "./index.css";
import logo from "../../assest/logo.png";
import profile from "../../assest/person.png";

const Header = () => {
  function openMenu(){
    document.getElementById('menu').style.width = "100%";
  }
  function closeMenu(){
    document.getElementById('menu').style.width = '0';
  }
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <span className="menu-icon" onClick={openMenu}>☰</span>
        </div>
        <ul id="menu">
          <span className="close-btn" onClick={closeMenu}>x</span>
          <li>Home</li>
          <li>portfolio</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Page &#8595; |</li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-skype"></i>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="row">
          <div className="col-1">
            <h1>
              Jack <br />
              Harper<span>.</span>
            </h1>
            <span className="dash"></span>
            <div className="social-link">
              <a href="/">Instagram |</a>
              <a href="/">Linkedin</a>
              <br />
              <a href="/">Behance |</a>
              <a href="/">Dribble</a>
            </div>
            <button className="btn">Contact Me</button>
          </div>

          <div className="col-2">
            <img src={profile} alt="" />
          </div>
          <div className="col-3">
            <h4>INTRODUCTION</h4>
            <h1>
              UI/UX DESIGNER,
              <br />
              Full Stack Web <br />
              Developer
            </h1>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is available.
            </p>
            <button>Learn more &#8595; </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
