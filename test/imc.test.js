const bmi = require('../src/js/imc')
const { error } = require('../src/js/utils')

describe('calculate the BMI', () => {
    it('should return a function', () => {
        expect(bmi).toBeInstanceOf(Function)
    })

    it('should return an error message if the function does not receive any arguments', () => {
        try {
            bmi()
        } catch ({ message }) {
            expect(message).toEqual(error.VALUE_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives one argument only', () => {
        const weight = 80
        try {
            bmi(weight)
        } catch ({ message }) {
            expect(message).toEqual(error.VALUE_ERROR_MESSAGE)
        }
    })

    it('should return an error message if the function receives values different from numbers', () => {
        const weight = '80'
        const height = '1.90'
        try {
            bmi(height, weight)
        } catch ({ message }) {
            expect(message).toEqual(error.VALUE_ERROR_MESSAGE)
        }
    })
})