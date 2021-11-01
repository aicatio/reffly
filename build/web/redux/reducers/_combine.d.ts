declare const allReducers: {
    shortened: (state: import("./shortened").ShortenedState | undefined, action: import("./shortened").ShortenedPayload) => any;
    cookie: (state: any, action: import("./cookie").ActionInterface) => any;
};
export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    shortened: any;
    cookie: any;
}>, import("./shortened").ShortenedPayload>;
export default allReducers;
