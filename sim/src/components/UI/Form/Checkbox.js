import React from 'react';

export const Checkbox = props => (
   <div>
    <input
    className="checkbox"
    type="checkbox"
    name={props.name}
    {...props}
  />
  <label htmlFor={props.name}>{props.children}</label>
  </div>
);
export default Checkbox;
