export default function adminRadios(radios) {
  const data = []
  radios.forEach((radio) => {
    if (radio.checked) {
      data.push({
        radioId: radio.id,
        radioName: radio.name,
      })
    }
  })

  /** Set params for day of the week only */
  const firstChecked = [...radios].find((radio) => radio.checked)
  const dayName = firstChecked.name.split("_")[0]

  const params = new URLSearchParams()
  params.set("day", dayName)

  window.location.href = `daily-pool-chart.html?${params.toString()}`
}
