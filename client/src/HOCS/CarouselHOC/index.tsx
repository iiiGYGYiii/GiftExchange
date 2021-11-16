import "./Carousel.styles.scss";

export default function CarouselHOC({ children }: { children: JSX.Element }) {
  return <div className="carousel-container">{children}</div>;
}
