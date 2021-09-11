const baseUrl = 'http://localhost:3000/api';

type Methods = 'GET' | 'POST';

const fetchData = async <T>(
    method: Methods,
    url: string,
    data?: T
): Promise<T> => {
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

    const response = await fetch(dataUrl, options);
    const body = await response.json();
    return body;
};

const get = (url: string) => fetchData('GET', url);
const post = <T>(url: string, data: T) => fetchData('POST', url, data);

const api = {
    get,
    post,
};

export default api;
