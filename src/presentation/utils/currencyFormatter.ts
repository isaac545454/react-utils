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
	return new Intl.NumberFormat(Locale, {
		style: 'currency',
		currency: Currency,
	})
}

const useCurrencyFormatter = () => {
	return {
		Real: currencyFormatter({ Currency: Currency.BRL, Locale: Locale.PT_BR }),
		Dollar: currencyFormatter({ Currency: Currency.USD, Locale: Locale.EN_US }),
		Euro: currencyFormatter({ Currency: Currency.EUR, Locale: Locale.EN_US }),
	}
}

const { Real, Dollar, Euro } = useCurrencyFormatter()

console.log(Real.format(1100))
//"R$ 1.100,00"
console.log(Dollar.format(1100))
//"$1,100.00"
console.log(Euro.format(1100))
//"€1,100.00"
