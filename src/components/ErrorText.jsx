import React from "react";

const ErrorText = ({ error }) => {
  return (
    <>
      {error ? (
        <span className="text-xs text-brandRed font-normal">{error}</span>
      ) : null}
    </>
  );
};

export default ErrorText;
