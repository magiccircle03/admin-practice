import ExPage1 from "./contentPage/ExPage1";
import ExPage2 from "./contentPage/ExPage2";
import ExPage3 from "./contentPage/ExPage3";
import ExPage4 from "./contentPage/ExPage4";
import ExPage5 from "./contentPage/ExPage5";

export const menuItem = [
  {
    pathTo: "/menu1",
    text: "메뉴 1",
    icon: "user",
    component: ExPage1
  },
  {
    pathTo: "/menu2",
    text: "메뉴 2",
    icon: "video-camera",
    component: ExPage2
  },
  {
    pathTo: "/menu3",
    text: "메뉴 3",
    icon: "upload",
    component: ExPage3
  },
  {
    pathTo: "/menu4",
    text: "메뉴 4",
    icon: "bar-chart",
    component: ExPage4
  },
  {
    pathTo: "/menu5",
    text: "메뉴 5",
    icon: "cloud-o",
    component: ExPage5
  }
];
