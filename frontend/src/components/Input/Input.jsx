import PropTypes from "prop-types";
import style from "./Input.module.css";

export default function Input({ type, info, id, value, hChange, textarea }) {
  return (
    <div className={style.input}>
      <label htmlFor={id}>{info}</label>
      {textarea ? (
        <textarea
          name={id}
          id={id}
          value={value}
          onChange={hChange}
          rows="8"
          style={{ width: "100%" }}
        />
      ) : (
        <input type={type} name={id} id={id} value={value} onChange={hChange} />
      )}
    </div>
  );
}

Input.defaultProps = {
  textarea: false,
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  info: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool,
};
