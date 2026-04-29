// ArticleList component - Renders a list of article components
// Receives 'posts' array prop from App component
// Maps through each post and creates an Article component
import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article 
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;
