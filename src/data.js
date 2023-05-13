import home from "./assets/home.png";
import explore from "./assets/explore.png";
import notification from "./assets/notification.png";
import messages from "./assets/messages.png";
import bookmarks from "./assets/bookmarks.png";
import twitterblue from "./assets/twitterblue.png";
import profile from "./assets/profile.png";
import more from "./assets/more.png";
import search from './assets/search.png'

export const navData = [
  {
    id: 1,
    title: {
      text: "Home",
      className: "nav-home",
    },
    className: "sidenav-link ",
    img: home,
  },
  {
    id: 2,
    title: {
      text: "Explore",
      className: "nav-explore",
    },
    className: "sidenav-link",
    img: explore,
  },
  {
    id: 3,
    title: {
      text: "Notifications",
      className: "nav-notification",
    },
    className: "sidenav-link ",
    img: notification,
  },
  {
    id: 4,
    title: {
      text: "Messages",
      className: "nav-messages",
    },
    className: "sidenav-link",
    img: messages,
  },
  {
    id: 5,
    title: {
      text: "Bookmarks",
      className: "nav-bookmarks",
    },
    className: "sidenav-link",
    img: bookmarks,
  },
  {
    id: 6,
    title: {
      text: "Twitter Blue",
      className: "nav-tblue",
    },
    className: "sidenav-link ",
    img: twitterblue,
  },
  {
    id: 7,
    title: {
      text: "Profile",
      className: "nav-profile",
    },
    className: "sidenav-link",
    img: profile,
  },
  {
    id: 8,
    title: {
      text: "More",
      className: "nav-more",
    },
    className: "sidenav-link ",
    img: more,
  },
];
export const bottomNavData = [
  {
    id: 1,
    className: "bottom-nav-home ",
    img: home,
  },
  {
    id: 2,
    className: "bottom-nav-search",
    img: search,
  },
  {
    id: 3,
    className: "bottom-nav-notification ",
    img: notification,
  },
  {
    id: 4,
    className: "bottom-nav-messages",
    img: messages,
  },
];
export const newsData = [
  {
    id: 1,
    category: "NBA",
    event: "This morning",
    desc: "76ers at Celtics",
    tags: [],
    tweets: "",
    img: "https://pbs.twimg.com/semantic_core_img/1450883706583797760/Ruiz1GC-?format=jpg&name=240x240",
  },
  {
    id: 2,
    category: "Entertainment",
    event: "Trending",
    desc: "#ThalapathyVijay",
    tag: ["#HappyBirthdayTrisha"],

  },
  {
    id: 3,
    category: "",
    event: "Tranding in India",
    desc: "#ParineetiChopra",
    tag: [],
    tweets: "423",
  },
  {
    id: 4,
    category: "",
    event: "Trending in india",
    desc: "#ManipurOnFire",
    tag: [],
    tweets: "44,700",
  },
];

export const whoToFollow = [
  {
    id: 1,
    userId: "msdhoni",
    username: "Mahendra Singh Dhoni",
    img: "https://pbs.twimg.com/profile_images/790576698085416960/BkIjtFXR_200x200.jpg",
    blueTick: true,
  },
  {
    id: 2,
    userId: "iamsrk",
    username: "Sahrukh Khan",
    img: "https://pbs.twimg.com/profile_images/1318511011117199362/htNsviXp_200x200.jpg",
    blueTick: true,
  },
  {
    id: 3,
    userId: "iamVkohli",
    username: "Virat Kohli",
    img: "https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_200x200.jpg",
    blueTick:true
  },
];