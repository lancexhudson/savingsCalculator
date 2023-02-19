import PropTypes from 'prop-types';
import HomeBtn from './HomeBtn';
import SavingsBtn from './SavingsBtn';
import InvestingBtn from './InvestingBtn';
import Retirement from './Retirement';
const Header = ({ title, onAdd }) => {
  // const onClick = () => {
  //   console.log('Click');
  // };
  return (
    <header>
      <h1 className="header">{title}</h1>
      <nav>
        <HomeBtn />
        <SavingsBtn onclick={onAdd} />
        <InvestingBtn />
        <Retirement />
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
