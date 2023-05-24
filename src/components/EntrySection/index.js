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
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              entry={entry}
              id={entry.id}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
