import PropTypes from "prop-types";
import style from "./Button.module.css";

export default function Button({ text }) {
  return (
    <button type="submit" className={style.button}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
