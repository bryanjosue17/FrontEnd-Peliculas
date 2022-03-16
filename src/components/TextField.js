import React from "react";
import Typography from "@mui/material/Typography";

const TextField = (props) => {
  return (
    <div style={{ margin: "3%" }}>
      <Typography variant={props.variante}>{props.texto}</Typography>
    </div>
  );
};

export default TextField;
