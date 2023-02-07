import calcicon from "./Calculator.PNG";
import ipicon from "./IP Address Tracker.png";
import multiform from './Multi-step form.png'
import cardicon1 from './active-states1.jpg'
import landpageicon from './Intro section with dropdown navigation.png'
export const ProjectList = [
  {
    name: "Calculator App",
    imgsrc: calcicon,
    github: "https://github.com/kperusi/react-calculator",
    live: "https://react-calculator-three-eta.vercel.app/",
    imgWidth: "",
    imgHeight: "200",
    backgroundColor: "#892be287",
    desc:'A mathematical calculator built with React js, with square root and root functions and a nice UI '
  },
  {
    name: "IP Address Tracker",
    imgsrc: ipicon,
    github: "https://github.com/kperusi/my-react-project2",
    live: "https://ipaddresslocator-app.vercel.app/",
    imgWidth: "280px",
    imgHeight: "200px",
    backgroundColor:'antiquewhite',
    desc:'This app is built with React js. With this app you can get any location just by typing an IP address in that location'
  },
  {
    name: "Responsive Card",
    imgsrc:cardicon1,
    github: "https://github.com/kperusi/react-mycard-app",
    live: "https://lighthearted-frontend-solution.netlify.app/",
    imgWidth: "280px",
    imgHeight: "200px",
    backgroundColor: "",
    desc:'A Responsive User details Card. this app is built with React js.'
  },
  {
    name: "Intro Section With Dropdown Navigation",
    imgsrc: landpageicon,
    github: "https://github.com/kperusi/challenge-solution",
    live: "https://kperusi.github.io/",
    imgWidth: "280px",
    imgHeight: "200px",
    backgroundColor: "yellow",
    desc:'This a responsive landing page built with vanilla javascript'
  },
  {
    name: "Multi Fom Steps",
    imgsrc: multiform,
    github: "https://github.com/kperusi/multi-step-form",
    live: "https://multi-step-form-wheat.vercel.app/",
    imgWidth: "280px",
    imgHeight: "200px",
    backgroundColor: "cyan",
    desc:'Multi form step is a billing app. It is built with Reactjs and the styling is done with SASS '
  },
];
