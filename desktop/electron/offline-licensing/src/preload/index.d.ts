import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: Api
  }
}

export interface Api {
  getMachineId: () => Promise<string>
}
