import { defineComponent } from 'vue';
// import { ChartSourceBuildIn } from '@/plugins/charts/index';

export default defineComponent({
  name: 'ChartWrap',
  setup() {
    // const chart = ChartSourceBuildIn['pie-charts'];
    // const vnode = h(chart, { m: 222 });

  },
  render() {
    return (
      <div>
        <div>title</div>
        {/* <div>{vnode}</div>*/}
      </div>
    );
  },
});
