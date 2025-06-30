export default function backButton() {
  const goBackBtn = document.getElementById("go-back")
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const name = urlParams.get("day")
  const params = new URLSearchParams()

  params.set("day", name)

  goBackBtn.addEventListener("click", () => {
    window.location.href = `index.html?${params.toString()}`
  })
}
