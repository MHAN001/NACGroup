import {ApiRequest} from "../types/ApiRequest";
import {ApiErrorResponse} from "../types/ApiErrorResponse";

export async function fetchApiTextRes(url: string,
                                      requestInfo: ApiRequest | null = {},
                                      errorMapper: ApiErrorResponse = getApiError
) : Promise<any> {
    try {
        const nonNullRequest  = requestInfo || {};
        const {body, ...inputInit} = nonNullRequest;
        const requestInit: RequestInit = {
            ...inputInit,
            ...(body && {body: JSON.stringify(body)}),
            headers: {
                ...inputInit.headers,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: "manual"
        };
        const response = await  fetch(url, requestInit);
        if (response.status === 204) return Promise.resolve();
        if (response.status === 403) return Promise.reject("User doesnt has correct permission");
        const text = await response.text();
        return response.ok ? Promise.resolve(text) : Promise.reject(errorMapper(response.status, text));
    } catch (e) {
        return Promise.reject(`An error occurred when send API request: ${e}`);
    }
}

export async function fetchApi(url: string,
                               requestInfo: ApiRequest | null = {},
                               errorMapper: ApiErrorResponse = getApiError
                               ) : Promise<any> {
    try {
        const nonNullRequest  = requestInfo || {};
        const {body, ...inputInit} = nonNullRequest;
        const requestInit: RequestInit = {
            ...inputInit,
            ...(body && {body: JSON.stringify(body)}),
            headers: {
                ...inputInit.headers,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            redirect: "manual"
        };
        const response = await  fetch(url, requestInit);
        if (response.status === 204) return Promise.resolve();
        if (response.status === 403) return Promise.reject("User doesnt has correct permission");
        const json = await response.json();
        return response.ok ? Promise.resolve(json) : Promise.reject(errorMapper(response.status, json));
    } catch (e) {
        return Promise.reject(`An error occurred when send API request: ${e}`);
    }
}

function getApiError(_status: number, json: any): string {
    if (json && json.responseStatus && json.responseStatus.message) {
        return json.responseStatus.message;
    } else if (_status === 400 && json && json.message) {
        return json.message;
    }
    if (json && json.ResponseStatus && json.ResponseStatus.Message) {
        return json.ResponseStatus.ResponseStatus.Message;
    } else if (_status === 400 && json && json.Message) {
        return json.Message;
    }
    return "Unknown error";
}