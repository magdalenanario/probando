import "../styles/style.css";
import NavBar from '../components/NavBar'

const About = () => {
    return (
        <div className="about">
            <NavBar />
            <section id="section-acerca-de">
                <h1>&nbsp;&nbsp;Acerca de&nbsp;&nbsp;</h1>
                <div className="acerca-de">
                    <div>
                        <p>Este es un juego de estrategia basado en el Ludo para jugar de entre 2 a 4 jugadores.</p>
                    </div>
                    <div>
                        <p> En Ludopatía solo deberás llevar todas tus fichas al lugar de victoria. Eso sí, ¡deberás pasar
                            por obstáculos y barreras!
                        </p>
                    </div>
                    <div>
                        <p>El mapa de nuestro juego es casi igual al del ludo, sólo que con algunas modificaciones. El
                            mapa contiene una base para cada jugador y sus respectivas rectas finales para poder
                            ganar. Dentro de cada recta final existe una casilla que es la zona de victoria, si una ficha
                            llega ahí, gana y se queda inmóvil. También tiene el recorrido general por donde van
                            pasando las fichas de todos los jugadores. El único cambio es que en algunas casillas (con
                            signo de interrogación), si se “cae” en ellas, se deberá robar una carta de un mazo aleatorio,
                            donde cada carta representa una acción diferente.
                        </p>
                    </div>
                </div>
            </section>
        </div>)
}

export default About;