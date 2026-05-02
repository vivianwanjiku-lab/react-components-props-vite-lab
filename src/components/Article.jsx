// Article component - Displays individual blog post
// Receives 'title', 'date', 'preview', and 'minutesToRead' props from ArticleList
function Article({ title, date, preview, minutesToRead }) {
  // If no date is provided, use "January 1, 2024" as default
  const displayDate = date || "January 1, 2024";

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {displayDate} • {minutesToRead} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
