import React, { useEffect, useState } from 'react';
import './FloatingAlert.css';


export interface IfloatingAlert {
  type: number,
  title: string,
  action: boolean
}

export type HandleActionFunction = (type: number, title: string, action: boolean) => void;

const FloatingAlert: React.FC<IfloatingAlert> = ({ type, title, action }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
      if (action) {
          setShow(true);
          setTimeout(() => setShow(false), 5000); 
      }
  }, [action]);

  const alertTypeStyles = {
      backgroundColor: type === 1 ? 'green' : type === 2 ? 'blue' : type === 3 ? 'orange' : 'red',
  };

  return show  ? (
      <div className="floating-alert">
          <div  style={alertTypeStyles } className="alert-box">
              <div className="title-box">
                  <span className="title">{title}</span>
              </div>
          </div>
      </div>
  ) : null
};

export default FloatingAlert;