import adminRadios from "./admin-radios.js"
import setLocalStorage from "../../components/local-storage/set-local-storage.js"

export default function adminForm(form, radios) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    adminRadios(radios)
    setLocalStorage()
  })
}
