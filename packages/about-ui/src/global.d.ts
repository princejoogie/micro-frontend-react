import type { History } from "history";

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

