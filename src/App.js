import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import EntrySection from "./components/EntrySection";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });
  const [isFavorite, setIsFavorite] = useLocalStorageState("isFavorite", {
    defaultValue: false,
  });

  function handleAddEntry(newEntry) {
    setEntries([
      ...entries,
      {
        id: uid(),
        date: new Date().toLocaleDateString("en-us", { dateStyle: "medium" }),
        isFavorite: false,
        ...newEntry,
      },
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <Form onAddEntry={handleAddEntry} />
        <EntrySection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </>
  );
}

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];
