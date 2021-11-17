import { CardHOC, CarouselHOC } from "../../HOCS";

import "./Home.styles.scss";

export default function Home() {
  return (
    <div className="home-container">
      <CarouselHOC>
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
        <CardHOC id="how-organizer" title="¿Cómo?">
          <>
            <h4>(Como organizador)</h4>
            <p>
              ¡Tan fácil como sólo poner tu nombre (serás el organizador del
              intercambio), añadir el nombre de los participantes y compartir el
              código de la sala!
            </p>
          </>
        </CardHOC>
        <CardHOC id="how-participant" title="¿Cómo?">
          <>
            <h4>(Como participante)</h4>
            <p>
              El organizador te proporcionará el código de la sala, solo deberás
              ingresarlo y a continuación poner tu nombre.
            </p>
            <p className="warning-text">
              <span id="warning-word">¡Advertencia!</span> Sólo puedes ingresar
              una vez, así que procura tomarle ScreenShot.
            </p>
          </>
        </CardHOC>
        <CardHOC id="socials" title="Acerca de mí">
          <>
            <p>
              ¡Hola! Soy <span>iiiGYGYiii</span>!
            </p>
            <p>Puedes encontrarme en las siguientes redes sociales:</p>
            <div className="social-medias">
              <a href="http://www.facebook.com/iiiGYGYiii">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="http://www.twitter.com/iiiGYGYiii">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://www.instagram.com/iiiGYGYiii">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </>
        </CardHOC>
      </CarouselHOC>
    </div>
  );
}
