import "./Header.css";

function Header() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className="introduction">
      <div>
        <text className="header">MAQE Forum</text>
      </div>
      <br />
      <text className="subHeader">Your current timezone is: {timezone}</text>
    </div>
  );
}

export default Header;
