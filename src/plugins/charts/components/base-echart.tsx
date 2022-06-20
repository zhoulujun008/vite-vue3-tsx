import { defineComponent, PropType, onMounted, Ref, ref, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';
import './base-echart.scss';
import isElementNotInViewport from '@/utils/isElementNotInViewport';
import { throttle } from 'lodash';
const props = {
  options: {
    type: Object as PropType<EChartsOption>,
  },
};
export default defineComponent({
  props,
  setup() {
    const chart: Ref<HTMLDivElement | null> = ref(null);
    let resizeObserverInited = false;
    let chartInstance: ECharts | null;
    let resizeObserver: ResizeObserver | null = new ResizeObserver((): void => {
      if (!chart.value || isElementNotInViewport(chart.value)) {
        return;
      }
      if (!resizeObserverInited) {
        resizeObserverInited = true;
        return;
      }
      reflowChart();
    });
    const renderChart = throttle(() => {
      if (!chartInstance) {
        return;
      }
      chartInstance.setOption(props.options, { notMerge: true, lazyUpdate: false, silent: true });
    }, 500);

    const reflowChart =  throttle(() => {
      chartInstance?.resize();
    }, 500);

    watch(() => props.options, () => {
      renderChart();
    }, { deep: true });
    onMounted(() => {
      if (!chart.value) {
        return false;
      }
      chartInstance = echarts.init(chart.value);
      resizeObserver?.observe(chart.value);
    });
    onUnmounted(() => {
      if (!chartInstance) {
        return;
      }
      chartInstance.clear();
      chartInstance = null;
      window.removeEventListener('resize', reflowChart);
      if (resizeObserver) {
        chart.value && resizeObserver.unobserve(chart.value);
        resizeObserver = null;
      }
    });
    return {
      renderChart,
      reflowChart,
    };
  },
  render() {
    return (<div ref='chart' class='chart-base'/>);
  },
});
