import "./App.css";
import { useState, useRef, useEffect } from "react";
import MostrarMensaje from "./MostrarMensaje";
const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

function App() {
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());

  const inputRef = useRef(null);

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  const handleReset = () => {
    setScore(20);
    setNumber("");
    setSecretNumber(randomNumber());
    inputRef.current.value = "";
  };
  useEffect(() => {
    console.log(`El numero secreto es ${secretNumber}`);
    console.log(`El numero introducido es ${number}`);

    if (number === secretNumber) {
      //Mensaje has ganado
      //cambia el color de fondo
      //Si el score es mayo que el highscore, actualizar el highscore
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (score === 1) {
      setScore(score - 1);
      //mensaje perdiste
      //cambia el color de fondo a rojo
    } else if (number !== "") {
      //mensaje es mas bajo
      //disminuir el score
      setScore(score - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  let estado;
  if (secretNumber === number) {
    estado = "win";
  } else if (score === 0) {
    estado = "lose";
  } else if (highscore > score) {
    estado = "newscore";
  } else {
    estado = "playing";
  }

  return (
    <div className={estado}>
      {console.log("Renderizando App")}
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleReset}>
          Again!
        </button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button onClick={handleCheck} className="btn check">
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje
            number={number}
            secretNumber={secretNumber}
            score={score}
          />
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
