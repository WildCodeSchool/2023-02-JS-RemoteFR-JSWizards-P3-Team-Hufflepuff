import PropTypes from "prop-types";
import style from "./Input.module.css";

export default function Input({ type, info, id, value, hChange }) {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{info}</label>
      <input type={type} name={id} id={id} value={value} onChange={hChange} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hChange: PropTypes.func.isRequired,
};
