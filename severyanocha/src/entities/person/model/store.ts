import {ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import {type Person} from "./types";
import avatarJPG from "@/assets/avatar.jpg";


export const usePersonStore = defineStore('person', () => {
    const isAuth = ref<boolean>(true)
    const person = reactive<Person>({
        name: 'Алексей',
        avatar: avatarJPG
    })

    const setIsAuth = (value: boolean) => {
        isAuth.value = value
    }
    return { isAuth, person, setIsAuth }
})
