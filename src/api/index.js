import axios from './intercepter';

const basePath = '/api';

export const signUpApi = async (param) => await axios.post(`${basePath}/signUp`, param);
export const signInApi = async (param) => await axios.post(`${basePath}/signIn`, param);
export const sendNotificationApi = async (param) => await axios.post(`${basePath}/send_mail_validation`, param);
