export function calculateBMI() {
  if (heightValue <= 0 || weightValue <= 0) {
    return alert("Введённые значения должны быть целыми числами и больше 0");
  }
  const heightInMeters = heightValue / 100;
  const bmi = weightValue / (heightInMeters * heightInMeters);
  return setCalculationResult(Math.round(bmi));
}
