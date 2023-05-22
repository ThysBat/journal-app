import "./Bookmark.css";

import { useState } from "react";
import { ReactComponent as StarFilled } from "../../resources/star-filled.svg";
import { ReactComponent as Star } from "../../resources/star.svg";

export default function Bookmark() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button className="bookmark" onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
