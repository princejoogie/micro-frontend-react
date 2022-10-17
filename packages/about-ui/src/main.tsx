import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  return <div>Hello World from about-ui</div>;
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
