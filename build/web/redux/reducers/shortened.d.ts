export interface ShortenedState {
    shortUrl: string | undefined;
    origUrl: string | undefined;
}
export interface ShortenedPayload {
    type: string;
    payload: string[] | any;
}
export declare const shortenedReducer: (state: ShortenedState | undefined, action: ShortenedPayload) => any;
