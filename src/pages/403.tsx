import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { Exception, Button } from 'bkui-vue';
export default defineComponent({
  setup() {
    const router = useRouter();

    return () => (
     <div>
       <Exception  class="exception-wrap-item" type="403">
           <span>功能建设中</span>
           <div class="text-wrap">
               <Button
                   theme="primary"
                   {...{
                     onClick: () => {
                       router.push({ name: 'login' });
                     },
                   }}
               >
                   返回首页
               </Button>
           </div>
       </Exception>
     </div>
    );
  },
});
