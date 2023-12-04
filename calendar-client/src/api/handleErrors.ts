import { AxiosError } from "axios";

export type MyErrorResponse = {
    errors: { detail: string }[]
}


export const handleErrorsPostAuth = (error: AxiosError<MyErrorResponse>) => {
    if (error?.response) {
        // Object is of type 'unknown' for the line below.
        if (error.response.data.errors[0]) {
            // Object is of type 'unknown' for the line below.
            throw new Error(error.response.data.errors[0].detail);
        }
        throw new Error(error.response.toString());
    }
    throw new Error(error.message);
};