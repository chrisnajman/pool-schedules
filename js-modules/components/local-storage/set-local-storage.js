import { RADIOS_KEY } from "../../globals.js"

export default function setLocalStorage() {
  const radios = document.querySelectorAll("input[type='radio']")
  const groupedByDay = {}

  radios.forEach((radio) => {
    if (radio.checked) {
      const parts = radio.id.split("_")
      const day = parts[0] // e.g., "Monday"

      if (!groupedByDay[day]) {
        groupedByDay[day] = []
      }

      groupedByDay[day].push({
        id: radio.id,
        name: radio.name,
      })
    }
  })

  localStorage.setItem(RADIOS_KEY, JSON.stringify(groupedByDay))
}
