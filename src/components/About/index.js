import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
        Hi, my name is Peter! I'm an aspiring web developer -- recently graduated with a certificate in full stack development from Rutgers University -- and I also have a background in business. Newly developed skills in: HTML, CSS, Git, Bootstrap, JavaScript, Responsive Web Design, Third-Party APIs, Server-Side APIs, Node.js, Object-Oriented Programming, Express.js, MySQL, Sequelize, MongoDB, Mongoose, MERN Stack...I also take it upon myself to become a better programmer every day. I'm a quick and passionate learner, organized, and an adept problem solver. I'm excited to leverage my skills as part of a team to build better experiences on the web. Contact me at peterbenjaminwarren@gmail.com...and feel free to visit my GitHub, LinkedIn, and Instagram accounts below.
        </p>
      </div>
    </section>
  );
}

export default About;