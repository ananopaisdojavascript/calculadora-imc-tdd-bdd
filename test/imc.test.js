import { calculateBMI, bmiResults } from '../src/js/imc'
import { constants, bmiMessages } from '../src/js/utils'

describe('calculate the BMI', () => {
    it('should return a function', () => {
        expect(calculateBMI).toBeInstanceOf(Function)
    })

    it('should return an error message if the function does not receive any argument', () => {
        try {
            calculateBMI()
        } catch ({ message }) {
            expect(message).toEqual(constants.error.PARAMETER_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives on argument only', () => {
        try {
            const weight = 80
            calculateBMI(weight)
        } catch ({ message }) {
            expect(message).toEqual(constants.error.PARAMETER_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives values different from numbers', () => {
        try {
            const weight = 'jk;jkljkljk'
            const height = 'jk;jkljlkjkl'
            calculateBMI(weight, height)
        } catch ({ message }) {
            expect(message).toEqual(constants.error.PARAMETER_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives negative numbers', () => {
        try {
            const weight = -80
            const height = -1.80
            calculateBMI(weight, height)
        } catch ({ message }) {
            expect(message).toEqual(constants.error.VALUE_ERROR_MESSAGE)
        }
    })

    it(`should return the message "${bmiMessages.status.UNDERWEIGHT_MESSAGE}"`, () => {
        const weight = 40
        const height = 1.65
        const result = bmiMessages.status.UNDERWEIGHT_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
    
    it(`should return the message "${bmiMessages.status.IDEAL_WEIGHT_MESSAGE}"`, () => {
        const weight = 60
        const height = 1.60
        const result = bmiMessages.status.IDEAL_WEIGHT_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
    
    it(`should return the message "${bmiMessages.status.OVERWEIGHT_MESSAGE}"`, () => {
        const weight = 90
        const height = 1.80
        const result = bmiMessages.status.OVERWEIGHT_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
    
    it(`should return the message "${bmiMessages.status.OBESITY_MESSAGE}"`, () => {
        const weight = 100
        const height = 1.80
        const result = bmiMessages.status.OBESITY_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
    
    it(`should return the message "${bmiMessages.status.SEVERE_OBESITY_MESSAGE}"`, () => {
        const weight = 70
        const height = 1.40
        const result = bmiMessages.status.SEVERE_OBESITY_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
    
    it(`should return the message "${bmiMessages.status.MORBID_OBESITY_MESSAGE}"`, () => {
        const weight = 100
        const height = 1.40
        const result = bmiMessages.status.MORBID_OBESITY_MESSAGE
        const bmi = calculateBMI(weight, height)
        const op = bmiResults(bmi)
        expect(op).toEqual(result)
    })
})