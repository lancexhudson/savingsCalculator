import PropTypes from 'prop-types';

const HomeBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      Home
    </button>
  );
};

HomeBtn.propTypes = {
  onClick: PropTypes.func,
};

export default HomeBtn;
