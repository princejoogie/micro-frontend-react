import React, { useEffect, createElement } from "react";
import { createBrowserHistory } from "history";

export type Hosts = {
  [customElementName: `mfe-${string}`]: string;
};

export type AppProps = {
  hosts?: Hosts;
  children?: Hosts;
};

window.mfeHistory = createBrowserHistory();

const App = ({ hosts, children }: AppProps) => {
  const defaultHosts: Hosts = {
    "mfe-about-ui": import.meta.env.VITE_ABOUT_HOST,
  };

  const mergedHosts = { ...defaultHosts, ...hosts };
  const hasChildren = Object.keys(children ?? {}).length !== 0;
  const appHosts = hasChildren ? children ?? {} : mergedHosts;

  useEffect(() => {
    Object.entries(appHosts).forEach(([customElementName, host]) => {
      const scriptId = `microfrontend-script-${customElementName}`;

      if (document.getElementById(scriptId)) {
        // Don't append the script if it already exists in the document head
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = host;
      document.head.appendChild(script);
    });
  }, [appHosts]);

  const injectedChildren = Object.keys(appHosts).map((customElementName) =>
    createElement(customElementName, { key: customElementName })
  );

  return (
    <div>
      <nav className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="font-semibold">Container UI</h1>

          <div className="flex items-center space-x-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-4">
        <React.Fragment>{injectedChildren}</React.Fragment>
      </div>
    </div>
  );
};

export default App;
