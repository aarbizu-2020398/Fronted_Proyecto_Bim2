export const Input = ({
    field,
    label,
    value,
    oneChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea
}) => {
    const handleValueChange = (event) => {
        oneChangeHandler(event.target.value, field);
    }

    const handleBlur = (event) => {
        onBlurHandler(event.target.value, field);
    }
    return (
        <>
            <div className="auth-from-label">
                <span>{label}</span>
            </div>

            <div>
                {textArea ? (
                    <textarea
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                        rows={5}
                        style={{ maxWidth: '400px' }}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleBlur}
                    />
                )}
                <span className="auth-form-validation-message">
                    {showErrorMessage && validationMessage}
                </span>
            </div>
        </>
    );
}