import "../styles/style.css";
import NavBar from '../components/NavBar'
const Rules = () => {
    return (
        <body>
            <NavBar />
            <div className="rules">
                <section id="section-reglas">
                    <div>
                        <h1>&nbsp;&nbsp;Reglas del juego&nbsp;&nbsp;</h1>
                    </div>
                    <div className="reglas">
                        <div>
                            <h3>
                                Pasos previos
                            </h3>
                            <p>
                                A cada jugador se le asigna:
                            </p>
                            <ol>
                                <li>Un color del tablero.</li>
                                <li>4 fichas colocadas en la base del color.</li>
                                <li>2 cartas ludópatas al azar.</li>
                            </ol>
                        </div>

                        <div>
                            <h3>
                                Cartas ludopatas
                            </h3>
                            <ol type="A">
                                <li>Asesino: antes de comenzar el turno, puedes mandar cualquier ficha de vuelta a su base.
                                </li>
                                <li>Libre: antes de comenzar el turno, puedes liberar cualquier ficha de tu base.
                                </li>
                                <li>X2: tienes un turno para hacer valer por 2 tu dado. Avanzas el doble de tu lanzamiento.
                                </li>
                                <li>Ladrón: antes de comenzar el turno, robas al azar una carta al jugador que elijas.
                                </li>
                                <li>Boost: lleva tu ficha al comienzo de la recta final.
                                </li>
                                <li>Elección: en vez de tirar el dado, elige el número y ¡úsalo!
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h3>
                                El juego
                            </h3>
                            <p>
                                Antes de comenzar el juego, se le asignará a cada jugador un color y el jugador que parte
                                quedará
                                determinado por el lanzamiento del dado más alto. Luego, cada jugador lanzará, por turno, un
                                dado
                                el cual le dará opciones para poder decidir qué hacer, entre las opciones: sacar alguna ficha de
                                la base (sacando un 6), mover una de las fichas o usar cartas de la “mano” (y luego, jugar el
                                turno).
                                Una vez que las fichas ya han salido de sus bases, van avanzando por el recorrido general y
                                pueden
                                ser obstaculizadas por acciones de los otros jugadores o por las mismas cartas robadas.
                                Finalmente,
                                un jugador gana llevando todas sus fichas desde la base hasta la zona de victoria (contenida en
                                la
                                recta final de cada jugador).
                            </p>
                        </div>

                        <div>
                            <h3>
                                Reglas
                            </h3>
                            <ol>
                                <li>Salir de la base: debes obtener un 6 o usar una carta “Libre” para liberar una ficha, las
                                    cuales
                                    se liberan una a la vez. Si no obtienes un 6 o no tienes la carta, le toca al siguiente
                                    turno.
                                </li>
                                <li>Avanzar: Se lanzará el dado y se avanzará el número obtenido. Puedes caer en una casilla
                                    blanca
                                    (no pasa nada y le toca al siguiente) o en una con un signo de interrogación (robas una
                                    carta
                                    del mazo). Se puede avanzar sólo si la ficha está fuera de la base
                                    *Se puede sobrepasar fichas tuyas como de otros jugadores.
                                </li>
                                <li>Caer en una casilla donde hay una ficha: acá hay dos opciones; caes en una casilla donde hay
                                    una
                                    ficha tuya o caes en una casilla donde hay una ficha de otro jugador. En la primera opción,
                                    se
                                    coloca
                                    una sobre la otra y esta impedirá el paso de una ficha oponente. Con la segunda opción
                                    mandas a
                                    la
                                    ficha en la cual caíste a su base*.
                                    *Se debe caer exactamente en la casilla, no simplemente pasarla.
                                </li>
                                <li>Recta final: debes obtener el número exacto en el dado para poder entrar a la zona de
                                    victoria,
                                    si
                                    obtienes más, rebotarás lo sobrante retrocediendo en el tablero.
                                </li>
                                <li>Cartas: siempre debes usar tus cartas justo al comenzar el turno, si tiras el dado antes no
                                    podrás
                                    hacer uso de estas. Tienen solo un uso y luego se devuelven al mazo. Luego, juegas el turno.
                                </li>
                                <li>Victoria: logra la victoria el jugador que lleve todas sus fichas a la zona de victoria.
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </body>)
};
export default Rules;