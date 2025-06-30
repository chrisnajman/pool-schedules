import setMultipleAttributes from "./set-multiple-attributes.js"
export default function resetAllTabs(tabs) {
  tabs.forEach((tab) => {
    setMultipleAttributes(tab, { "aria-selected": "false", tabindex: "-1" })
  })
}
