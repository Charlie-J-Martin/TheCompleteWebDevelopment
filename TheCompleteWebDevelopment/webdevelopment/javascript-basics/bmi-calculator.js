/* BMI Calculator
Workout the BMI and then output a meaningful message to the user.
BMI = kg/m^2
*/

function bmiCalculator(weight, height) {
    let bmi = weight / (Math.pow(height, 2));
    let interpretation;
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight";
    }
    return interpretation;
}

console.log(bmiCalculator( 60, 2 ))