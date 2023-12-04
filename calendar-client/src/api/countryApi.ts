import Api from "./api";
import { AxiosError } from "axios";
import { MyErrorResponse, handleErrorsPostAuth } from "./handleErrors";
import { URL_NAGER_DATE } from "./urls";

// Returns country info for the given country.
const getCountry = async (countryCode: string) => {
    return await Api.get(URL_NAGER_DATE, `CountryInfo/${countryCode}`).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

// Returns all available countries.
const getAllAvailableCountries = async () => {
    return await Api.get(URL_NAGER_DATE, "AvailableCountries").catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

export default {
    getCountry,
    getAllAvailableCountries
};