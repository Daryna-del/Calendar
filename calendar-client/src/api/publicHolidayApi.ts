import Api from "./api";
import { AxiosError } from "axios";
import { MyErrorResponse, handleErrorsPostAuth } from "./handleErrors";
import { URL_NAGER_DATE } from "./urls";

// Returns all public holidays in the given year for the given country.
const getPublicHolidays = async (year: number, countryCode: string) => {
    return await Api.get(URL_NAGER_DATE, `PublicHolidays/${year}/${countryCode}`).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

// Returns is today a public holiday.
const getIsTodayPublicHoliday = async (countryCode: string) => {
    return await Api.get(URL_NAGER_DATE, `IsTodayPublicHoliday/${countryCode}`).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

// Returns the upcoming public holidays for the next 365 days for the given country.
const getNextPublicHolidays = async (countryCode: string) => {
    return await Api.get(URL_NAGER_DATE, `NextPublicHolidays/${countryCode}`).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

// Returns the upcoming public holidays for the next 7 days.
const getNextPublicHolidaysWorldwide = async () => {
    return await Api.get(URL_NAGER_DATE, "NextPublicHolidaysWorldwide").catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

export default {
    getPublicHolidays,
    getIsTodayPublicHoliday,
    getNextPublicHolidays,
    getNextPublicHolidaysWorldwide
};