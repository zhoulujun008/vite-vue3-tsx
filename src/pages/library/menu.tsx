import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Menu',
  setup() {
    const router = useRouter();
    const jumpPage = (page: string) => {
      router.push({ name: page });
    };
    return () => (
      <div onClick={() => jumpPage('charts')} class='cursor-pointer pl40 active-item'>
        <i class='bk-vision-icon v-reconciliation mr10'/>
        图表管理
      </div>
    );
  },
});
