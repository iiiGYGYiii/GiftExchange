import "./Card.styles.scss";

export default function Card({
  title,
  children,
}: {
  title: string;
  children?: JSX.Element;
}) {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <hr />
      <div className="card-content">{children ? children : null}</div>
    </div>
  );
}
