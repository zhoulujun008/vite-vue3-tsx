import { defineComponent } from 'vue';
import Menu from './menu';
import { ResizeLayout } from 'bkui-vue';
export default defineComponent({
  name: 'Library',
  render() {
    return (
      <ResizeLayout
        class={'dashboard-layout'}
        initial-divide={220}
        min={150}
        max={350}
        collapsible={true}>
        {{
          aside: () => <Menu/>,
          main: () => (<router-view/>),
        }}
      </ResizeLayout>
    );
  },
});
