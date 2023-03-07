import config from '../config'

export const setToken = (token: string):void => {
  localStorage.setItem(config.TOKEN_KEY, token)
  localStorage.setItem(config.LOGIN_LIMIT_KEY, (new Date().getTime() + config.LOGIN_LIMIT_TIME).toString())
}

export const getToken: () => string = () => localStorage.getItem(config.TOKEN_KEY) || ''

export const removeToken = ():void => localStorage.removeItem(config.TOKEN_KEY)

export const isLogin: () => boolean = () => {
  const token = getToken()
  const limitTime = localStorage.getItem(config.LOGIN_LIMIT_KEY)
  if (token && limitTime && token !== '' && parseInt(limitTime) > new Date().getTime()) {
    return true
  }
  return false
}
