import { createRoot } from "react-dom/client";
import "./index.css";

export type Hosts = {
  [customElementName: `mfe-${string}`]: string;
};

export type AppProps = {
  children?: Hosts;
};

const App = ({ children }: AppProps) => {
  console.log({ children });
  return <div>Hello World</div>;
};

const CUSTOM_ELEMENT_TAG = "mfe-container-ui";

class ContainerUI extends HTMLElement {
  constructor() {
    super();
  }

  getChildren(): Hosts {
    return JSON.parse(this.getAttribute("children") || "{}");
  }

  connectedCallback() {
    createRoot(this).render(<App children={this.getChildren()} />);
  }

  disconnectedCallback() {}
}

if (customElements.get(CUSTOM_ELEMENT_TAG) === undefined) {
  customElements.define(CUSTOM_ELEMENT_TAG, ContainerUI);
}
