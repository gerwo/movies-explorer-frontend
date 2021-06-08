import fetchFullApi from './fetchFullApi';

export const BASE_URL = 'https://movie.nomoredomains.monster';

export const headers = {
  'Content-Type': 'application/json',
};

export const register = ({ name, email, password }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'signup',
  method: 'POST',
  body: { name, email, password },
});

export const login = ({ email, password }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'signin',
  method: 'POST',
  body: { email, password },
});

export const logout = () => fetchFullApi({
  BASE_URL,
  method: 'DELETE',
  headers,
  path: 'signout',
});

export const updateProfile = ({ name, email }) => fetchFullApi({
  BASE_URL,
  headers,
  path: 'users/me',
  method: 'PATCH',
  body: { name, email },
});

export const getUserData = () => fetchFullApi({
  BASE_URL,
  headers,
  path: 'users/me',
});
