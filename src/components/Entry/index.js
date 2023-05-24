import "./Entry.css";
import Bookmark from "../Bookmark";

export default function Entry({
  id,
  date,
  motto,
  notes,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="entry">
      <span className="entry__date">{date}</span>
      <header className="entry__header">
        <h3 className="entry__headline">{motto}</h3>
        <Bookmark
          id={id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        ></Bookmark>
      </header>
      <p className="entry__text">{notes}</p>
    </article>
  );
}
