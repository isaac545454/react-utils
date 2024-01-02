type CurrencyFormatterParams = {
	Locale: 'en-US' | 'pt-BR'
	Currency: 'BRL' | 'USD' | 'EUR'
}

const currencyFormatter = ({ Currency, Locale }: CurrencyFormatterParams) => {
	return (value: number): string => {
		return new Intl.NumberFormat(Locale, {
			style: 'currency',
			currency: Currency,
		}).format(value)
	}
}

export const currencyFormatters = {
	Real: currencyFormatter({ Currency: 'BRL', Locale: 'pt-BR' }),
	Dollar: currencyFormatter({ Currency: 'USD', Locale: 'en-US' }),
	Euro: currencyFormatter({ Currency: 'EUR', Locale: 'en-US' }),
}

console.log({
	Real: currencyFormatters.Real(1100),
	Dollar: currencyFormatters.Dollar(1100),
	Euro: currencyFormatters.Euro(1100),
})

// {
//   Real: 'R$ 1.100,00',
//   Dollar: '$1,100.00',
//   Euro: '€1,100.00'
// }
