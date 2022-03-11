import React, { useState } from "react";

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
          name: "Coding Knowledge Quiz",
          category: "projects",
          description:
            "Test your knowledge of basic coding principles like HTML, CSS, and JavaScript! Built using HTML, CSS, and JavaScript! Visit the GitHub repo at https://github.com/warrenp11/code-quiz",
        },
        {
          name: "Health Tracker App",
          category: "projects",
          description:
            "An interactive full-stack web application which used server-side JavaScript, RESTful APIs, databases, object-relational mapping, environment variables, templating, and authentication. Built with JavaScript, Node.js, Express, Handlebars, MySQL, and several npm packages. Easily track your exercises and become a fitter you today! Visit the GitHub repo at https://github.com/warrenp11/health-tracker",
        },
        {
          name: "Password Generator",
          category: "projects",
          description:
            "Need a strong password and you can't think of anything? Try out the Password Generator! Built using HTML, CSSm, and JavaScript! Visit the GitHub repo at https://github.com/warrenp11/password-generator",
        },
        {
          name: "Kayne West vs. Ron Swanson: Random Quote Generator",
          category: "projects",
          description:
            "Ever wondered who the greatest philosopher of our time is? Wonder no more! Generate a random quote by Kanye West and Ron Swanson, then choose who wins! This project was built as part of a group project using HTML, CSS and Foundation, JavaScript, and uses third-party APIs. Visit the GitHub repo at https://github.com/JBGinger/Group1.Module7Project",
        },
        {
          name: "Work Day Scheduler",
          category: "projects",
          description:
            "Ever wondered who the greatest philosopher of our time is? Wonder no more! Generate a random quote by Kanye West and Ron Swanson, then choose who wins! This project was built as part of a group project using HTML, CSS and Foundation, JavaScript, and uses third-party APIs. Visit the GitHub repo at https://github.com/JBGinger/Group1.Module7Project",
        },
      ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;