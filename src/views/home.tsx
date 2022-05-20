import { useStore, Dispatch } from 'vuex'
import { defineComponent, ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import { SET_USER } from '@/store/login/actionType'






export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const name = ref<string>('')
    const password = ref<string>('')

    setTimeout(() => {
      const userString = localStorage.getItem('user')
      if (userString) {
        const user = JSON.parse(userString)
        store.dispatch(`login/${SET_USER}`, user)
      }
      name.value = store.state.login.user.name
      password.value = store.state.login.user.password.replace(/[\s\S]/g, '*')
    }, 1000)

      return () => (
          <div>22</div>
      )
  }
})
