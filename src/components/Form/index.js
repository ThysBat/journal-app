import "./Form.css";

import Button from "../Button";

export default function Form() {
  function handleClick(event) {
    event.preventDefault();
    console.log("Button clicked!");
  }

  return (
    <form className="form">
      <h3 className="form__heading">New Entry</h3>
      <label className="form__label" htmlFor="motto">
        Motto
      </label>
      <input id="motto" className="form__input"></input>
      <label className="form__label" htmlFor="notes">
        Notes
      </label>
      <textarea id="notes" className="form__input" rows={4}></textarea>
      <Button handleClick={handleClick}>Create</Button>
    </form>
  );
}
