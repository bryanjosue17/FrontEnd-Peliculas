import * as React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <div style={{ margin: "3%" }}>
      <TextField
        type={props.type}
        style={{ width: "100%" }}
        inputProps = {{maxLength:4}}
        id={props.id}
        label={props.texto}
        variant={props.variante}
        value={props.value}
        onChange={(event) =>
          props.onChange({
            target: { value: event.target.value, name: props.name },
          })
        }
      />
    </div>
  );
};

export default InputField;
