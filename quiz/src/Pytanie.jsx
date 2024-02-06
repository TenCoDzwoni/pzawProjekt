import { useState } from "react";

function Pytanie({$pytanie}) {
  return (
    <div className="Pytanie">
      <p>{$pytanie}?</p>
      <input/>
    </div>
  );
}

export default Pytanie;