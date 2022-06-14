export {}; // 必须保留
declare global {
  interface Window {
    csrf_cookie_name: string,
    graph_watermark: boolean;
    user_name: string;
    space_uid: string
    bkVisionApp: any
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
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $test: any
    // $on: (event: string, fun: (...rest: any) => void) => void
  }
}
