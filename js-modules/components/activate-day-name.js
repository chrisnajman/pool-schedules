import setMultipleAttributes from "./set-multiple-attributes.js"
import resetAllTabs from "./reset-all-tabs.js"
import resetAllTabPanels from "./reset-all-tab-panels.js"

export default function activateDayName(dayName) {
  if (!dayName) return

  // Tabs
  const tabs = document.querySelectorAll("button[role='tab']")
  resetAllTabs(tabs)
  tabs.forEach((tab) => {
    let tabText

    // tabs on daily-pool-chart.html
    const tabAbbr = tab.querySelector("abbr")

    tabAbbr ? (tabText = tabAbbr.title) : (tabText = tab.textContent.trim())

    dayName === tabText
      ? setMultipleAttributes(tab, { "aria-selected": "true", tabindex: "0" })
      : setMultipleAttributes(tab, {
          "aria-selected": "false",
          tabindex: "-1",
        })
  })

  // Tab panels
  const schedules = document.querySelectorAll(".schedule")
  resetAllTabPanels(schedules)
  const dayNameLowerCase = dayName.toLowerCase()

  schedules.forEach((form) => {
    const tabPanel = form.closest("div[role='tabpanel']")

    if (dayNameLowerCase === form.id) {
      tabPanel.hidden = false
      tabPanel.setAttribute("tabindex", "0")
    } else {
      tabPanel.hidden = true
      tabPanel.setAttribute("tabindex", "-1")
    }
  })
}
