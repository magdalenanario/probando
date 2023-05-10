import "../styles/style.css";
import NavBar from '../components/NavBar'

function respuesta(eleccion) {
    var preguntas = new Array("Uno", "Dos", "Tres", "Cuatro", "Cinco");
    var i;
    for (i in preguntas) {
        if (preguntas[i] == eleccion) {
            document.getElementById(preguntas[i]).style.display = 'block';
        } else {
            document.getElementById(preguntas[i]).style.display = 'none';
        }
    }
}


const Questions = () => {
    return (
        <body>
            <NavBar />
            <div className="questions">
                <section id="section-preguntas">
                    <h1>&nbsp;&nbsp;Preguntas frecuentes&nbsp;&nbsp;</h1>
                    <div className="preguntas">
                        {/* Sacado de http://www.forosdelweb.com/f13/preguntas-frecuentes-desplegables-998918/ */}
                        <div>
                            <p onClick={() => { respuesta('Uno'); }}>¿Puedo jugar con un amigo online?</p>
                            <span id="Uno">Sí se puede</span>
                        </div>
                        <div>
                            <p onClick={() => { respuesta('Dos'); }}>¿Se puede jugar de a 2 personas? ¿O tiene que ser de a 4?</p>
                            <span id="Dos">Puedes jugar de a 2,3 o 4 jugadores por partida</span>
                        </div>
                        <div>
                            <p onClick={() => { respuesta('Tres'); }}>¿Cuanto tiempo demora el juego en terminar?</p>
                            <span id="Tres">Aproximadamente 30 minutos</span>
                        </div>
                        <div>
                            <p onClick={() => { respuesta('Cuatro'); }}>¿Puedo elegir el color de las fichas?</p>
                            <span id="Cuatro">No, es al azar</span>
                        </div>
                        <div>
                            <p onClick={() => { respuesta('Cinco'); }}>¿Puedo elegir el nombre de usuario para cada juego?</p>
                            <span id="Cinco">Sí! Puedes poner el nickname que quieras para cada partida</span>
                        </div>
                    </div>

                </section>
            </div>
        </body>)
};
export default Questions;