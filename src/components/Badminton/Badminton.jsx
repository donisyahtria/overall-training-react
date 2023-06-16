import { useState, useEffect } from "react";

const Badminton = () => {
  const [skorA, setSkorA] = useState(0);
  const [skorB, setSkorB] = useState(0);
  const [pemenang, setPemenang] = useState(null);

  useEffect(() => {
    if (skorA >= 21) {
      setPemenang("Tim A");
    } else if (skorB >= 21) {
      setPemenang("Tim B");
    }
  }, [skorA, skorB]);

  return (
    <div>
      <h1>Skor Tim A: {skorA}</h1>
      <button onClick={() => setSkorA(skorA + 1)} disabled={pemenang !== null}>
        Tambah 1
      </button>

      <h1>Skor Tim B: {skorB}</h1>
      <button onClick={() => setSkorB(skorB + 1)} disabled={pemenang !== null}>
        Tambah 1
      </button>

      {pemenang && <h2>Pemenang: {pemenang}</h2>}
    </div>
  );
};

export default Badminton;
