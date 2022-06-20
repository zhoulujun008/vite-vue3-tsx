import meta from './plugin.json';
const ChartPanel = async () => await import('./components/chart-panel');
const PropsPanel = async () => await import('./components/props-panel');
export default {
  ChartPanel,
  PropsPanel,
  meta,
};
