import React from "react";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  let location = useLocation();
  return (
    <h2>
      {" "}
      There is nothing on <code>{location.pathname}</code>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2xvNZ-1Nswn5nq83iOI0gMRJRsBOxQFGI7Q&usqp=CAU" 
      alt="man looking lost"
      ></img>
      </div>
    </h2>
  );
}

export default ErrorPage;
