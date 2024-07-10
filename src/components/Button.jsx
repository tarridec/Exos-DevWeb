import PropTypes from 'prop-types';

const Button = ({ 
  className = "",
  children, 
  onClick = () => {} 
}) => {

  return (
  <button 
    onClick={onClick}
    className={`border-4 rounded-xl px-4 py-2 bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all ${className}`}>
    {children}
  </button>);
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;