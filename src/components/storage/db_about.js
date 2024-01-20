import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";
import { GiIsland } from "react-icons/gi";
import { TfiMapAlt } from "react-icons/tfi";
export const offer = [
  {
    icon: <MdOutlineVerifiedUser />,
    title: "Best price guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <LuCalendarClock />,
    title: "Easy Booking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <RiCustomerService2Line />,
    title: "Customer Service 24h",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export const about = {
  image: require("../../images/about/image2.png"),
  title: "About Travelaja.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit. Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.",
};

export const teams = [
  {
    profil: require("../../images/about/image3.png"),
    name: "Agung perdana",
    skill: "Web Designer",
  },
  {
    profil: require("../../images/about/image4.png"),
    name: "Viola Resti ",
    skill: "Marketing Director ",
  },
  {
    profil: require("../../images/about/image5.png"),
    name: "Rahardi anysah ",
    skill: "International Relations ",
  },
  {
    profil: require("../../images/about/image6.png"),
    name: "Andika ",
    skill: "Medical Check ",
  },
  {
    profil: require("../../images/about/image7.png"),
    name: "Theresa Russell ",
    skill: "Doctor Assistant ",
  },
];

export const footer = [
  {
    icon: <MdOutlineDirectionsBoat />,
    title: "TRAVEL",
  },
  {
    icon: <LiaCitySolid />,
    title: "CITY TOUR",
  },
  {
    icon: <GiIsland />,
    title: "ISLAND TOUR",
  },
  {
    icon: <TfiMapAlt />,
    title: "EXPLORE WORLD",
  },
];
