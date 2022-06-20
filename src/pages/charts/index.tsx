import { defineComponent } from 'vue';
import chartWrap from '@/components/chart-wrap';

export default defineComponent({
  name: 'Charts',
  setup() {

  },
  render() {
    return (
      <div>
        <div>22</div>
        <div>{chartWrap}</div>
      </div>
    );
  },
});
