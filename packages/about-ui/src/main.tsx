import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        className="bg-green-600 px-6 py-2 rounded text-white active:opacity-70 mt-4"
        onClick={() => setCounter(counter + 1)}
      >
        Press to add 1
      </button>
    </div>
  );
};

const CUSTOM_ELEMENT_TAG = "mfe-about-ui";

class ContainerUI extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    createRoot(this).render(<App />);
  }

  disconnectedCallback() {}
}

if (customElements.get(CUSTOM_ELEMENT_TAG) === undefined) {
  customElements.define(CUSTOM_ELEMENT_TAG, ContainerUI);
}
