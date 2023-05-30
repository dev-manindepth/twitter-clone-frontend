export const fakeTweetsFetch = (url:string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://fakeTweets.com/api/tweets") {
        resolve({
          headerData: {
            title: {
              text: "Home",
            },
            navigationTabs: [
              {
                buttonText: "For You",
                iconPlacement: "RIGHT",
                actionUrl: "/",
              },
              {
                buttonText: "Following",
                iconPlacement: "RIGHT",
                actionUrl: "/",
              },
            ],
          },
          loggedInUser: {
            userName: "Kartikey Sharma",
            userId: "Kartikey_1809",
            imageData: {
              url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
              alt: "kartikeya",
            },
            blueTick: true,
            joiningDate: 1582140603000,
            following: 570,
            followers: 160,
            desc: "Finding Patterns in Chaos",
          },
          sideNavigationButtons: [
            {
              buttonText: "",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/icons8-twitter.svg",
                alt: "twitter",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Home",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/icons8-home.svg",
                alt: "home",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Explore",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/tag.svg",
                alt: "explore",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Notifications",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/notifications.svg",
                alt: "notification",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Messages",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/mail.svg",
                alt: "messages",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Bookmarks",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/bookmark.svg",
                alt: "bookmarks",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
            {
              buttonText: "Profile",
              iconPlacement: "LEFT",
              actionUrl: "/",
              icon: {
                url: "https://assets.nextleap.app/images/person.svg",
                alt: "bookmarks",
                aspX: 24.5,
                aspY: 24.5,
              },
            },
          ],
          trendingData: {
            title: "What's happening",
            trends: [
              {
                country: "India",
                text: "#SupremeCourt",
                tweets: 10400,
              },
              {
                category: "Sports",
                text: "Gujrat Titans",
                hashTags: ["#AavaDe", "#ipl"],
              },
              {
                category: "Business & finance",
                text: "Must",
                tweets: 324000,
              },
              {
                category: "Indian Premier League",
                text: "MSDhoni",
                hashTags: ["#ChennaiSuperKings", "#ipl"],
              },
            ],
          },
          followData: {
            title: "Who to follow",
            usersToFollow: [
              {
                userName: "Kartikey Sharma",
                userId: "Kartikey_1809",
                imageData: {
                  url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                  alt: "kartikeya",
                },
                blueTick: true,
                joiningDate: 1582140603000,
                following: 570,
                followers: 160,
                desc: "Finding Patterns in Chaos",
              },
              {
                userName: "Kartikey Sharma",
                userId: "Kartikey_1809",
                imageData: {
                  url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                  alt: "kartikeya",
                },
                blueTick: true,
                joiningDate: 1582140603000,
                following: 570,
                followers: 160,
                desc: "Finding Patterns in Chaos",
              },
            ],
          },
          tweetThreads: [
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "97t943x7",
                threadId: "rvujohdf",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "9htv6p0a",
                threadId: "h0iuiv47",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "x6i6pw1j",
                threadId: "2pegl9x5",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "70juo5y9",
                threadId: "ydffytkp",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "4y6xzmnw",
                threadId: "67qmavay",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "n6ekgpsj",
                threadId: "vepkeqsj",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "lgbtq2xa",
                threadId: "egtylkao",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "jhldegqv",
                threadId: "1jap6jng",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "lypxj2uf",
                threadId: "cv9zwdif",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "k5ktw49p",
                threadId: "sn33n279",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "n7l20zjt",
                threadId: "5egwrowk",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "zjk07vod",
                threadId: "jg6kz49d",
              },
            ],
            [
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "voph33qj",
                threadId: "hd2f9inm",
              },
              {
                user: {
                  userName: "Kartikey Sharma",
                  userId: "Kartikey_1809",
                  imageData: {
                    url: "https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG",
                    alt: "kartikeya",
                  },
                  blueTick: true,
                  joiningDate: 1582140603000,
                  following: 570,
                  followers: 160,
                  desc: "Finding Patterns in Chaos",
                },
                tweetTime: 1678649733000,
                textArea:
                  "It's the year 2021 and we still don't have flying cars.",
                replies: 10400,
                reTweets: 1100,
                views: 107000,
                likes: 506000,
                id: "vvwpqm6a",
                threadId: "epahvt6m",
              },
            ],
          ],
          tweetButton: {
            buttonText: "Tweet",
            actionUrl: "/",
            iconPlacement: "RIGHT",
            bgColorData: {
              bgKey: "var(--twitter-blue)",
              dottedBorder: false,
            },
          },
        });
      } else {
        reject({ message: "Resource not found", status: "" });
      }
    }, 2000);
  });
};
