import React from "react";



function Image(props) {
  return (
    <div className="img-table" onClick={() => props.click(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Image;