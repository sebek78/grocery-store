import { ApiError } from '@sharedTypes';
import { resourceUsage } from 'process';

const baseUrl =
    process.env.NODE_ENV === 'production'
        ? '/api'
        : 'http://localhost:3000/api';

type Methods = 'GET' | 'POST';

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
        const response = await fetch(dataUrl, options);
        const body = await response.json();
        return body;
    } catch (error: unknown) {
        return Promise.resolve({
            statusCode: 500,
            message:
                error instanceof TypeError ? error.message : 'Unknown error',
        });
    }
};

const get = (url: string) => fetchData('GET', url);
const post = <T>(url: string, data: T) => fetchData('POST', url, data);

const api = {
    get,
    post,
};

export default api;
