import { defineStore } from 'pinia'

export const changeColorsStore = defineStore({
    id: 'store',
    state: () => ({}),
    getters: {},
    actions: {
        changeShadowColor(event: MouseEvent): void {
            (event.target as HTMLElement).style.setProperty('--color', 'rgb(236 72 153)');
        },
        resetShadowColor(event: MouseEvent): void {
            (event.target as HTMLElement).style.setProperty('--color', 'rgb(94 234 212)');
        },
    },
})
