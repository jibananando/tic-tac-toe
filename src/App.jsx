import { useState } from "react";

function Square({ value }) {
  function handleClick() {}

  return (
    <button
      className="bg-gray-400 border text-3xl  text-red-600 border-blue-600 font-bold h-24 w-24 m-1 leading-9"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Bord() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
