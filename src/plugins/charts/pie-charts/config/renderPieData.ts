import { EChartsOption, PieSeriesOption } from 'echarts';
import { DatasourceMysql, FrameDateSet, IPanelModel, QueryMysqlSimple } from '@/typings';
import { ChartConfigFormPie, Legend, PieChartConfig, Tooltip, VisualConfigPie } from '@charts/typings/chart';
import {  COLOR_LIST } from '@/constants/charts';
import { labelFormatter } from '@/utils/formats';

const renderPieData = (
  panelModel: IPanelModel<DatasourceMysql, QueryMysqlSimple, ChartConfigFormPie>,
  chartData: FrameDateSet[][], columns, data_type,
) => {
  const { chartConfig = new ChartConfigFormPie() } = panelModel;
  // const { label, unfold, unit, colors, innerSize = '50%' } = chartConfig;
  const { visual = new VisualConfigPie(),
    pie =  new PieChartConfig(),
    colors, tooltip = new Tooltip(), legend = new Legend() } = chartConfig;
  let color = COLOR_LIST;
  if (colors && Array.isArray(colors.color) && colors.color.length) {
    color = colors.color;
  }
  const { unit, unfold, label } = visual;
  let source = chartData[0];
  // source = source.slice(0, 3);
  if (unfold) {
    source = source.slice(0, 10);
  }
  let dataset = {
    source,
  };
  const { center } = pie;
  const radius = pie.radius.map(ele => `${parseInt(ele)}%`);
  const dimensions: string[] = columns.map(item => item.name);
  if (!dimensions.includes('_unique_metric_')) {
    dimensions.push('_unique_metric_');
  }
  const query = panelModel.query[0];
  const targetName = query.targets[0]?.name;
  const valueItem = columns.find(column => column.name === targetName);
  let value = columns[query.dimensions.length]?.name;
  if (valueItem) {
    value = valueItem.name;
  }
  const encode = {
    itemName: '_unique_metric_',
    // itemName: query.dimensions[0].name,
    // value: query.targets[0].name,
    // 当维度与指标重名时，指标被重命名
    value,
    // tooltip: '2012'
  };
  const formatter = (params) => {
    const { percentage } = tooltip;
    const { name, value } = params;
    const tooltipString: string[] = [];
    if (params.marker) {
      tooltipString.push(` ${params.marker || ''}`);
    }
    tooltipString.push(`${name}：`);
    tooltipString.push(`${labelFormatter(value[encode.value], unit)}`);
    if (percentage) {
      tooltipString.push(`(${params.percent}%)`);
    }
    return tooltipString.join('');
  };

  const  serial: PieSeriesOption = {
    type: 'pie',
    right: 20,
    radius,
    center,
    // tooltip: {
    //   textStyle: {
    //     fontSize: 10,
    //   },
    //   formatter: (parmas) => {
    //   },
    // },
    label: {
      show: label,
      formatter,
      // formatter: '{b}\n{@[1]}\n{d}%',
      // formatter: '{b}\n{c}\n{d}%',
      // formatter: (params) => {
      // },
      fontSize: 12,
      lineHeight: 18,
    },
    emphasis: {
      labelLine: {
        show: label,
      },
    },
  };
  if (data_type === 'row') {
    dataset = {
      dimensions,
      source,
    };
    Object.assign(serial, {
      encode,
    });
  }

  const option: EChartsOption = {
    padding: [0, 10],
    series: [serial],
    legend: {
      show: false,
    },
    dataset,
    tooltip: {
      show: true,
      trigger: 'item',
      confine: true,
      textStyle: {
        fontSize: 12,
        lineHeight: 18,
      },
      formatter,
      appendToBody: true,
      renderMode: 'html',
    },
    icon: 'pin',
    color,
  };
  if (!legend.hide) {
    switch (legend.position) {
      case 'bottom':
        Object.assign(option, {
          legend: {
            type: 'scroll',
            bottom: 5,
            orient: 'textVerticalAlign',
            height: 20,
            icon: 'pin',
            padding: [5, 10],
          },
          grid: [
            {
              top: 10,
              left: 15,
              right: 15,
              bottom: 50,
              containLabel: true,
            },
          ],
        });
        break;
      case 'right':
        Object.assign(option, {
          legend: {
            icon: 'pin',
            type: 'scroll',
            left: 'right',
            orient: 'vertical',
            // top: 'middle',
            bottom: 20,
            align: 'left',
            // top: 10,
            padding: [0, 10],
            // icon: 'line',
            textStyle: {
              width: 80,
              overflow: 'truncate',
            },
          },
          grid: [
            {
              top: 20,
              left: 15,
              right: 160,
              bottom: 10,
              containLabel: true,
            },
          ],
        });
        break;
    }
  }
  return option;
};
export default renderPieData;
