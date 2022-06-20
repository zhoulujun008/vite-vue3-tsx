import { defineComponent } from 'vue';
import ChartWrap from '@/components/chart-wrap';
import CustomSwitch from '@/components/CustomSwitch/CustomSwitch';

export default defineComponent({
  name: 'Charts',
  setup() {

  },
  render() {
    return (
      <div>
        <div>22</div>
        <div>333</div>
        <div>{ChartWrap}</div>
        <div>{CustomSwitch}</div>
      </div>
    );
  },
});
