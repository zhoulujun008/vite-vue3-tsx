import { defineAsyncComponent } from 'vue';
import meta from './plugin.json';
const ChartPanel = defineAsyncComponent(() =>  import('./components/chart-panel'));
const PropsPanel =  defineAsyncComponent(() => import('./components/props-panel'));
export default {
  ChartPanel,
  PropsPanel,
  meta,
};
