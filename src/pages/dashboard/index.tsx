import { defineComponent } from 'vue';
import { Exception } from 'bkui-vue';

export default defineComponent({
  props: {
    type: String,
    msg: String,
  },
  render() {
    return (
            <Exception class='exception-wrap-item' type={this.type}>
                <span>{this.$t('国际化示例')}</span>
            </Exception>
    );
  },
});
