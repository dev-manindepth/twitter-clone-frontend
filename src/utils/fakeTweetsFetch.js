export const fakeTweetsFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://fakeTweets.com/api/tweets") {
        resolve([
          {
            userId: "manish",
            username: "Manish Kumar",
            createdAt: "5h",
            avatar:
              "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
            text: "Learn more about web design leveragin UI/UX",
            comment: [
              {
                postId: "manish",
                userId: "rubik",
                username: "Rubik Sam",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "manish",
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "manish",
                userId: "mohan",
                username: "Mohan Pandey",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "https://pbs.twimg.com/media/FvYOU_7WIAAdXqi?format=jpg&name=small",
            thread: [
              {
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.",
                img: "",
                like: 20,
                view: 43,
                retweets: 2,
                comment: [
                  {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is thread comment",
                  },
                ],
              },
            ],
          },
          {
            userId: "roberthelo",
            username: "Robert Helo",
            createdAt: "5h",
            avatar: "https://randomuser.me/api/portraits/women/72.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [
              {
                postId: "roberthelo",
                userId: "rpery",
                username: "Solva Dave",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar: "https://randomuser.me/api/portraits/men/14.jpg",
                retweets: "12",
                like: "312",
                view: "4231",
              },
              {
                postId: "roberthelo",
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "roberthelo",
                userId: "mohan",
                username: "Mohan Pandey",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "https://pbs.twimg.com/media/FvjOnSxXoAAlfnq?format=jpg&name=medium",
            thread: [],
          },
          {
            userId: "neha",
            username: "Neha Kumari",
            createdAt: "5h",
            avatar: "https://randomuser.me/api/portraits/women/88.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [
              {
                postId: "neha",
                userId: "random",
                username: "Random Guy",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar: "https://randomuser.me/api/portraits/men/67.jpg",
                retweets: "2",
                like: "43",
                view: "543",
              },
              {
                postId: "neha",
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "neha",
                userId: "neha",
                username: "Neha Kumari",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "",
            thread: [],
          },
          {
            userId: "johndoe",
            username: "John Doe",
            createdAt: "5h",
            avatar: "https://randomuser.me/api/portraits/men/57.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [
              {
                postId: "johndoe",
                userId: "random1",
                username: "Random Guy",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar: "https://randomuser.me/api/portraits/women/85.jpg",
                retweets: "3",
                like: "43",
                view: "534",
              },
              {
                postId: "johndoe",
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "johndoe",
                userId: "mohan",
                username: "Mohan Pandey",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "",
            thread: [
              {
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.",
                img: "",
                like: 20,
                view: 43,
                retweets: 2,
                comment: [
                  {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is thread comment",
                  },
                ],
              },
            ],
          },
          {
            userId: "robinsam",
            username: "Robin Sam",
            createdAt: "5h",
            avatar: "https://randomuser.me/api/portraits/men/80.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [
              {
                userId: "albert",
                username: "Albert Alice",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar: "https://randomuser.me/api/portraits/men/62.jpg",
                retweets: "12",
                like: "423",
                view: "6234",
              },
              {
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                userId: "mohan",
                username: "Mohan Pandey",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                userId: "manohar",
                username: "Manohar Babu",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is ",
                createdAt: "3h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                userId: "sakshi",
                username: "Sakshi Bhagat",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is awesome",
                createdAt: "5h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                userId: "random1",
                username: "Random Guy",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "6h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "",
            thread: [
              {
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.",
                img: "",
                like: 20,
                view: 43,
                retweets: 2,
                comment: [
                  {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is thread comment",
                  },
                ],
              },
            ],
          },
          {
            userId: "rohan",
            username: "Rohan Kumar",
            createdAt: "1h",
            avatar: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [
              {
                postId: "rohan",
                userId: "denvar",
                username: "Denvar Alice",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar: "https://randomuser.me/api/portraits/men/68.jpg",
                retweets: "12",
                like: "32",
                view: "435",
              },
              {
                postId: "rohan",
                userId: "rohan",
                username: "Rohan Singh",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
              {
                postId: "rohan",
                userId: "mohan",
                username: "Mohan Pandey",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is great",
                createdAt: "2h",
                avatar:
                  "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
                retweets: "",
                like: "",
                view: "",
              },
         
            ],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "",
            thread: [
              {
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.",
                img: "",
                like: 20,
                view: 43,
                retweets: 2,
                comment: [
                  {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is thread comment",
                  },
                ],
              },
            ],
          },
          {
            userId: "manish",
            username: "Manish Kumar",
            createdAt: "5h",
            avatar:
              "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "",
            thread: [],
          },
          {
            userId: "manish",
            username: "Manish Kumar",
            createdAt: "5h",
            avatar:
              "https://pbs.twimg.com/profile_images/1614470877432938499/VpfrV5sX_x96.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis nesciunt illo earum modi voluptatibus debitis nihil itaque nam minus consequuntur asperiores obcaecati hic repellendus, quae facere? Modi, deleniti quaerat.This is my first tweet",
            comment: [],
            retweets: 12,
            like: 15,
            view: 2345,
            img: "https://pbs.twimg.com/media/Fvlad3caAAMCVA4?format=jpg&name=small",
            thread: [],
          },
        ]);
      } else {
        reject({ message: "Resource not found", status: "" });
      }
    }, 2000);
  });
};