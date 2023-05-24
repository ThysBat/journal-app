import "./Bookmark.css";

import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import { ReactComponent as Star } from "../../resources/star.svg";

export default function Bookmark({ onToggleFavorite, id, isFavorite }) {
  return (
    <button
      className="bookmark"
      onClick={() => {
        onToggleFavorite(id);
      }}
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
