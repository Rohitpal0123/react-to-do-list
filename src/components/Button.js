import PropTypes from "prop-types";
const Button = ({ color, text }) => {
  const onClick = (k) => {
    console.log(k);
  };

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue"
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

export default Button;
