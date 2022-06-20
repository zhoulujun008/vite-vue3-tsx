
import pieChartJson from './pie-charts/plugin.json';
import pieChartLogo from './pie-charts/img/logo.svg';
import pieChart from './pie-charts/index';
export const ChartSourceBuildIn = {
  [pieChartJson.type]: pieChart,
};
export const ChartSourceImgBuildIn = {
  [pieChartJson.type]: pieChartLogo,
};
