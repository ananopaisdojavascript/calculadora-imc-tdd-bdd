import { constants, bmiMessages } from "./utils"

export const calculateBMI = (weight, height) => {
    if (typeof height !== 'number' || typeof weight !== 'number')
        throw new Error(constants.error.PARAMETER_ERROR_MESSAGE)
    if (height < 0 && weight < 0)
        throw new Error(constants.error.VALUE_ERROR_MESSAGE)
    return weight / (height * height)
}

export const bmiResults = (bmi) => ({
    [bmi < 18.5]: bmiMessages.status.UNDERWEIGHT_MESSAGE,
    [bmi >= 18.5 && bmi < 25]: bmiMessages.status.IDEAL_WEIGHT_MESSAGE,
    [bmi >= 25 && bmi < 30]: bmiMessages.status.OVERWEIGHT_MESSAGE,
    [bmi >= 30 && bmi < 35]: bmiMessages.status.OBESITY_MESSAGE,
    [bmi >= 35 && bmi < 40]: bmiMessages.status.SEVERE_OBESITY_MESSAGE,
    [bmi >= 40]: bmiMessages.status.MORBID_OBESITY_MESSAGE
})[true]