// const daysOfWeekObject = {
//   'Monday': 'Segunda-feira',
//   'Tuesday': 'Terça-feira',
//   'Wednesday': 'Quarta-feira',
//   'Thursday': 'Quinta-feira',
//   'Friday': 'Sexta-feira',
//   'Saturday': 'Sábado',
//   'Sunday': 'Domingo'
// };

// const englishDay = 'Wednesday';
// const portugueseDay = daysOfWeekObject[englishDay];

const daysOfWeekMap = new Map([
	['Monday', 'Segunda-feira'],
	['Tuesday', 'Terça-feira'],
	['Wednesday', 'Quarta-feira'],
	['Thursday', 'Quinta-feira'],
	['Friday', 'Sexta-feira'],
	['Saturday', 'Sábado'],
	['Sunday', 'Domingo'],
])

const englishDay = 'Wednesday'
const portugueseDay = daysOfWeekMap.get(englishDay)
