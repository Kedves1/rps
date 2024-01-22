import { useState } from "react";
import { FaHandRock } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";

function App() {
  let [userChoice, setUserChoice] = useState("nothin");
  let result: string = "nothin";
  const [botChoice, setBotChoice] = useState("nothin");
  const choices = ["kő", "papír", "olló"];

  const calc = () => {
    if (userChoice == "nothin") return;
    if (botChoice == userChoice) {
      result = "Döntetlen";
      console.log(result);
    } else if (botChoice == "kő" && userChoice == "papír") {
      result = "Nyertél";
      console.log(result);
    } else if (botChoice == "kő" && userChoice == "olló") {
      result = "Vesztettél";
      console.log(result);
    } else if (botChoice == "papír" && userChoice == "olló") {
      result = "Nyertél";
      console.log(result);
    } else if (botChoice == "papír" && userChoice == "kő") {
      result = "Vesztettél";
      console.log(result);
    } else if (botChoice == "olló" && userChoice == "kő") {
      result = "Nyertél";
      console.log(result);
    } else if (botChoice == "olló" && userChoice == "papír") {
      result = "Vesztettél";
      console.log(result);
    }
    console.log(userChoice, botChoice);
  };
  calc();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-700 text-white">
      <div className="">
        <div className="text-center text-6xl mb-14">Kő Papír Olló</div>
        <div className="flex gap-5 justify-center">
          <div className="">
            <button
              onClick={() => {
                setBotChoice(choices[Math.floor(Math.random() * 3)]);
                setUserChoice("kő");
              }}
            >
              <FaHandRock className="flex justify-center items-center w-full h-1/2" />

              <div className="text-2xl">Kő</div>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => {
                setBotChoice(choices[Math.floor(Math.random() * 3)]);
                setUserChoice("papír");
              }}
            >
              <FaHandPaper className="flex justify-center items-center w-full h-1/2" />
              <div className="text-2xl">Papír</div>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => {
                setBotChoice(choices[Math.floor(Math.random() * 3)]);
                setUserChoice("olló");
              }}
            >
              <FaHandScissors className="flex justify-center items-center w-full h-1/2" />
              <div className="text-2xl">Olló</div>
            </button>
          </div>
        </div>
        <div className="flex justify-between text-4xl">
          <div className="">Választásod: {userChoice}</div>
          <div className="">Bot választása: {botChoice || ""}</div>
        </div>
        <div className="text-3xl text-center mt-5">
          Eredmény:{" "}
          <span
            className={
              result === "Nyertél"
                ? "text-green-600"
                : result === "Vesztettél"
                ? "text-red-600"
                : "text-slate-300"
            }
          >
            {result}
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
