import { ApiError } from 'src/sharedTypes';

const baseUrl =
    process.env.NODE_ENV === 'production'
        ? '/api'
        : 'http://localhost:3000/api';

type Methods = 'GET' | 'POST' | 'DELETE';

const TIMEOUT = 10000; // 10 seconds
function isAbortError(error: any): error is DOMException {
    if (error && error.name === 'AbortError') {
        return true;
    }
    return false;
}

const fetchData = async <T>(
    method: Methods,
    url: string,
    data?: T
): Promise<T | ApiError> => {
    const dataUrl = baseUrl + url;
    const options: RequestInit = {
        method,
        credentials: 'include',
    };

    if (method === 'POST') {
        options.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
        };
        if (data) options.body = JSON.stringify(data);
    }
    try {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), TIMEOUT);

        const response = await fetch(dataUrl, {
            ...options,
            signal: controller.signal,
        });

        clearTimeout(id);
        const body = await response.json();
        return body;
    } catch (error: unknown) {
        let message = 'Unknown error';

        if (error instanceof TypeError) message = error.message;
        if (isAbortError(error)) message = 'Timeout';

        return Promise.resolve({
            statusCode: 500,
            message,
        });
    }
};

const get = (url: string) => fetchData('GET', url);
const post = <T>(url: string, data: T) => fetchData('POST', url, data);
const deleteOne = <T>(url: string) => fetchData('DELETE', url);

const api = {
    get,
    post,
    deleteOne,
};

export default api;
