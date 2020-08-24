import React from "react";
import NavigationContent from "./navigationContent";
import { ImageLayout } from "../../../BOOTSTRAP/COMPONENTS/IMAGES";

export default function NavAbout() {
  return (
    <div className="about__content__left">
      <NavigationContent
        children1={
          <ImageLayout
            src="https://i.ibb.co/TqhYf2v/pexels-andrea-davis-3653849.jpg"
            alt="pexels-andrea-davis-3653849"
            className="img__about"
          />
        }
        children2={
          <div className="about__paragraph__content__left">
            <h1>We love Plants</h1>
            <p>
              Now THAT is true, but we love web development even more. We talk
              about it on our blog, like, a lot. This Xherbs theme is open
              source too! If spot any bugs, open the issue , and get us know on
              my our GitHub.
            </p>
          </div>
        }
      />
      <NavigationContent
        children1={
          <div className="about__paragraph__content__right">
            <h1>We think plants are the future</h1>
            <p>
              Word. But good <code>code</code> can solve a lots of problems,
              too. New and old. We believe the Xherbs might be one solid pillar on which we build that future.
            </p>
          </div>
        }
        children2={
          <ImageLayout
            src="https://i.ibb.co/K6k2jpr/pexels-asa-dugger-1897590.jpg" 
            alt="pexels-asa-dugger-1897590"
            className="img__about"
          />
        }
      />
    </div>
  );
}
