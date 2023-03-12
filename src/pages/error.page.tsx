import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100vh'
    }}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
