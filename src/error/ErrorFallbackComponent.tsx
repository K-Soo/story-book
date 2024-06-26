import styled from 'styled-components';

interface IErrorFallbackComponent {
  error: any;
}

export default function ErrorFallbackComponent({ error }: IErrorFallbackComponent) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@: ', error);
  if (error) {
    return <div>asdasd</div>;
  }
  return <S.ErrorFallbackComponent>ErrorFallbackComponent</S.ErrorFallbackComponent>;
}

const S = {
  ErrorFallbackComponent: styled.div``,
};

// import axios from "axios";
// import { ErrorPage } from "error/ErrorPage";

// const ERROR_TYPES = ["TypeError", "SyntaxError", "RangeError", "ReferenceError", "URIError"];

// export function errorFallback({ error }) {
//   if (axios.isAxiosError(error)) return <ErrorPage statusCode={error.response.status} />

//   if (ERROR_TYPES.includes(error.name)) return <ErrorPage />

//   return <ErrorPage errorText={error.message} />
// };
