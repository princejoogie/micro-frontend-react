/// <reference types="vite/client" />
import type { History } from 'history';
type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  interface Window {
    mfeHistory: History;
  }

  namespace JSX {
    interface IntrinsicElements {
      [customElementName: string]: CustomElement<any>;
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_ABOUT_HOST: string
  readonly VITE_HOME_HOST: string
  readonly VITE_CONTAINER_HOST: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
