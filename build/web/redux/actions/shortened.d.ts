declare type ReaquestCallback = (status: boolean, message: string) => void | boolean;
export declare const createShortenedUrl: (origUrl: string, callbac: ReaquestCallback) => (dispatch: any) => void;
export {};
