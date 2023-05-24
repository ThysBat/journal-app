import "./Form.css";

import Button from "../Button";

export default function Form({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newEntry = { ...data };
    onAddEntry(newEntry);

    event.target.reset();
    event.target.motto.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__heading">New Entry</h3>
      <label className="form__label" htmlFor="motto">
        Motto
      </label>
      <input name="motto" id="motto" className="form__input"></input>
      <label className="form__label" htmlFor="notes">
        Notes
      </label>
      <textarea
        name="notes"
        id="notes"
        className="form__input"
        rows={4}
      ></textarea>
      <Button type="submit">Create</Button>
    </form>
  );
}
