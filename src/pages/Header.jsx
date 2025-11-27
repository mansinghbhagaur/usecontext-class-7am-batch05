import {Link} from "react-router-dom";

const Header = () => {
  return (
      <div style={{ background: "red", display: "flex" }}>
        <h1>Logo</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="contact-us">Contact</Link>
        </div>
      </div>
  );
};

export default Header;
