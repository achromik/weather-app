export const makeQueryParams = data =>
    Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
