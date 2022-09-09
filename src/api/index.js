import axios from './intercepter';

const basePath = '/api';

export const signUpApi = async (param) => await axios.post(`${basePath}/sign_up`, param);
export const signInApi = async (param) => await axios.post(`${basePath}/sign_in`, param);
export const signUpNotificationApi = async (param) => await axios.post(`${basePath}/sign_up_mail_validation`, param);
export const resetPasswordApi = async (param) => await axios.post(`${basePath}/reset_password`, param);
export const resetPasswordNotificationApi = async (param) =>
  await axios.post(`${basePath}/reset_password_mail_validation`, param);
