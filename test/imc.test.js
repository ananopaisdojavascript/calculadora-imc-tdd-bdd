const bmi = require('../src/js/imc')
const { constants, bmiMessages } = require('../src/js/utils')

describe('calculate the BMI', () => {
    it('should return a function', () => {
        expect(bmi).toBeInstanceOf(Function)
    })

    it('should return an error message if the function does not receive any arguments', () => {
        try {
            bmi()
        } catch ({ message }) {
            expect(message).toEqual(constants.error.VALUE_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives one argument only', () => {
        const weight = 80
        try {
            bmi(weight)
        } catch ({ message }) {
            expect(message).toEqual(constants.error.VALUE_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives values different from numbers', () => {
        const weight = '80'
        const height = '1.90'
        try {
            bmi(height, weight)
        } catch ({ message }) {
            expect(message).toEqual(constants.error.VALUE_ERROR_MESSAGE)
        }
    })

    it(`should return the message "${bmiMessages.status.UNDERWEIGHT_MESSAGE}"`, () => {
        const weight = 40
        const height = 1.65
        const result = bmiMessages.status.UNDERWEIGHT_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })

    it(`should return the message "${bmiMessages.status.IDEAL_WEIGHT_MESSAGE}"`, () => {
        const weight = 60
        const height = 1.60
        const result = bmiMessages.status.IDEAL_WEIGHT_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })

    it(`should return the message "${bmiMessages.status.OVERWEIGHT_MESSAGE}"`, () => {
        const weight = 90
        const height = 1.80
        const result = bmiMessages.status.OVERWEIGHT_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })

    it(`should return the message "${bmiMessages.status.OBESITY_MESSAGE}"`, () => {
        const weight = 100
        const height = 1.80
        const result = bmiMessages.status.OBESITY_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })

    it(`should return the message "${bmiMessages.status.SEVERE_OBESITY_MESSAGE}"`, () => {
        const weight = 70
        const height = 1.40
        const result = bmiMessages.status.SEVERE_OBESITY_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })

    it(`should return the message "${bmiMessages.status.MORBID_OBESITY_MESSAGE}"`, () => {
        const weight = 100
        const height = 1.40
        const result = bmiMessages.status.MORBID_OBESITY_MESSAGE
        const op = bmi(weight, height)
        expect(op).toEqual(result)
    })
})