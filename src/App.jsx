// App.jsx - Main component that orchestrates all other components
// This component imports blog data and passes it down as props to child components

import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blogData from "./data/blog";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Pass the blog name to Header component */}
      <Header name={blogData.name} />

      {/* Pass the blog image and about text to About component */}
      <About image={blogData.image} about={blogData.about} />

      {/* Pass the blog posts array to ArticleList component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
