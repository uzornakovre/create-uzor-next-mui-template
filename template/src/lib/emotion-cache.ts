import createCache from "@emotion/cache";

const emotionCache = createCache({ key: "mui", prepend: true });

export default emotionCache;
