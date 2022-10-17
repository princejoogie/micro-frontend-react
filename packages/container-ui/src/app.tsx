import React, { useEffect, createElement } from "react";

export type Hosts = {
  [customElementName: `mfe-${string}`]: string;
};

export type AppProps = {
  hosts?: Hosts;
  children?: Hosts;
};

const App = () => {
  const defaultHosts: Hosts = {
    "mfe-about-ui": import.meta.env.VITE_ABOUT_HOST,
  };

  useEffect(() => {
    Object.entries(defaultHosts).forEach(([customElementName, host]) => {
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
  }, []);

  const injectedChildren = Object.keys(defaultHosts).map((customElementName) =>
    createElement(customElementName, { key: customElementName })
  );

  console.log({ injectedChildren });

  return (
    <div>
      <nav>Container UI</nav>
      <React.Fragment>{injectedChildren}</React.Fragment>
    </div>
  );
};

export default App;
