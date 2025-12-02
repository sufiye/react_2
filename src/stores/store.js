import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useDarkMode = create(persist(
  (set) => ({
       isDrakModeEnable: false,
       toggleDarkmode: () => set((state) => ({ isDrakModeEnable: !state.isDrakModeEnable}))
}),{name:"darkmode"}

))
