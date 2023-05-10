import "../styles/style.css";
import coke from "../imgs/foto_coke.jpg";
import cucho from "../imgs/foto_cucho.jpg";
import maida from "../imgs/foto_maida.jpg"
import NavBar from '../components/NavBar'
const Team = () => {
    return (
        <body>
            <NavBar />
            <div className="us">
                <section id="section-nosotros">
                    <h1>&nbsp;&nbsp;Quienes somos&nbsp;&nbsp;</h1>
                    <div className="info">
                        <p>Este equipo está compuesto por tres estudiantes de Ingeniería Civil de la Pontificia Universidad
                            Católica, quienes estan cursando el ramo de Tecnologías y aplicaciones web y estan desarrollando
                            un
                            proyecto que tiene como objetivo la construcción e implementación de una aplicación web. </p>
                    </div>
                    <div className="grid">
                        <div className="box coke">
                            <img src={coke}></img>
                            <h3>Jorge Mouat</h3>
                            <p>Major Computación en Tecnologías de la información</p>
                            <p>Minor industrial</p>
                        </div>
                        <div className="box cucho">
                            <img src={cucho}></img>
                            <h3>Cristóbal Ochagavía</h3>
                            <p>Major Computación en Tecnologías de la información</p>
                            <p>Minor industrial</p>
                        </div>
                        <div className="box maida">
                            <img src={maida}></img>
                            <h3>Magdalena Nario</h3>
                            <p>Major computación e ingeniería de software</p>
                            <p>Minor Data science</p>
                        </div>
                    </div>
                </section>
            </div>
        </body>)
};
export default Team;