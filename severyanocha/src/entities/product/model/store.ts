import {ref, reactive, computed} from 'vue'
import { defineStore } from 'pinia'
import type {Card} from "@/widgets/products/types";



export const useBasketStore = defineStore('basket', () => {
    const isAuth = ref<boolean>(true)
    let basket = reactive<Card[]>([])

    const removeItemFromBasket = (id: number) => {
        let index = basket.findIndex(item => item.id === id)
        if (index === - 1) return
        basket.splice(index, 1)
    }
    const addItemToBasket = (item: Card) => {
        basket.push(item)
    }
    const clearSelectedItemFromBasket = (id: number) => {
        let newBasket = basket.filter(item => item.id !== id)
        if (newBasket.length === 0) return
        basket = [...newBasket]
    }
    return { isAuth, removeItemFromBasket, addItemToBasket, clearSelectedItemFromBasket, basket }
})
