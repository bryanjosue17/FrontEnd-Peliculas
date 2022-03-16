import React from "react";
import TextField from "./TextField";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField texto="Pantalla de inicio" variante="h4"></TextField>

    </div>
  );
};

export default Home;
