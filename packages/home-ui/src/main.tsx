import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div>
      <h2>Hello World from home-ui</h2>
    </div>
  );
};

const CUSTOM_ELEMENT_TAG = "mfe-home-ui";

class HomeUI extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    createRoot(this).render(<App key={CUSTOM_ELEMENT_TAG} />);
  }

  disconnectedCallback() {}
}

if (customElements.get(CUSTOM_ELEMENT_TAG) === undefined) {
  customElements.define(CUSTOM_ELEMENT_TAG, HomeUI);
}
