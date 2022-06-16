import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    type: String,
    msg: String,
  },
  render() {
    return (
      <div class='exception-wrap-item'>
        <span>{this.msg}222</span>
      </div>
    );
  },
});
