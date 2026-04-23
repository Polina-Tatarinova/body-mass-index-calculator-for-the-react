import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
export default function App() {
  const [heighttValue, setHeighttValue] = useState(Number(0));
  const [weightValue, setWeightValue] = useState(Number(0));
  const [calculationResult, setCalculationResult] = useState(0);

  function calculateBodyMassIndex() {
      const heighMetr = heighttValue / 100
      const IMT = weightValue / (heighMetr * heighMetr)
      return setCalculationResult(IMT.toFixed(0));
  }

  function textResalt(IMT) {
    if (IMT === 0) return '';
    if (IMT <= 16) return "Выраженный дефицит массы тела";
    if (IMT < 18.5) return "Недостаточная (дефицит) масса тела";
    if (IMT < 25) return "Норма";
    if (IMT < 30) return "Избыточная масса тела (предожирение)";
    if (IMT < 35) return "Ожирение первой степени";
    if (IMT < 40) return "Ожирение второй степени";
    if (IMT >= 40)return "Ожирение третьей степени (морбидное)";
  }

  return (
    <main>
      <p>
        Рост(см):{" "}
        <input
          type="text"
          value={heighttValue}
          onInput={(event) => setHeighttValue(+event.target.value)}
        />
      </p>
      <p>
        Вес(кг):{" "}
        <input
          type="text"
          value={weightValue}
          onInput={(event) => setWeightValue(+event.target.value)}
        />
      </p>

      <Button onClick={calculateBodyMassIndex}>Расчитать</Button>
      <p>Результат: {calculationResult}</p>
      <p>{textResalt(calculationResult)}</p>
    </main>
  );
}
