import React from 'react';
import {useLocation} from 'react-router-dom'

function ErrorPage() {
  let location = useLocation();
  return <h2> There is nothing on <code>{location.pathname}</code></h2>
}

export default ErrorPage;