enum Currency {
	BRL = 'BRL',
	USD = 'USD',
	EUR = 'EUR',
}

enum Locale {
	EN_US = 'en-US',
	PT_BR = 'pt-BR',
}

type CurrencyFormatterParams = {
	Locale: Locale
	Currency: Currency
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
	Real: currencyFormatter({ Currency: Currency.BRL, Locale: Locale.PT_BR }),
	Dollar: currencyFormatter({ Currency: Currency.USD, Locale: Locale.EN_US }),
	Euro: currencyFormatter({ Currency: Currency.EUR, Locale: Locale.EN_US }),
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
