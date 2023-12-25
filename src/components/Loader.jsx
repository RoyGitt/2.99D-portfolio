import React from "react";

import { Html, useProgress } from "@react-three/drei";
import RotateLoader from "react-spinners/RotateLoader";

const CanvasLoader = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    marginTop: "30px",
    borderColor: "red",
  };
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 20,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {`${progress.toFixed(2)}%`}
        <RotateLoader
          color="#fff"
          loading={true}
          size={16}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    </Html>
  );
};

export default CanvasLoader;
