import { onBeforeUnmount, ref } from '@nuxtjs/composition-api'
import dayjs from 'dayjs'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCurrentTime = () => {
  const formatTime = 'HH:mm DD/MM/YYYY'
  const currentTime = ref(dayjs(new Date()).format(formatTime))
  const updateCurrentTime = () => {
    currentTime.value = dayjs(new Date()).format(formatTime)
  }
  const intervalHandle = setInterval(updateCurrentTime, 1000)
  onBeforeUnmount(() => clearInterval(intervalHandle.value))
  return { currentTime }
}
