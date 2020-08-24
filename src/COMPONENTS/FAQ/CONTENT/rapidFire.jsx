import React from "react";
import ParagraphRapidFire from "./ParagraphRapidFire";

export default function RapidFire() {
  return (
    <div className="mt-5 mb-5">
      <div className="mb-5">
        <h3>Rapid-fire questions</h3>
        <ParagraphRapidFire
          paragraph1="Why is Xherbs theme so beautiful?"
          paragraph2="We hired our first designer a couple of month ago."
        />
        <ParagraphRapidFire
          paragraph1="Why did you build a theme?"
          paragraph2="We believe in Ukrafrik's promise of opening up his company to more more developers. Plus, we trust these folks. Read more about Ukrafrik. "
        />
        <ParagraphRapidFire
          paragraph1="How many people work at this site?"
          paragraph2="Just one. In the goal was to improve my knowledge, used some bootstrapp for the style...I moght be a robot , though."
        />
        <ParagraphRapidFire
          paragraph1="Where do i live at the moment?"
          paragraph2="At the moment, I live in Kiev(Ukraine).It's so beautiful and love his people."
        />
        <ParagraphRapidFire
          paragraph1="What's the meaning of the life?"
          paragraph2="We're not quite sure. But building useful products with people we love feels meaningful enough."
        />
      </div>
      <hr />
    </div>
  );
}
