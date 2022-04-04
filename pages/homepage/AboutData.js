
import { faChartLine, faCubes, faPollH} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutData = [
  {
    icon: <FontAwesomeIcon icon={faCubes} />,
    caption: "Combinable strategy",
    detail:
      "Instachain is the first fully influencer backed Launchpad that can provide projects with massive global exposure to boost performance",
  },
  {
    icon: <FontAwesomeIcon icon={faChartLine} />,
    caption: "Clear market data",
    detail:
      "Instachain ensures fairness and transparency for everyone through its decentralized nature and support of multiple blockchains",
  },
  {
    icon: <FontAwesomeIcon icon={faPollH} />,
    caption: "Strategy ranking",
    detail:
      "Instachain has global access to the best upcoming projects and selects only top tier projects with the highest industry standards",
  },
];
export default AboutData;
