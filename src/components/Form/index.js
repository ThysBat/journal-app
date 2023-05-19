import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <h2>New Entry</h2>
      <label htmlFor="motto">Motto</label>
      <input id="motto"></input>
      <label for="notes">Motto</label>
      <textarea id="notes"></textarea>
    </form>
  );
}
