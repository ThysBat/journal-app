import "./Tabs.css";

import Tab from "../Tab";

export default function Tabs() {
  return (
    <section className="tabs">
      <Tab numberOfEntries={3} highlighted>
        All Entries
      </Tab>
      <Tab numberOfEntries={1}>Favorites</Tab>
    </section>
  );
}
