export interface CookieState {
    [key: string]: any;
}
export interface ActionInterface {
    type: string;
    payload: string | any;
}
export declare const cookieReducer: (state: any, action: ActionInterface) => any;
