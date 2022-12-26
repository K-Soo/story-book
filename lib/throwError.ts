interface IError {
  message?: string;
  status?: number;
}

const HTTP_STATUS_MESSAGES: { [index: number]: string } = {
  400: 'Bad Requests',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'duplicate',
  419: 'Authentication Timeout',
  423: 'Locked',
  500: 'Internal Server Error',
  503: 'Temporary Unavailable',
} as const;

export const throwError = ({ message, status = 500 }: IError) => {
  console.log('status: ', status);
  console.log('message: ', message);
  const error: IError = new Error(message ?? HTTP_STATUS_MESSAGES[status]);
  error.status = status;
  throw error;
};
