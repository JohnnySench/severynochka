import {ref, reactive} from 'vue'
import { defineStore } from 'pinia'
import type {Card} from "@/widgets/products/types";



export const useBasketStore = defineStore('basket', () => {
    const isAuth = ref<boolean>(true)
    const basket = reactive<Card[]>([])

    const addItemInBasket = (item: Card) => {
        console.log(item)
        basket.push(item)
    }
    return { isAuth, addItemInBasket, basket }
})
