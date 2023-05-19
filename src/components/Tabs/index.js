import "./Tabs.css";

import Tab from "../Tab";

export default function Tabs() {
  return (
    <section className="tabs">
      <Tab highlighted>All Entries</Tab>
      <Tab>Favorites</Tab>
    </section>
  );
}
