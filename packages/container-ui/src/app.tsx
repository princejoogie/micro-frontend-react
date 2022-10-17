import { useEffect } from "react";

export type Hosts = {
  [customElementName: `mfe-${string}`]: string;
};

const defaultHosts: Hosts = {
  "mfe-about-ui": `${import.meta.env.VITE_APP_ABOUT_HOST}/main.js`,
  "mfe-home-ui": `${import.meta.env.VITE_APP_HOME_HOST}/main.js`,
};

const defaultStyles = [
  `${import.meta.env.VITE_APP_HOME_HOST}/main.css`,
  `${import.meta.env.VITE_APP_ABOUT_HOST}/main.css`,
];

const App = () => {
  useEffect(() => {
    Object.entries(defaultHosts).forEach(([customElementName, host]) => {
      const scriptId = `mfe-script-${customElementName}`;
      if (document.getElementById(scriptId)) {
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = host;
      document.head.appendChild(script);
    });

    defaultStyles.forEach((style) => {
      const styleId = `mfe-style-${style}`;
      if (document.getElementById(styleId)) {
        return;
      }

      const link = document.createElement("link");
      link.id = styleId;
      link.rel = "stylesheet";
      link.href = style;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div>
      <nav className="w-full bg-white py-4 border-b">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <h1 className="font-semibold">Container UI</h1>

          <div className="flex items-center space-x-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </div>
        </div>
      </nav>

      <div className="container px-4 mx-auto mt-4">
        <p className="text-lg font-bold">about-ui</p>
        <mfe-about-ui></mfe-about-ui>
      </div>

      <div className="container px-4 mx-auto mt-4">
        <p className="text-lg font-bold">home-ui</p>
        <mfe-home-ui></mfe-home-ui>
      </div>
    </div>
  );
};

export default App;
