import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="bg-white border border-gray-400 h-24 w-24 text-lg m-1 leading-9"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Bord() {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
