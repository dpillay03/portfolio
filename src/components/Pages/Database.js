import ALCW from "../../assets/amazinglifechiro.png";
import FSMedia from "../../assets/FlowStateMedia.png";
import SubredditSearch from "../../assets/subreddit.png";
import Execute from "../../assets/Execute.png";
import CombatCapitol from "../../assets/combatcapitol.png";
import PortfolioPic from "../../assets/PortfolioProj.png";

const Projects = [
  {
    name: "Amazing Life Chiropractic",
    description:
      "Company website for the Amazing Life Chiropractic and Wellness. Current website is valued at $500,000 dollars",
    built: "WordPress, Divi, various third-party plugins and integrations.",
    image: ALCW,
    alt: "ALCW responsive thumbnail",
    link: "https://amazinglifechiropractic.com",
    github: undefined,
  },
  {
    name: "Flow State Media LLC",
    description:
      "Flow State Media is a Web Design and Google Ads agency for the health, wellness, and fitness industries.",
    built: "WordPress, Divi, various third-party plugins and integrations.",
    image: FSMedia,
    alt: "FSMedia responsive thumbnail",
    link: "https://flowstatemedia.io",
    github: undefined,
  },
  {
    name: "Subreddit Search Engine",
    description:
      "A subreddit search engine that returns a list of relevent subreddits based on the users search",
    built: "with ReactJS, HTML5, CSS3, and deployed to GH-Pages",
    image: SubredditSearch,
    alt: "Subreddit Search Engine responsive thumbnail",
    link: "https://dpillay03.github.io/subreddit/",
    github: "https://github.com/dpillay03/subreddit",
  },
  {
    name: "Execute - Goal Tracker",
    description:
      "Execute is a goal tracking web application that allows users to input and complete their goals.",
    built: "with ReactJS, HTML5, CSS3, and deployed to GH-Pages",
    image: Execute,
    alt: "Execute - Goal Tracker responsive thumbnail",
    link: "https://dpillay03.github.io/execute/",
    github: "https://github.com/dpillay03/execute",
  },
  {
    name: "Combat Capitol",
    description:
      "Combat Capitol is a combat sports news application that allows users to read up on the latest news.",
    built: "ReactJS, NewsAPI, HTML5, CSS3, and deployed to GH-Pages",
    image: CombatCapitol,
    alt: "Combat Capitol responsive thumbnail",
    link: "https://github.com/dpillay03/combatcapitol",
    github: "https://github.com/dpillay03/combatcapitol",
  },
  {
    name: "Daniel Pillay - Portfolio",
    description:
      "Software Development portfolio website for Daniel Pillay. This website was created to showcase his work.",
    built:
      "ReactJS, HTML5, SCSS, SanityIO, and more. Website deployed to Netlify",
    image: PortfolioPic,
    alt: "Daniel Pillay Portfolio responsive thumbnail",
    link: "https://danielpillay.com",
    github: "https://github.com/dpillay03/portfolio",
  },
];

export default Projects;
