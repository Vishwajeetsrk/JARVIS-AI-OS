/// <reference types="vite/client" />

declare module "file-saver" {
  export interface FileSaverOptions {
    autoBom?: boolean;
  }
  export function saveAs(data: Blob | string, filename?: string, options?: FileSaverOptions): void;
  const fileSaver: { saveAs: typeof saveAs };
  export default fileSaver;
}
