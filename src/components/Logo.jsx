import logo from '../assets/img/Star.png';

export const Logo = ({ text }) => {
    return (
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo Star" />
            <span>{text}</span>
        </div>
    );
};

