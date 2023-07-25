const { error } = require('./utils')

const bmi = (height, weight) => {
    if(typeof height !== 'number' && typeof weight !== 'number') {
        throw new Error(error.VALUE_ERROR_MESSAGE)
    }
}

module.exports = bmi