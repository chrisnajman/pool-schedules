export default function resetAllTabPanels(elements) {
  elements.forEach((element) => {
    const panel = element.closest('[role="tabpanel"]')
    if (panel) {
      panel.hidden = true
      panel.setAttribute("tabindex", "-1")
      panel.style.display = "" // Ensure no inline display:none persists
    }
  })
}
