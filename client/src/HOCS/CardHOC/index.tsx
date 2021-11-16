import "./Card.styles.scss";

export default function Card({
  title,
  children,
  id,
}: {
  title: string;
  children?: JSX.Element;
  id: string;
}) {
  return (
    <div id={id} className="card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <hr />
      <div className="card-content">{children ? children : null}</div>
    </div>
  );
}
