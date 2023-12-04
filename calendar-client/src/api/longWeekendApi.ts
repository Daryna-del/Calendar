import Api from "./api";
import { AxiosError } from "axios";
import { MyErrorResponse, handleErrorsPostAuth } from "./handleErrors";
import { URL_NAGER_DATE } from "./urls";

// Returns long weekends in the given year for a given country.
const getLongWeekend = async (year: number, countryCode: string) => {
    return await Api.get(URL_NAGER_DATE, `LongWeekend/${year}/${countryCode}`).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

export default {
    getLongWeekend
};