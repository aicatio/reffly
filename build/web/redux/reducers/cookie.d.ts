export interface CookieState {
    [key: string]: any;
}
export declare const cookieReducer: (state: any, action: {
    type: string;
    payload: [string, any];
}) => any;
