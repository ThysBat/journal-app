import "./EntrySection.css";

import { Fragment } from "react";
import Tabs from "../Tabs";
import Entry from "../Entry";
import Divider from "../Divider";

export default function EntrySection({ entries, onToggleFavorite }) {
  return (
    <>
      <Tabs />
      <div>
        {entries.map((entry, index) => (
          <Fragment key={index}>
            {index > 0 ? <Divider /> : null}
            <Entry
              id={entry.id}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              isFavorite={entry.isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
