import { defineComponent, h } from 'vue';
import { ChartSourceBuildIn } from '@/plugins/charts/index';
export default defineComponent({
  name: 'ChartWrap',
  setup() {
    const chart = ChartSourceBuildIn['pie-charts'];
    const { ChartPanel } = chart;
    const vnode = h(ChartPanel, { m: 222 });
    return {
      vnode,
    };
  },
  render() {
    return (
      <div>
        <div>title</div>
        {this.vnode}
      </div>
    );
  },

});
