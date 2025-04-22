import '../styles/Button.css';

function Button({ type = 'button', onClick, text }) {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {text}
    </button>
  );
}

export default Button;