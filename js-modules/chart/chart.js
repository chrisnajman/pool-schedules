import chartTable from "./components/chart-table.js"
import backButton from "./components/back-button.js"

const chartBody = document.getElementById("chart")

export default function chart() {
  if (!chartBody) return
  chartTable()
  backButton()
}
