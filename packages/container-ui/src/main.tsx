import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import App, { Hosts } from "./app";
import "./index.css";

const CUSTOM_ELEMENT_TAG = "mfe-container-ui";

window.mfeHistory = createBrowserHistory();

class ContainerUI extends HTMLElement {
  constructor() {
    super();
  }

  getChildren(): Hosts {
    return JSON.parse(this.getAttribute("children") || "{}");
  }

  getHosts(): Hosts {
    return JSON.parse(this.getAttribute("hosts") || "{}");
  }

  connectedCallback() {
    createRoot(this).render(<App key={CUSTOM_ELEMENT_TAG} />);
  }

  disconnectedCallback() {}
}

if (customElements.get(CUSTOM_ELEMENT_TAG) === undefined) {
  customElements.define(CUSTOM_ELEMENT_TAG, ContainerUI);
}
