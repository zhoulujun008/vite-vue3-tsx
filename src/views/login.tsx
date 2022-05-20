import { useStore } from 'vuex'
import { IUser } from '@/store/login'
import { useRouter } from 'vue-router'
import { SET_USER } from '@/store/login/actionType'
import { defineComponent, ref, reactive, onMounted } from 'vue'
import {
    Form,
    Input,
    Button,
    Message,
    bkTooltips,
    Notify,
} from 'bkui-vue'

import { BkFormItem } from 'bkui-vue/lib/form';

const { BkForm, ComposeFormItem } = Form
export default defineComponent({
    setup() {
        const data = reactive<{
            user: IUser
        }>({
            user: {
                name: '',
                password: ''
            }
        })
        const loginForm = ref<typeof BkForm | null>(null)
        const { dispatch } = useStore()
        const router = useRouter()

        onMounted(() => {
            Notify({
                type: 'info',
                title: '账户信息',
                dangerouslyUseHTMLString: true,
                message: '账号：<strong>admin</strong>  密码：<strong>123456</strong>'
            })
        })

        function login() {
            if (!loginForm.value) return
            loginForm.value.validate((valid: boolean) => {
                if (valid) {
                    if (data.user.name === 'admin' && data.user.password === '123456') {
                        router.push({
                            name: 'home'
                        })

                        localStorage.setItem('user', JSON.stringify(data.user))
                        dispatch(`login/${SET_USER}`, data.user)
                    } else {
                        data.user = {
                            name: '',
                            password: ''
                        }

                        localStorage.removeItem('user')
                        Message({ message: '用户名或密码错误', theme: 'error' })
                    }
                } else {
                    return false
                }
            })
        }

        function keyUp({ code }: KeyboardEvent) {
            if (code === 'Enter') {
                login()
            }
        }

        return () => (
            <BkForm model={data.user} ref={loginForm}>
                <BkFormItem
                    label='账号'
                    property='name'
                    rules={[{ required: true, message: '请输入用户名', trigger: 'blur' }]}
                >
                    <Input
                        placeholder='请输入用户名'
                        v-model={data.user.name}
                        v-slots={{
                            prefix: <span>22</span>
                        }}
                        {...{
                            onKeyup: keyUp
                        }}
                    />
                </BkFormItem>
                <BkFormItem
                    label='密码'
                    property='password'
                    rules={[{ required: true, message: '请输入密码', trigger: 'blur' }]}
                >
                    <Input
                        placeholder='请输入密码'
                        v-model={data.user.password}
                        v-slots={{
                            prefix: (<span class='input-icon'><search/></span>)
                        }}
                        {...{
                            onKeyup: keyUp
                        }}
                    />
                </BkFormItem>
                <BkFormItem class='login-button'>
                    <Button
                        theme='primary'
                        {...{
                            onClick: login
                        }}
                    >
                        登陆
                    </Button>
                </BkFormItem>
            </BkForm>
        )
    }
})
