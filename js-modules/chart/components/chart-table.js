import theadRows from "../../components/thead-rows.js"
import { RADIOS_KEY } from "../../globals.js"

export default function chartTable() {
  theadRows() // fills all thead in the page

  const rawData = localStorage.getItem(RADIOS_KEY)
  if (!rawData) {
    // No data in localStorage
    Object.values(document.querySelectorAll("tbody[id^='output-']")).forEach(
      (tbody) => {
        tbody.textContent = "No schedule data found in localStorage."
      }
    )
    return
  }

  try {
    const data = JSON.parse(rawData) // data is an object keyed by day

    // Loop through days in data
    for (const [day, radios] of Object.entries(data)) {
      // Find tbody for this day
      const tbody = document.getElementById(`output-${day}`)
      if (!tbody) continue

      // Clear any previous rows
      tbody.innerHTML = ""

      // radios is an array of selected radio info for this day
      // We'll process in chunks of 5 (lanes)

      for (let i = 0; i < radios.length; i += 5) {
        const tr = document.createElement("tr")
        const group = radios.slice(i, i + 5)
        const firstId = group[0].radioId || group[0].id // depending on data shape

        // Parse radioId to get time etc
        const parts = firstId.split("_")
        const time = parts[4] // time string

        // First cell: time label
        const th = document.createElement("th")
        th.scope = "row"
        th.textContent = time
        tr.appendChild(th)

        // Next cells: lane activity types
        group.forEach(({ radioId, id }) => {
          const td = document.createElement("td")
          const span = document.createElement("span")

          const rid = radioId || id
          const activityType = rid.split("_")[7]
          const typeClass = activityType.toLowerCase()

          span.textContent = activityType
          span.classList.add(typeClass, "visually-hidden")
          td.appendChild(span)
          tr.appendChild(td)
        })

        tbody.appendChild(tr)
      }
    }
  } catch (err) {
    // Show error message in all tab panels
    Object.values(document.querySelectorAll("tbody[id^='output-']")).forEach(
      (tbody) => {
        tbody.textContent = "Invalid data format in localStorage."
      }
    )
    console.error("Error parsing localStorage data:", err)
  }
}
