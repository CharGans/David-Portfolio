import { create } from 'zustand'

const useStore = create((set) => ({
  message: 'Loading...',
  setMessage: (message) => set({ message }),
  
  fetchMessage: async () => {
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()
      set({ message: data.message })
    } catch (error) {
      set({ message: 'Error fetching message' })
    }
  }
}))

export default useStore