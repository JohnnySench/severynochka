import {reactive, computed} from 'vue'
import {defineStore} from 'pinia'
import type {Card} from "@/widgets/products/types";


export const useBasketStore = defineStore('basket', () => {
    let basket = reactive<Card[]>([])

    const countBasket = computed(() => {
        let ids: number[] = []
        basket.forEach(item => ids.push(item.id))
        return ids.length > 0 ? [...new Set(ids)].length : 0
    })

    const removeItemFromBasket = (id: number) => {
        let index = basket.findIndex(item => item.id === id)
        if (index === -1) return
        basket.splice(index, 1)
    }
    const addItemToBasket = <T extends object, V extends keyof T>(item: T[V]) => {
        basket.push(item as Card)
    }
    const clearSelectedItemFromBasket = (id: number) => {
        let newBasket = basket.filter(item => item.id !== id)
        if (newBasket.length === 0) return
        basket = [...newBasket]
    }
    return {countBasket, removeItemFromBasket, addItemToBasket, clearSelectedItemFromBasket, basket}
})
