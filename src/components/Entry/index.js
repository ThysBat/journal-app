import "./Entry.css";
import Bookmark from "../Bookmark";

export default function Entry({ date, headline, text }) {
  return (
    <article className="entry">
      <span className="entry__date">{date}</span>
      <header className="entry__header">
        <h3 className="entry__headline">{headline}</h3>
        <Bookmark></Bookmark>
      </header>
      <p className="entry__text">{text}</p>
    </article>
  );
}
