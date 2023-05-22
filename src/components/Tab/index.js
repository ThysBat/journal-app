import "./Tab.css";

export default function Tab({ children, numberOfEntries, highlighted }) {
  let tabCounterClass = "tab__counter";
  let tabTextClass = "tab__text";
  if (highlighted) {
    tabCounterClass += " --highlighted";
    tabTextClass += " --highlighted";
  }

  return (
    <button className="tab">
      <h3 className={tabTextClass}>{children}</h3>
      <span className={tabCounterClass}>{numberOfEntries}</span>
    </button>
  );
}
