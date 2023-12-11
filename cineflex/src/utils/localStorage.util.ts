export const localStorageHelper = {
    get: (key: string) => {
        const data = localStorage.getItem(key);
        return data;
    },
    set: (key: string, data: boolean | string | object | object[]) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    remove: (key: string) => {
        localStorage.removeItem(key);
    },
    clear: () => {
        localStorage.clear();
    },
};
