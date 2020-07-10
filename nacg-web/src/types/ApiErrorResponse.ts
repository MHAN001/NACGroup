export interface ApiErrorResponse {
    (status: number, error: any): string;
}