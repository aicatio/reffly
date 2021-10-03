declare const allReducers: {
    shortened: (state: import("./shortened").ShortenedState | undefined, action: import("./shortened").ShortenedPayload) => import("./shortened").ShortenedState;
    cookie: (state: any, action: {
        type: string;
        payload: [string, any];
    }) => any;
};
export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    shortened: import("./shortened").ShortenedState;
    cookie: any;
}>, import("./shortened").ShortenedPayload | {
    type: string;
    payload: [string, any];
}>;
export default allReducers;
