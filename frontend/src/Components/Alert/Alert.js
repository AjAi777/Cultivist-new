import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      <div className="pt-4">
        <div className="mt-5">
          {props.alert && (
            <div
              className={`alert alert-${props.alert.type} alert-dismissible fade show`}
              role="alert"
              style={{ height: "50px", marginBottom: "0px" }}
            >
              <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Alert;