import { useState } from "react";

const Basket = () => {
  const [skor, setSkor] = useState(0);
  return (
    <div>
      <h1>Skor: {skor}</h1>
      <button onClick={() => setSkor(skor + 1)}>Tambah 1</button>
      <button onClick={() => setSkor(skor + 2)}>Tambah 2</button>
      <button onClick={() => setSkor(skor + 3)}>Tambah 3</button>
    </div>
  );
};

export default Basket;
