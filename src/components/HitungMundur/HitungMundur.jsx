import { useState, useEffect } from "react";
import "./hitungmundur.css";

const HitungMundur = () => {
  const [input, setInput] = useState();

  useEffect(() => {
    let countdownInterval = null;

    if (input > 0) {
      countdownInterval = setInterval(() => {
        setInput((prevInput) => prevInput - 1);
      }, 1000);
    }

    if (input <= 0) {
      clearInterval(countdownInterval);
      alert("Waktu Habis");
      setInput(0);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [input]);

  const startCountdown = () => {
    const inputValue = parseInt(document.getElementById("masukAngka").value);
    if (!isNaN(inputValue) && inputValue > 0) {
      setInput(inputValue);
    }
  };

  return (
    <div>
      <h1>Hitung Mundur</h1>

      <input type="number" id="masukAngka" placeholder="Angka Disini" />

      <button onClick={startCountdown}>Mulai</button>

      <p id="hitungMundur">{input}</p>
    </div>
  );
};

export default HitungMundur;
