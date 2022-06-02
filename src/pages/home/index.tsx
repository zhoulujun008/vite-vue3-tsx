import { defineComponent } from 'vue';
import {  useRoute } from 'vue-router';
import Navigation from '../../components/navigation';
export default defineComponent({
  setup() {
    const route = useRoute();
    let { isHideNav } = route.meta;
    const { space_uid } = route.params;
    if (window.location.search.includes('embed')) {
      isHideNav = true;
    }
    const routeClass = () => {
      if (isHideNav) {
        return 'full-page';
      }
      return 'flex-1';
    };
    return () => (
        <div class='full-height flex-column'>
            {!isHideNav && (<Navigation/>)}
            <keep-alive>
                <router-view class={routeClass()} name='keepAlive' />
            </keep-alive>
            <router-view key={space_uid}  class={routeClass()}/>
        </div>
    );
  },
});
