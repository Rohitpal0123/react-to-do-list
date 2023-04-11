import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
    </header>
  );
};
// const headingStyling = {
//   color: "red",
//   backgroundColor: "black"
// };

Header.defaultProps = {
  title: "Rohit"
};
export default Header;
