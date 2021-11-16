import "./Carousel.styles.scss";

const idGenerator = (indx: string | number, forAnchor?: boolean): string =>
  `${forAnchor ? "#" : ""}carousel_slide${indx}`;

function CarouselItem({
  children,
  indx,
  lastIndx,
}: {
  children: JSX.Element;
  indx: number;
  lastIndx?: number;
}) {
  return (
    <li id={idGenerator(indx)} tabIndex={0} className="carousel-slide">
      {children}
      <div className="carousel-snapper" />
      {indx === 0 && lastIndx ? (
        <a href={idGenerator(lastIndx, true)} className="carousel-prev">
          <i className="fas fa-chevron-left"></i>
        </a>
      ) : (
        <a href={idGenerator(indx - 1, true)} className="carousel-prev">
          <i className="fas fa-chevron-left"></i>
        </a>
      )}
      {lastIndx && indx !== 0 ? (
        <a href={idGenerator(0, true)} className="carousel-next">
          <i className="fas fa-chevron-right"></i>
        </a>
      ) : (
        <a href={idGenerator(indx + 1, true)} className="carousel-next">
          <i className="fas fa-chevron-right"></i>
        </a>
      )}
    </li>
  );
}

function NavigationItem({ indx }: { indx: number }) {
  return (
    <li className="carousel__navigation-item">
      <a href={idGenerator(indx, true)} className="carousel__navigation-button">
        Go to slide {indx}
      </a>
    </li>
  );
}

export default function CarouselHOC({ children }: { children: JSX.Element[] }) {
  const itemsInChildren = children.length;
  return (
    <section className="carousel" aria-label="Home-Gallery">
      <ol className="carousel-viewport">
        {children.map((child, indx) => (
          <CarouselItem
            key={`carousel__item${indx}`}
            indx={indx}
            lastIndx={
              indx === 0 || indx === itemsInChildren - 1
                ? itemsInChildren - 1
                : undefined
            }
          >
            {child}
          </CarouselItem>
        ))}
      </ol>
      <aside className="carousel__navigation">
        <nav>
          <ol className="carousel__navigation-list">
            {children.map((child, i) => (
              <NavigationItem key={"nav" + idGenerator(i, true)} indx={i} />
            ))}
          </ol>
        </nav>
      </aside>
    </section>
  );
}
