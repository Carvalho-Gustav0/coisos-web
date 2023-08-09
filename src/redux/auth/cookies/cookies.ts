import Cookies from 'js-cookie'

const TOKEN_COOKIE_KEY = 'userToken'

export function getAuthToken() {
  return Cookies.get(TOKEN_COOKIE_KEY)
}

export function setAuthToken(token: string) {
  Cookies.set(TOKEN_COOKIE_KEY, token, { expires: 1})
}

export function removeAuthToken() {
  Cookies.remove(TOKEN_COOKIE_KEY)
}
