import { queryMessage } from './message';

const checkParam = (rule, value) => {
  let regex = '';
  let result = true;
  switch (rule) {
    case 'first_name_not_null':
    case 'last_name_not_null':
    case 'password_not_null':
    case 'mail_not_null':
    case 'code_not_null':
      return value.length > 0;
    case 'max_07':
      return value.length <= 7;
    case 'max_20':
      return value.length <= 20;
    case 'mail_check':
      regex = /^\S+@\S+\.\S+$/;
      return regex.test(value);
    case 'password_check':
      // 最少八个字符，至少一个大写字母，一个小写字母和一个数字
      regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return regex.test(value);
    default:
      break;
  }
  return result;
};

export const validate = (validateArray) => {
  let result = {};

  validateArray.map(({ name, param, ruleArray }) => {
    const failRule = ruleArray.find((rule) => !checkParam(rule, param));

    return failRule
      ? (result[name] = { error: true, message: queryMessage(failRule) })
      : (result[name] = { error: false, message: '' });
  });

  return result;
};

export const singleValidate = (param, ruleArray) => {
  const failRule = ruleArray.find((rule) => !checkParam(rule, param));

  return failRule ? { error: true, message: queryMessage(failRule) } : { error: false, message: '' };
};

export const messageValidate = (param, ruleArray) => ruleArray.some((rule) => checkParam(rule, param));
