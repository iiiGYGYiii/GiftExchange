import React from "react";
import "./TableForm.styles.scss";

export default function TableForm({
  children,
  handleSubmit,
  submitText,
}: {
  children: JSX.Element;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  submitText: string;
}) {
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>{children}</tbody>
      </table>
      <input type="submit" value={submitText} />
    </form>
  );
}
