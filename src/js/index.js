const bmiMessages = {
    status: {
        UNDERWEIGHT_MESSAGE: 'Abaixo do peso',
        IDEAL_WEIGHT_MESSAGE: 'Peso ideal',
        OVERWEIGHT_MESSAGE: 'Sobrepeso',
        OBESITY_MESSAGE: 'Obesidade',
        SEVERE_OBESITY_MESSAGE: 'Obesidade severa',
        MORBID_OBESITY_MESSAGE: 'Obesidade mórbida'
    }
}

const calculateBMI = (weight, height) => {
  return weight / (height * height)
}

const bmiResults = (bmi) => ({
  [bmi < 18.5]: bmiMessages.status.UNDERWEIGHT_MESSAGE,
  [bmi >= 18.5 && bmi < 25]: bmiMessages.status.IDEAL_WEIGHT_MESSAGE,
  [bmi >= 25 && bmi < 30]: bmiMessages.status.OVERWEIGHT_MESSAGE,
  [bmi >= 30 && bmi < 35]: bmiMessages.status.OBESITY_MESSAGE,
  [bmi >= 35 && bmi < 40]: bmiMessages.status.SEVERE_OBESITY_MESSAGE,
  [bmi >= 40]: bmiMessages.status.MORBID_OBESITY_MESSAGE
})[true]

const bmiForm = document.querySelector('[data-test="bmi-form"]')
const weight = document.querySelector('[data-test="bmi-weight"]')
const height = document.querySelector('[data-test="bmi-height"]')
const bmiResult = document.querySelector('[data-test="bmi-result"]')
const bmiStatus = document.querySelector('[data-test="bmi-result-status"]')
const back = document.querySelector('[data-test="bmi-result-button-back"]')

const toggle = () => {
    const container = document.querySelector('.container')
    container.classList.toggle('active')
}

bmiForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const calc = calculateBMI(weight.value, height.value)
    bmiResult.innerText = calc.toFixed(1)
    bmiStatus.innerText = bmiResults(calc)
    toggle()
    bmiForm.reset()
})

back.addEventListener('click', toggle)