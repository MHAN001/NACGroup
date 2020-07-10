import {fetchApi, fetchApiTextRes} from "./WebService";

export async function getHelloWorld(): Promise<string> {
    return await fetchApiTextRes("http://localhost:8080/hello/world")
        .then(res => res as string);
}