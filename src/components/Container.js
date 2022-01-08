import React from "react";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div>
      <div className="container">
        <Header />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Container;
