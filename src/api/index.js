import axios from 'axios';

const basePath = '/api';

export const signUpApi = async (param) => await axios.post(`${basePath}/signUp`, param);
export const signInApi = async (param) => await axios.post(`${basePath}/signIn`, param);
