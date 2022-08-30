const LocalStorageKey = 'token';

export const loadUserToken = () => {
  const text = localStorage.getItem(LocalStorageKey);
  const token = text ? text : null;
  if (token) {
    return token;
  } else {
    return false;
  }
};

export const saveUserToken = (token) => {
  if (token) {
    localStorage.setItem(LocalStorageKey, token);
  } else {
    return false;
  }
};

export const clearUserToken = () => {
  localStorage.removeItem(LocalStorageKey);
};
