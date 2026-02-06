export const useNotify = () => {
  const messages = useState<{text: string, color: 'error' | 'success' | 'info', timeout: number}[]>('notifyMessages', () => [])
  const sendMessageAlert = (message: string) => {
    messages.value.push({text: message, color: 'error', timeout: 2000})
  }
  const sendMessageSuccess = (message: string) => {
    messages.value.push({text: message, color: 'success', timeout: 2000})
  }
  const sendMessageInfo = (message: string) => {
    messages.value.push({text: message, color: 'info', timeout: 2000})
  }

  return { sendMessageAlert, sendMessageSuccess, sendMessageInfo }
}