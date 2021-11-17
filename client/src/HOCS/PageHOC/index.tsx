import "./PageHOC.styles.scss";

export default function PageHOC({
  title,
  children,
  component,
}: {
  title: string;
  children?: JSX.Element;
  component?: JSX.Element;
}) {
  return (
    <article className="page-container">
      <header className="page-title">
        <h1 className="glow-fx neon">{title}</h1>
      </header>
      <div className="page-content">{component ? component : children}</div>
    </article>
  );
}
