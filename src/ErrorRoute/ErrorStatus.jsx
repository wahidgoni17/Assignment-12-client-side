import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorStatus = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 className="text-5xl">404</h1>
      <p className="text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorStatus;
