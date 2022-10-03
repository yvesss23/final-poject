import { defineStore } from 'pinia'

export const useOrder = defineStore('order', {
  state: () => ({
    /** @type {{ slug: string, quantity: number, comments: string, name: string, price: number, total: number}[]} */
    items: [],
    tableNumber: 0
  }),
  getters: {
  },
  actions: {
    // any amount of arguments, return a promise or not
    addItem(slug, quantity, comments, name, price, total) {
      // you can directly mutate the state
      this.items.push({ slug, quantity, comments, name, price, total})
    },
      },
  
})