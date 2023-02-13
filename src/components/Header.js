import PropTypes from 'prop-types';
const Header = ({ title }) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
      <nav>
        <button>Home</button>
        <button>Savings Rate</button>
        <button>Investing</button>
        <button>Retirement</button>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  title: 'Savings & Investment Calculator',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
