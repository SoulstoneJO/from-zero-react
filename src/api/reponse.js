export const ApiCode = {
  SUCCESS_CODE: '000',
  PARAMETER_ERROR: '001',
  AUTH_ERROR: '002',
  REDIS_CODE_NOT_EXIST: '003',
  VERIFICATION_CODE_NOT_EQUAL: '003',
  USER_EXIST: '100',
  NOEXCEPT_ERROR: '999',
};

export const ApiMessage = {
  '000': '',
  '001': 'PARAMETER_ERROR',
  '002': 'AUTH_ERROR',
  '003': 'REDIS_CODE_NOT_EXIST',
  '004': 'VERIFICATION CODE is notc correct!',
  100: 'User is already existed, please login.',
  999: 'NETWOEK ERROR',
};
