const env = (environment: string):string => {
  switch (environment) {
  case 'prod':
  case 'production':
    return 'production';

  case 'testing':
  case 'test':
  case 'testbed':
    return 'test';

  case 'local':
  case 'dev':
  case 'develop':
  case 'development':
  default:
    return 'development';
  }
};

export default env;
