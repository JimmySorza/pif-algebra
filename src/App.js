import logo from './logo.png';
import './App.css';
import {useState} from "react";

const data = {
    first: {
        exercise: <>2x + 3y = 1 <br/>  3x - 7y = 2</>,
        question: "Vamos a encontrar el valor de X, ¿Cuál crees que serían los valores por los que debemos multiplicar las ecuaciones para simplificar Y?",
        answers:[
            {
                isTrue: false,
                text: "La primera ecuación se multiplica por 3 y la segunda por 7"
            },
            {
                isTrue: false,
                text: "La primera ecuación se multiplica por 7 y la segunda por 2"
            },
            {
                isTrue: 'second',
                text: "La primera ecuación se multiplica por 7 y la segunda por 3"
            },
            {
                isTrue: false,
                text: "La primera ecuación se multiplica por 3 y la segunda por 5"
            }
        ]
    },
    second: {
        exercise: <>7(2x + 3y) = 7 * 1</>,
        question: "¿Cuál es el resultado de la multiplicación de la primera ecuación?",
        answers:[
            {
                isTrue: false,
                text: "13x - 2y = 14"
            },
            {
                isTrue: false,
                text: "7x + 21y = 7"
            },
            {
                isTrue: false,
                text: "14x + 7y = 7"
            },
            {
                isTrue: 'third',
                text: "14x + 21y = 7"
            }
        ]
    },
    third: {
        exercise: <>3(3x + 7y) = 3 * 2</>,
        question: "¿Cuál es el resultado de la multiplicación de la segunda ecuación?",
        answers:[
            {
                isTrue: false,
                text: "6x - 21y = 12"
            },
            {
                isTrue: 'fourth',
                text: "9x + 21y = 6"
            },
            {
                isTrue: false,
                text: "9x + 21y = 9"
            },
            {
                isTrue: false,
                text: "6x + 21y = 9"
            }
        ]
    },
    fourth: {
        exercise:<>14x + 21y = 7 <br/>  9x - 21y = 6<hr/>?</>,
        question: "¿Cuál es el resultado de X al sumar las ecuaciones resultantes?",
        answers:[
            {
                isTrue: 'finish',
                text: "13/23"
            },
            {
                isTrue: false,
                text: "23/13"
            },
            {
                isTrue: false,
                text: "23/3"
            },
            {
                isTrue: false,
                text: "13/33"
            }
        ]
    }
}

function App() {
    const [activeQuestion, setActiveQuestion] = useState('first')
    const [finish, setFinish] = useState(false)
    const firstQ = (answer) => {
        if (answer){
            answer === 'finish'? setFinish(true): setActiveQuestion(answer)
        } else {
            alert("Incorrecto, Intenta de nuevo")
        }
    }
  return (
    <div className="App">
      <header className="App-header">
          <img className="App-logo" src={logo} alt="poli"/>
          <p className="title">
              PIF Algebra: Ejercicio de sistemas de ecuaciones
          </p>
          {finish? (<p className="congrats">¡Felicitaciones! has terminado el ejercicio.</p>):
              <div>
                  <p className="exercise">{data[activeQuestion].exercise}</p>
                  <p>
                      {data[activeQuestion].question}
                  </p>

                  <div className="answers">
                      {data[activeQuestion].answers.map((answer, index) =>
                          <div key={index} onClick={()=>firstQ(answer.isTrue)} className="choiceWrapper">
                              <p>{answer.text}</p></div> )}
                  </div>
              </div>
          }
          <p className="group">Walter Alexis Goez Gonzalez * John Bairon Holguin Montalvo * jimmy Esteban Sorza Ubaque * Juan David Roldán Ceballos</p>
      </header>
    </div>
  );
}

export default App;
