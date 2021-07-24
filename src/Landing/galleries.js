import {
  Outdoor,
  Unique,
  Entire,
  Pet,
  Experiences,
  OutdoorExp,
  OutdoorCollect,
} from "../images";

const galleries = {
  stays: [
    { img: Outdoor, text: "Outdoor getaways" },
    { img: Unique, text: "Unique stays" },
    { img: Entire, text: "Entire Homes" },
    { img: Pet, text: "Pets allowed" },
  ],
  experiences: [
    {
      img: Experiences,
      text: "Experiences",
      subtext: "Unique ideas for things to do on your trip.",
    },
    {
      img: OutdoorExp,
      text: "Online Experiences",
      subtext: "Live, interactive activities led by Hosts.",
    },
    {
      img: OutdoorCollect,
      text: "Outdoor collection",
      subtext: "Experiences that immerse you in nature.",
    },
  ],
};

export default galleries;
