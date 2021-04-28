import { onBeforeUnmount, ref } from '@nuxtjs/composition-api'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCurrentTime = () => {
  const currentTime = ref(new Date())
  const updateCurrentTime = () => {
    currentTime.value = new Date()
  }
  const intervalHandle = setInterval(updateCurrentTime, 1000)
  onBeforeUnmount(() => clearInterval(intervalHandle.value))
  return { currentTime }
}
