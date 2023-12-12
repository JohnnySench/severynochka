import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import {type Platform} from "./types";

export const useScreenStore = defineStore('screen', () => {
    const platform = ref<Platform>('desktop')

    const getPlatform = computed(() => platform.value)

    const setPlatform = (width: number) => {
        if (width >= 1208) return platform.value = 'desktop'
        if (width >= 768) return platform.value = 'tablet'
        return platform.value = 'mobile'
    }
    return { getPlatform, setPlatform, platform }
})
