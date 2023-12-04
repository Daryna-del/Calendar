import Api from "./api";
import { AxiosError } from "axios";
import { MyErrorResponse, handleErrorsPostAuth } from "./handleErrors";
import { LOCALHOST_URL } from "./urls";

const createTask = async (data: any) => {
    return await Api.post(LOCALHOST_URL, `add`, data).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

const getTask = async (id: string) => {
    return await Api.get(LOCALHOST_URL, `get`, { _id: { id } }).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

const getAllTasks = async () => {
    return await Api.get(LOCALHOST_URL, ``).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

const updateTask = async (data: any) => {
    return await Api.patch(LOCALHOST_URL, `update`, data).catch((error: AxiosError<MyErrorResponse>) => handleErrorsPostAuth(error));
};

export default {
    createTask,
    getTask,
    getAllTasks,
    updateTask
};