import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { UserModule } from '@modules/user';
export default defineComponent({
  setup() {
    UserModule.setUserAsync();
    return () => <RouterView />;
  },
});
