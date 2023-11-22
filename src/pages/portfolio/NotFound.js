import { useRouteError } from "react-router-dom";
import imageNotFound from "../../images/404.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="notfoundtitle">Where are you heading to?</h1>
      <img src={imageNotFound} className="notfoundimg"></img>
      <p className="notfoundtext">Sorry, but this path leads to nowhere.</p>
      <p className="notfoundtext">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
