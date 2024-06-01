export interface ApiDataResponse<T> {
    data?: T;
    message: string;
    errors: ApiErrorDto[];
}

export interface ApiErrorDto {
    message: string;
}
