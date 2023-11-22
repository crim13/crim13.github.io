import { useRouteError } from "react-router-dom";
import imageNotFound from "./404.png";
import "./index.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="not-found-title">Where are you heading to?</h1>
      <img src={imageNotFound} className="not-found-img"></img>
      <p className="not-found-text">Sorry, but this path leads to nowhere.</p>
      <p className="not-found-text">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
