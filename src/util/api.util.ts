import axios, { AxiosInstance } from 'axios';

interface Header {
    key: string;
    value: string;
}

export class RequestUtil {
    client: AxiosInstance
    constructor() {
        this.client = axios.create();
        this._interceptor();
    }

    _interceptor() {
        this.client.interceptors.request.use(
            config => {
                config.headers.authorization = "{AQUI VAI O TOKEN}";
                return config;
            }, error => Promise.reject(error)
        );
    }

    setHeader(headers: Header[]): AxiosInstance {
        headers.forEach(header => this.client.defaults.headers[header.key] = header.value);
        return this.client;
    }
}
