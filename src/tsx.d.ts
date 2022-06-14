import { VNode, PluginObject } from 'vue';
import VueRouter, { Route } from 'vue-router';
import VueI18n from 'vue-i18n';
import 'vue-tsx-support/enable-check';

declare global {
  namespace JSX {
    type Element = VNode;

    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  interface Window {
    STATIC_URL: string,
    csrf_cookie_name: string,
    graph_watermark: boolean;
    user_name: string;
    username: string;
    i18n: VueI18n;
    space_uid: string
    PROJECT_CONFIG: {
      BK_STATIC_URL?: string,
      SITE_URL: string,
      BKPAAS_ENVIRONMENT?: string,
      BKPAAS_ENGINE_APP_NAME?: string,
      BKPAAS_ENGINE_REGION?: string,
      BKPAAS_APP_ID?: string,
      BK_LOGIN_URL?: string,
      MEMBER_URL?: string
    }
    VISION_AJAX_URL_PREFIX: string,
  }
}
interface IBkInfoProps {
  title: unknown;
  subTitle: unknown;
  width: string | number;
  type: 'success'|'warning'|'error'|'loading';
  confirmLoading: boolean;
  subHeader?: any;
  maskClose?: boolean;
  escClose?: boolean;
  confirmFn: (v: unknown) => void;
  cancelFn: (v: unknown) => void;
}
declare module 'vue/types/vue' {
  interface Vue {
    $route: Route
    $router: VueRouter,
    // $watch: any,
    $Confirm: (title: string, content?: string, onConfirm?, onCancel?, options?: any) => Promise<boolean>
    $Bus: Vue,
    $bkInfo?: (p: Partial<IBkInfoProps>) => void;
    $bkMessage?: (p: Partial<{theme: 'primary'|'success'|'warning'|'error', message: string}>) => void;
    $bkPopover?: (...Object) => void;
  }
}
declare module 'vue' {
  interface VueConstructor {
    _installedPlugins: PluginObject<any>[];
  }
}
