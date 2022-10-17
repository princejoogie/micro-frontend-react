/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CONTAINER_HOST: string;
  readonly VITE_APP_ABOUT_HOST: string;
  readonly VITE_APP_HOME_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
