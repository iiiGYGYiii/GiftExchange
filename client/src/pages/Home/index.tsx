import { CardHOC } from "../../HOCS";

import "./Home.styles.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-carousel">
        <CardHOC id="welcome" title="¡Bienvenido!">
          <p>
            ¡En <span>interchanger</span> te damos la solución para organizar
            los intercambios de regalo!
          </p>
        </CardHOC>
        <CardHOC id="why" title="¿Por qué?">
          <>
            <p>
              Al asignar con quién nos toca intercambiar regalo nos podemos
              encontrar en situaciones incómodas como:
            </p>
            <ul>
              <li>Es muy tardado y nadie quiere hacer la tómbola.</li>
              <li>Me tocó mi nombre, y tenemos que repetir el proceso.</li>
              <li>¡El ciclo se cierra varias veces!</li>
            </ul>
          </>
        </CardHOC>
        <CardHOC id="how" title="¿Cómo?">
          <p>
            ¡Tan fácil como sólo poner tu nombre (serás el creador de la sala),
            e ir añadiendo el nombre de los participantes!
          </p>
        </CardHOC>
      </div>
    </div>
  );
}
