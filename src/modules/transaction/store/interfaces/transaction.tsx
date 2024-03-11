import { CurrencyInfo } from "./currency_info";

export interface ITransaction {
    selectedFromCountry: string,
    listOfCountries: string[],
    selectedToCountry: string,
    selectedCurrency: string,
    listOfCurrencies: string[],
    totalAmount: number,
    amount: number,
    email: string,
    number: string,
    currencyInfo: CurrencyInfo,
    isFromCountryOpen: boolean,
    isToCountryOpen: boolean,
    isCurrencyOpen: boolean,
    isCountryOpen: boolean,
    id: string,
    phoneCode: string,
}