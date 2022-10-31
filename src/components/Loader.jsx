import { Spinner } from "@blueprintjs/core";
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <Spinner size={50} />
      </div>
      <div className="flex">
        <span className="text-center">
          Current Heroku hosting may take a few minutes to spin up.
        </span>
      </div>
    </>
  );
};

export default Loader;
