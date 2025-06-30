import resetAllTabs from "./reset-all-tabs.js"
import resetAllTabPanels from "./reset-all-tab-panels.js"

export default function tabs() {
  const tabElements = document.querySelectorAll('button[role="tab"]')
  const panelElements = document.querySelectorAll('[role="tabpanel"]')
  let activeIndex = 0

  // Listen to clicks and key presses on tabs
  tabElements.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      setActiveTab(index)
    })

    tab.addEventListener("keydown", (e) => {
      const key = e.key
      const lastIndex = tabElements.length - 1

      if (key === "ArrowLeft" || key === "ArrowUp") {
        if (activeIndex === 0) {
          // First element, jump to end
          setActiveTab(lastIndex)
        } else {
          // Move left
          setActiveTab(activeIndex - 1)
        }
      } else if (key === "ArrowRight" || key === "ArrowDown") {
        if (activeIndex === lastIndex) {
          // Last element, jump to beginning
          setActiveTab(0)
        } else {
          // Move right
          setActiveTab(activeIndex + 1)
        }
      } else if (key === "Home") {
        // Move to beginning
        setActiveTab(0)
      } else if (key === "End") {
        // Move to end
        setActiveTab(lastIndex)
      }
    })
  })

  function setActiveTab(index) {
    // Reset all tabs (even if some were set via index.js)
    resetAllTabs(tabElements)

    // Make currently active tab inactive
    tabElements[activeIndex].setAttribute("aria-selected", "false")
    tabElements[activeIndex].tabIndex = -1

    // Set the new tab as active
    tabElements[index].setAttribute("aria-selected", "true")
    tabElements[index].tabIndex = 0
    tabElements[index].focus()

    setActivePanel(index)
    activeIndex = index
  }

  function setActivePanel(index) {
    // Reset all tab panels (even if some were set via index.js)
    resetAllTabPanels(panelElements)

    // Hide currently active panel
    panelElements[activeIndex].setAttribute("hidden", "")
    panelElements[activeIndex].tabIndex = -1

    // Show the new active panel
    panelElements[index].removeAttribute("hidden")
    panelElements[index].tabIndex = 0
  }
}
