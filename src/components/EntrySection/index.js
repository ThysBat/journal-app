import "./EntrySection.css";

import { Fragment } from "react";
import Tabs from "../Tabs";
import Entry from "../Entry";
import Divider from "../Divider";

export default function EntrySection({ entries }) {
  return (
    <>
      <Tabs />
      <div>
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index === 0 ? "" : <Divider />}
            <Entry
              date={entry.date}
              headline={entry.motto}
              text={entry.notes}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
