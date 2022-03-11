import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/projects/0.jpg";

function Gallery() {
  const currentCategory = {
    name: "portfoltio",
    description:
      "these are a few of the projects I've created as a web developer",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{capitalizeFirstLetter(currentCategory.description)}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Coding Quiz Thumbnail"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Gallery;
