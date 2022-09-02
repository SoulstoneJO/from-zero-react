const message = {
  send_notification_success: 'Send code success, please check your mail',
  send_notification_fail: 'Send code failde, please wait for a minute to try it again.',
  first_name_not_null: 'Please input first name.',
  last_name_not_null: 'Please input last name.',
  password_not_null: 'Please input password.',
  code_not_null: 'Please input validate code.',
  mail_not_null: 'Please input mail.',
  mail_check: 'Mail address format is not correct!',
  mail_error: 'Mail address is not correct!',
  max_20: 'too long!',
  max_07: 'verification code is too long!',
  password_check:
    'A password contains at least eight characters, including at least one number and includes both lower and uppercase letters.',
};

export const queryMessage = (rule) => message[rule];
