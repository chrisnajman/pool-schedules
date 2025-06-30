import { RADIOS_KEY } from "../../globals.js"

export default function restoreRadioState() {
  const savedData = localStorage.getItem(RADIOS_KEY)
  if (!savedData) return

  const schedule = JSON.parse(savedData)

  Object.values(schedule).forEach((entries) => {
    entries.forEach(({ id }) => {
      const radio = document.getElementById(id)
      if (radio) radio.checked = true
    })
  })
}
