import Cookies from 'js-cookie';

const AUTH_TOKEN_COOKIE = 'authToken';

export function getAuthToken() {
  return Cookies.get(AUTH_TOKEN_COOKIE);
}

export function setAuthToken(token: string) {
  Cookies.set(AUTH_TOKEN_COOKIE, token, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    httpOnly: true,
  });
}

export function removeAuthToken() {
  Cookies.remove(AUTH_TOKEN_COOKIE);
}
