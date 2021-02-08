import { ComponentCustomOptions } from "vue";
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "@vue/runtime-core" {
  //Bind to `this` keyword
  interface ComponentCustomProperties {
    $auth: import('@/main').Auth;
    $snackbar: { show: (message: string, action?: { buttonText: string, onPressed: () => void }) => void}
  }
}