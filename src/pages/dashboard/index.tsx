import { defineComponent, ref } from 'vue';
import Menu from './menu';
import { ResizeLayout } from 'bkui-vue';
export default defineComponent({
  name: 'Dashboards',
  setup() {
    const list = ref();
    const getList = () => {
      // TODO
    };
    return {
      list,
      getList,
    };
  },
  render() {
    return (
      <ResizeLayout
        class={'dashboard-layout'}
        initial-divide={220}
        min={150}
        max={350}
        collapsible={true}>
        {{
          aside: () => <Menu on-update={this.getList} v-model={this.list}/>,
          main: () => (<div>renderDashboard</div>),
        }}
      </ResizeLayout>
    );
  },
});
