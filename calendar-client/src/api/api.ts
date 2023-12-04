import axios from "axios";

interface HttpResponse {
    headers: any;
    data: any;
}

const get = async (
    base_url: string,
    url: string,
    data?: any,
    paramsSerializer?: any
): Promise<HttpResponse> => {
    const response = await axios.get(base_url + url, {
        params: data,
        paramsSerializer: paramsSerializer,
    });
    return response;
};

const post = async (
    base_url: string,
    url: string,
    data?: any
) => {
    const response = await axios.post(base_url + url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return response;
};

const put = async (
    base_url: string,
    url: string,
    data?: any
): Promise<HttpResponse> => {
    const response = await axios.put(base_url + url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return response;
};

const patch = async (
    base_url: string,
    url: string,
    data?: any
): Promise<HttpResponse> => {
    const response = await axios.patch(base_url + url, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    return response;
};

const remove = async (
    base_url: string,
    url: string,
    data?: any,
    options: any = {}
): Promise<HttpResponse> => {
    const response = await axios.delete(base_url + url, {
        ...options,
        params: data,
    });
    return response;
};
export default { get, post, put, patch, remove };