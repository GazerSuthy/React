import React, { useEffect } from 'react'

const Alert = ({message,alert_color}) => {
  return(
    <div className="alert-message">
        <h4 style={{color:`${alert_color}`}}>{message}</h4>
    </div>
  );
}

export default Alert
