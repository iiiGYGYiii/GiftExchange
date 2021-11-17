import "./TableInput.styles.scss";

interface TableInputProps {
  textLabel: string;
  inputId: string;
  inputValue: string;
  handleKey: React.KeyboardEventHandler<HTMLInputElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.MouseEventHandler<HTMLInputElement>;
  textButton: string;
  disabled?: boolean;
  required?: boolean;
}

export default function TableInput({
  textLabel,
  inputId,
  inputValue,
  handleKey,
  handleChange,
  handleClick,
  textButton,
  disabled,
  required,
}: TableInputProps) {
  return (
    <tr>
      <td>
        <label htmlFor={inputId}>{textLabel}: </label>
      </td>
      <td>
        <input
          value={inputValue}
          onKeyPress={handleKey}
          onChange={handleChange}
          id={inputId}
          disabled={disabled}
          required={required}
          minLength={required ? 3 : undefined}
        />
      </td>
      <td>
        <input
          type="button"
          value={disabled ? "Corregir" : textButton}
          onClick={handleClick}
        />
      </td>
    </tr>
  );
}
