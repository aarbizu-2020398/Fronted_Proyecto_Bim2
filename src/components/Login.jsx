import { useState } from "react";
import { Input } from "./Input";
import { emailValidationMessage, validateEmail, validatePassword } from "../shared/hooks";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
            errorMessage: "",
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        let errorMessage = "";

        switch (field) {
            case "email":
                isValid = validateEmail(value);
                errorMessage = isValid ? "" : emailValidationMessage;
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
                errorMessage, // Agregar el mensaje de error al estado
            },
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.email.value, formState.password.value);
    };

    const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    return (
        <div className="login-container">
            <Logo text="Login Kinal Cast" />
            <form className="auth-form" onSubmit={handleLogin}>
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    errorMessage={formState.email.errorMessage} // Mostrar mensaje de error
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                />
                <button type="submit" disabled={isSubmitButtonDisabled}>
                    {isLoading ? "Loading..." : "Log in"}
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Don't have an account? Sign up
            </span>
        </div>
    );
};