import { useParams } from "react-router-dom";
import { getContentById } from "../api/wasItTastyApi";
import food9 from "../assets/food9.jpg";
import React, { useEffect, useState } from "react";

export default function Content() {
  const { id } = useParams();
  console.log(id);
  const [content, setContent] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    getContentById(id, token).then((rs) => {
      setContent(rs.data);
    });
  }, []);

  console.log(content);

  return (
    <div className="flex justify-center items-center mx-auto w-full gap-5">
      <div className="flex flex-col mt-5 gap-5 w-[80%]">
        <div className="gap-5">
          <h1 className="text-3xl">{content?.title}</h1>
          <h2 className="text-xl">{content?.subTitle}</h2>
          <img className="w-[50rem] h-[25rem]" src={content?.image} />
        </div>
        <div>
          <h2 className="text-xl">Ingredients</h2>
          <p className="">{content?.ingredients}</p>

          {/* <ul className="list-disc">
            <li>1 bone-in pork shoulder roast (8 to 10 pounds)</li>
            <li>1/4 cup All-Purpose Meat Seasoning or favorite spice rub</li>
            <li>Applewood chips or pellets</li>
            <li>1/3 cup apple cider or juice</li>
            <li>3 tablespoons spicy brown mustard</li>
            <li>3 tablespoons cider vinegar</li>
          </ul> */}
        </div>
        <div>
          <h2 className="text-xl">Directions</h2>
          <h2 className="">{content?.directions}</h2>
          {/* <ol class="list-decimal">
            <li>
              Let roast stand at room temperature for 1 hour. Preheat smoker to
              275°. Add wood chips or pellets to smoker according to
              manufacturer's directions.
            </li>
            <li>
              Trim excess fat from pork, leaving some exterior fat. Pat roast
              dry; rub with mustard and sprinkle with spice rub. Place pork in
              smoker. In a spray bottle, combine apple cider and vinegar;
              lightly spritz pork. Smoke, spritzing every hour, until pork
              reaches 165° and is a dark brown color, about 5 hours.
            </li>
            <li>
              Transfer pork to a 13x9-in. baking pan or large cast iron skillet;
              liberally spritz with cider mixture. Cover tightly with foil and
              return to smoker. Cook until pork reaches desired degree of
              doneness. For slice pork, cook until pork reaches 190° to 195°,
              2-3 hours longer. For pulled pork, cook until 200° to 205°. Remove
              and let stand at room temperature, covered, 45-60 minutes. For
              slices, cut around bone and cut roast into slices. For pulled
              pork, remove bone and shred pork. Skim fat from cooking juices;
              toss pork with cooking juices.
            </li>
          </ol> */}
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}
