
interface INavigationTab {
  buttonText: string;
  iconPlacement: "RIGHT" | "LEFT";
  actionUrl: string;
}
export interface IHeaderData {
  title: { text: string };
  navigationTabs: INavigationTab[];
}
export interface ISideNavigationButtons {
  actionUrl: string;
  buttonText: string;
  icon: {
    alt: string;
    aspX: number;
    aspY: number;
    url: string;
  };
  iconPlacement: string;
}
export interface IUser {
  userName: string;
  userId: string;
  imageData: {
    url: string;
    alt: string;
  };
  blueTick: boolean;
  joiningDate: number;
  following: number;
  followers: number;
  desc: string;
}
interface ITrends {
  country?: string;
  text: string;
  tweets?: number;
  hashTags?: string[];
  category?: string;
}
export interface ITrendingData {
  title: string;
  trends: ITrends[];
}

export interface IFollowData {
  title: string;
  usersToFollow: IUser[];
}

export interface ITweet {
  user: IUser;
  tweetTime: number;
  textArea: string;
  replies: number;
  reTweets: number;
  views: number;
  likes: number;
  id:string;
  threadId:string;
}


export interface ITweetButton {
  buttonText: string;
  actionUrl: string;
  iconPlacement: "RIGHT" | "LEFT";
  bgColorData: { bgKey: string; dottedBorder: boolean };
}

export interface IResponse {
  headerData: IHeaderData;
  loggedInUser: IUser;
  sideNavigationButtons: ISideNavigationButtons[];
  trendingData: ITrendingData;
  followData: IFollowData;
  tweetThreads: ITweet[][];
  tweetButton: ITweetButton;
}
export type TweetContextType = {
  tweets: Response;
  addNewTweet: (text: string) => void;
  likeTweet: (threadId: string) => void;
};