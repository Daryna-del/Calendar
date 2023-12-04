import Api from "./api";
import { AxiosError } from "axios";
import { MyErrorResponse, handleErrorsPostAuth } from "./handleErrors";
import { URL_NAGER_DATE } from "./urls";

// Returns the version of the used Nager.Date library.
const getVersion = async () => {
    return await Api.get(URL_NAGER_DATE, "Version").catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

export default {
    getVersion
};