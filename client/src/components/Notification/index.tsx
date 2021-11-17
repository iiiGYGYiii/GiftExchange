import "./Notification.styles.scss";

export default function Notification({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) {
  return (
    <div className={`notification ${error ? "error" : ""}`}>
      <p>{message}</p>
    </div>
  );
}
