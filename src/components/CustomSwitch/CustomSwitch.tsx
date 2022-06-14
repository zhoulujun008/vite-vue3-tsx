import { defineComponent, PropType, ref, watch } from 'vue';
import './CustomSwitch.scss';

interface ShowData {
  text: string
  value: number | string | boolean
}

export default defineComponent({
  name: 'CustomSwitch',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: false,
    },
    showData: {
      type: Object as PropType<ShowData[]>,
      default: () => [{ text: '开启', value: true }, { text: '关闭', value: false }],
    },
    // 定义显示文本,与传入的数据顺序对应
    showText: {
      type: Array,
      default: () => [],
    },
    backgroundColor: { // 背景色
      type: String,
      default: '#F4F5F5',
    },
    textColor: { // 文字颜色
      type: String,
      default: '#999',
    },
    activeBackgroundColor: { // 激活背景色
      type: String,
      default: '#96BDFF',
    },
    activeTextColor: { // 激活文字颜色
      type: String,
      default: '#fff',
    },
  },
  emits: ['update:modelValue'],
  setup(prop) {
    const val = ref<string | number | boolean>(prop.modelValue);
    watch(prop, (newV) => {
      val.value = newV.modelValue;
    }, { deep: true });
    return {
      val,
      showData: prop.showData,
      showText: prop.showText,
      backgroundColor: prop.backgroundColor,
      textColor: prop.textColor,
      activeBackgroundColor: prop.activeBackgroundColor,
      activeTextColor: prop.activeTextColor,
    };
  },
  methods: {
    handleValueChange(index: number) {
      this.val = this.showData[index].value;
      this.$emit('update:modelValue', this.val);
    },
  },
  render() {
    return (
                <div class='custom-switch' style={{ color: this.textColor, backgroundColor: this.backgroundColor }}>
                    {
                        this.showData.length > 0 ? this.showData.map((item: ShowData, index) => (
                            <div
                                class={'custom-switch-button'}
                                style={this.val === item.value ? {
                                  color: this.activeTextColor,
                                  backgroundColor: this.activeBackgroundColor,
                                } : ''}
                                key={index} onClick={() => this.handleValueChange(index)}>
                                {this.showData.length <= 2
                                  ? (this.showText.length > 0 ? this.showText[index] : item.text) : item.text}
                            </div>
                        )) : '请传入数据'
                    }
                </div>
    );
  },
});
