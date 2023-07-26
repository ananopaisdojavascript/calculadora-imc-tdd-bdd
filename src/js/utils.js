const constants = {
	error: {
		VALUE_ERROR_MESSAGE: 'This function should receive two values as arguments'
	}
} 

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

module.exports = { constants, bmiMessages }