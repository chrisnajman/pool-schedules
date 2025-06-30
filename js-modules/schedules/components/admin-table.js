import { times, lanes, activities } from "../../globals.js"
import theadRows from "../../components/thead-rows.js"

const adminBody = document.getElementById("admin")

export default function adminTable(tbody) {
  if (adminBody) {
    theadRows()

    times.forEach((time, tIndex) => {
      const tr = document.createElement("tr")
      const th = document.createElement("th")
      th.scope = "row"
      th.textContent = time
      tr.appendChild(th)

      lanes.forEach((lane) => {
        const td = document.createElement("td")
        activities.forEach((activity, aIndex) => {
          const tbodyId = tbody.getAttribute("id")
          const inputId = `${tbodyId}_timeIndex_${tIndex}_time_${time}_lane_${lane}_${activity}`
          const name = `${tbodyId}_timeIndex_${tIndex}_time_${time}_lane_${lane}`
          const div = document.createElement("div")

          const input = document.createElement("input")
          input.type = "radio"
          input.id = inputId
          input.name = name
          input.required = true
          if (aIndex === 0) input.checked = true

          const label = document.createElement("label")
          label.setAttribute("for", inputId)
          label.textContent = activity

          div.appendChild(input)
          div.appendChild(label)
          td.appendChild(div)
        })
        tr.appendChild(td)
      })

      tbody.appendChild(tr)
    })
  }
}
