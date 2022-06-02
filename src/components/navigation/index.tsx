import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
            <div class={'flex-row justify-content-between p10'}>
                <div>left</div>
                <div>right</div>
            </div>
    );
  },
});
