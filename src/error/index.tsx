import { ErrorBoundary } from 'react-error-boundary';
import { errorLog } from './errorLog';
import ErrorFallbackComponent from './ErrorFallbackComponent';
export * from 'react-error-boundary';

interface IError {
  children: React.ReactNode;
}

export default function error({ children }: IError) {
  return (
    <ErrorBoundary onError={errorLog} FallbackComponent={ErrorFallbackComponent}>
      {children}
    </ErrorBoundary>
  );
}
