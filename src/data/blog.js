// Blog data file containing all the content for the personal blog
// This data will be passed down as props to various components

const blogData = {
  name: "My Personal Blog",
  image: "https://via.placeholder.com/150",
  about: "Welcome to my personal blog! I'm a passionate developer sharing my journey, thoughts, and experiences in the world of web development. Here you'll find articles about React, JavaScript, and other tech topics that I'm excited about.",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "January 15, 2024",
      preview: "React has revolutionized the way we build user interfaces. In this article, I'll share my journey learning React and the key concepts you need to understand...",
      minutesToRead: 5
    },
    {
      id: 2,
      title: "Understanding Props and State",
      date: "January 20, 2024",
      preview: "Props and state are fundamental concepts in React. Let me break down the differences and show you when to use each one...",
      minutesToRead: 7
    },
    {
      id: 3,
      title: "Building Reusable Components",
      date: "January 25, 2024",
      preview: "Component reusability is key to building scalable React applications. Here are some best practices I've learned along the way...",
      minutesToRead: 6
    }
  ]
};

export default blogData;
