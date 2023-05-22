import "./Tabs.css";

import Tab from "../Tab";

export default function Tabs() {
  return (
    <section className="tabs">
      <Tab counter={3} highlighted>
        All Entries
      </Tab>
      <Tab counter={1}>Favorites</Tab>
    </section>
  );
}
