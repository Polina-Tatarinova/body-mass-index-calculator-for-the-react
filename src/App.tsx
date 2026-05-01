import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button.jsx";
// import { calculateBMI } from "./components/utils/bmiUtils.js";

export default function App() {
  const [heightValue, setHeightValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [calculationResult, setCalculationResult] = useState<number>(0);

  function calculateBMI() {
    if (heightValue <= 0 || weightValue <= 0) {
      return alert("Введённые значения должны быть целыми числами и больше 0");
    }
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);
    return setCalculationResult(Math.round(bmi));
  }

  function getBMIText(bmi: number){
    if (bmi <= 0) return "";
    if (bmi <= 16) return "Выраженный дефицит массы тела";
    if (bmi < 18.5) return "Недостаточная (дефицит) масса тела";
    if (bmi < 25) return "Норма";
    if (bmi < 30) return "Избыточная масса тела (предожирение)";
    if (bmi < 35) return "Ожирение первой степени";
    if (bmi < 40) return "Ожирение второй степени";
    if (bmi >= 40) return "Ожирение третьей степени (морбидное)";
  }

  return (
    <main>
      <p>
        Рост(см):{" "}
        <input
          type="text"
          value={heightValue}
          onInput={(event) => setHeightValue(+event.target.value)}
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

      <Button onClick={calculateBMI}>Расcчитать</Button>
      <p>Результат: {calculationResult}</p>
      <p>{getBMIText(calculationResult)}</p>
    </main>
  );
}
