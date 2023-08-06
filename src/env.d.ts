declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vitepress/dist/client/theme-default/composables/nav' {
  export function useNav(): {
    isScreenOpen: boolean
    openScreen: () => void
    closeScreen: () => void
    toggleScreen: () => void
  }
}

declare module 'vitepress/dist/client/shared' {
  export function isActive(
    currentPath: string,
    matchPath: string,
    asRegex = false,
  ): boolean
}
