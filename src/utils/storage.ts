const storagePrefix = 'bulletproof_react_clone_';
const dbName = 'msw-db';

export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getDb: () => {
    return Object.assign(JSON.parse(window.localStorage.getItem(dbName) || '{}'))
  },
  // TODO: Better type for the argument?
  setDb: (data: any) => {
    window.localStorage.setItem(dbName, JSON.stringify(data));
  }
};
