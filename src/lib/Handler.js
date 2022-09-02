export const tokenKey = 'token';
export const timerKey = 'timer';

export const loadStorageItem = (key) => {
  const text = localStorage.getItem(key);
  const token = text ? text : null;
  if (token) {
    return token;
  } else {
    return false;
  }
};

export const saveStorageItem = (key, token) => {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    return false;
  }
};

export const clearStorageItem = (key) => {
  localStorage.removeItem(key);
};
