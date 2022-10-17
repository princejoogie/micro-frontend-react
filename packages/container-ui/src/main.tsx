import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return <div>Hello World</div>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
