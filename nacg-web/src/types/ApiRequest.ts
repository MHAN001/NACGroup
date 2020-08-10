export interface ApiRequest {
    method?: string;
    body?: any | null;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
}