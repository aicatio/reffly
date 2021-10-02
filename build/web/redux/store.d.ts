declare const _default: import("redux").Store<import("redux").CombinedState<{
    shortened: import("./reducers/shortened").ShortenedState;
    cookie: any;
}>, import("./reducers/shortened").ShortenedPayload | {
    type: string;
    payload: [string, any];
}> & {
    dispatch: unknown;
};
export default _default;
