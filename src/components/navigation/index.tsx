import {defineComponent, ref} from 'vue';
import CustomSwitch from "@/components/CustomSwitch/CustomSwitch";

export default defineComponent({
    components:{
        CustomSwitch,
    },
    setup() {
        const flag= ref(false);
        return{
            flag
        }
    },
    render(){
        return (
            <div class={'flex-row justify-content-between p10'}>
                <CustomSwitch v-model={this.flag}/>
                <div>left</div>
                <div>right</div>
            </div>
        )
    }
});
