import logo from './logo.png';
import './App.css';
import {useState} from "react";

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var vueltas = 0;

if(vueltas === 0){
    generateNewRandomValues();
}

function generateNewRandomValues(){
    a =  getRandomArbitrary(0, 10);
    b =  getRandomArbitrary(0, 10);
    c =  getRandomArbitrary(0, 10);
    d =  getRandomArbitrary(0, 10);
    e =  getRandomArbitrary(0, 10);
    f =  getRandomArbitrary(0, 10);
    g =  getRandomArbitrary(0, 10);
    h =  getRandomArbitrary(0, 10);

    if(vueltas > 4){
        a =  getRandomArbitrary(0, 25);
        b =  getRandomArbitrary(0, 25);
        c =  getRandomArbitrary(0, 25);
        d =  getRandomArbitrary(0, 25);
        e =  getRandomArbitrary(0, 25);
        f =  getRandomArbitrary(0, 25);
        g =  getRandomArbitrary(0, 25);
        h =  getRandomArbitrary(0, 25);
    }

    vueltas = vueltas + 1;
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function limpiarFormulario(){
    document.getElementById('myform').reset();
}

function App() {

    const data = {
        question: "Vamos a encontrar la solución de la multiplicacion de las siguientes dos matrices",
        matriz1: <div className="matrix">
                     <p>{a}</p><p>{b}</p>
                     <p>{c}</p><p>{d}</p>
                 </div>,
        matriz2: <div className="matrix">
                    <p>{e}</p><p>{f}</p>
                    <p>{g}</p><p>{h}</p>
                 </div>,
        solucion: {
            c11: (a * e) + (b * g),
            c12: (a * f) + (b * h),
            c21: (c * e) + (d * g),
            c22: (c * f) + (d * h)
        }

    }

    const [prueba, setPrueba] = useState(false);
    const [ab11, setab11] = useState();
    const [ab12, setab12] = useState();
    const [ab21, setab21] = useState();
    const [ab22, setab22] = useState();
    const [score, setScore] = useState(100);

    function NewScore(puntaje){
        var Nscore = score - puntaje;
        generateNewRandomValues();
        setScore(Nscore);

        if(puntaje === 0){
            if(prueba){
                setPrueba(false);
            }else{
                setPrueba(true);
                console.log(prueba);
            }
        }

        if(score < 60 ){
            final("lost")
        } else if(score <= 90 && vueltas === 11){
            final("plus")
        } else if(vueltas === 11){
            final("nice")
        }
    }

    const handleSubmit = event => {

        var restante = 0;

        if(Number(ab11) !== data.solucion.c11){
            restante = restante + 2.5;
        }

        if(Number(ab12) !== data.solucion.c12){
            restante = restante + 2.5;
        }

        if(Number(ab21) !== data.solucion.c21){
            restante = restante + 2.5;
        }

        if(Number(ab22) !== data.solucion.c22){
            restante = restante + 2.5;
        }

        NewScore(restante);
        limpiarFormulario();
        event.preventDefault();
    }
    const [mensaje, setMesaje] = useState('')
    const [finish, setFinish] = useState(false)
    const final = (resultado) => {
        if (resultado){
            if(resultado === 'nice'){
                setMesaje("¡Felicitaciones! has terminado el ejercicio!");
                setFinish(true);
            } else if(resultado === 'plus') {
                setMesaje("Lo hiciste bien, pero puedes mejorar!");
                setFinish(true);
            } else {
                setFinish(true);
                setMesaje("Suerte para la proxima");
            }
        } else {
            alert("Erro calculando en procedimiento")
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <img className="App-logo" src={logo} alt="poli"/>
                <p className="title">
                    PIF Algebra: Ejercicio de sistemas de ecuaciones
                </p>
                {finish? (<p className="congrats"> {mensaje}</p>):
                    <div>
                        <div id="contenedor">

                        </div>
                        <p className="exercise"><span>A = </span><span>{data.matriz1}</span></p>
                        <p className="exercise"><span>B = </span><span>{data.matriz2}</span></p>
                        <p>
                            {data.question}
                        </p>
                        <br/>
                        <p className="score">
                            Este es tú puntaje {score}
                        </p>

                        <div>
                            <form id="myform" onSubmit={handleSubmit}>
                                <fieldset className="answersWrapper">
                                    <label>
                                        <p>A.B 1.1</p>
                                        <input type="number" value={ab11} onChange={event => setab11(event.target.value)}  id="ab11" />
                                    </label>
                                    <label>
                                        <p>A.B 1.2</p>
                                        <input type="number" value={ab12} onChange={event => setab12(event.target.value)} id="ab12" />
                                    </label>
                                    <label>
                                        <p>A.B 2.1</p>
                                        <input type="number" value={ab21} onChange={event => setab21(event.target.value)} id="ab21" />
                                    </label>
                                    <label>
                                        <p>A.B 2.2</p>
                                        <input type="number" value={ab22} onChange={event => setab22(event.target.value)} id="ab22" />
                                    </label>
                                </fieldset>
                                <input className="button" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>

                }
                <p className="group">Walter Alexis Goez Gonzalez * John Bairon Holguin Montalvo * jimmy Esteban Sorza Ubaque * Juan David Roldán Ceballos</p>
            </header>
        </div>
    );
}

export default App;
