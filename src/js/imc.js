const { constants, bmiMessages } = require('./utils')

const bmi = (weight, height) => {
	if(typeof height !== 'number' && typeof weight !== 'number') throw new Error(constants.error.VALUE_ERROR_MESSAGE)
 	const calculateBmi = weight / (height * height)
    const check = {
        [calculateBmi < 18.5]: bmiMessages.status.UNDERWEIGHT_MESSAGE,
        [calculateBmi >= 18.5 && calculateBmi < 25]: bmiMessages.status.IDEAL_WEIGHT_MESSAGE,
        [calculateBmi >= 25 && calculateBmi < 30]: bmiMessages.status.OVERWEIGHT_MESSAGE,
        [calculateBmi >= 30 && calculateBmi < 35]: bmiMessages.status.OBESITY_MESSAGE,
        [calculateBmi >= 35 && calculateBmi < 40]: bmiMessages.status.SEVERE_OBESITY_MESSAGE,
        [calculateBmi >= 40]: bmiMessages.status.MORBID_OBESITY_MESSAGE
    }[true]
    return check
}

module.exports = bmi