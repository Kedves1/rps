import { useEffect, useState } from "react";

function App() {
  let firstNum: number;
  let secNum: number;
  let user: number;
  const [score, setScore] = useState<number>(0);

  firstNum = Math.floor(Math.random() * 10 + 1);
  secNum = Math.floor(Math.random() * 10 + 1);

  let result = firstNum * secNum;

  const checkAns = () => {
    if (user == result) {
      setScore(score + 1);
    }
  };

  return (
    <>
      <div className="absolute top-4 right-4 text-3xl text-white select-none">
        Pontod: <span className="font-bold">{score} </span>
      </div>
      <div className=" w-full h-screen bg-slate-600 flex justify-center items-center">
        <div className="  relative w-1/3 h-[420px] bg-gray-200 rounded-2xl shadow-md shadow-black">
          <div className=" text-center text-5xl mt-14 select-none">
            Mennyi {firstNum} és {secNum} szorzata?
          </div>
          <div className="">
            <input
              type="number"
              onChange={(e) => (user = parseInt(e.currentTarget.value))}
              className="w-3/4 m-auto border-2 border-black block rounded-xl mt-14 h-16 pl-4 text-2xl"
            />
          </div>
          <div className="">
            <button
              onClick={() => checkAns()}
              className="w-3/4 m-auto border-2 bg-green-600 border-green-800 hover:bg-green-900 transition-all text-white block rounded-xl mt-14 h-16 text-3xl select-none"
            >
              Válasz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
