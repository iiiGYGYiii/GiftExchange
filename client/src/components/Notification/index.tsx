import { NotifyError } from "../../hooks/errorNotify.hook";
import "./Notification.styles.scss";

export default function Notification({ message, error }: NotifyError) {
  return (
    <div
      className={`notification ${
        error === 0 ? "" : error === 1 ? "warning" : "error"
      }`}
    >
      <p>{message}</p>
    </div>
  );
}
