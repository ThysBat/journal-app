import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import EntrySection from "./components/EntrySection";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Form />
        <EntrySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
