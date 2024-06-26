export interface WrappedProps {}

// prettier-ignore
// eslint-disable-next-line react/display-name
export const WithInterceptorComponent = <P extends WrappedProps>(WrappedComponent: React.ComponentType<P>) => (props: P) => {
  return <WrappedComponent {...props}/>;
};
