import restoreRadioState from "../components/local-storage/get-local-storage.js"
import adminTable from "./components/admin-table.js"
import adminForm from "./components/admin-form.js"

const formMonday = document.getElementById("monday")
const formTuesday = document.getElementById("tuesday")
const formWednesday = document.getElementById("wednesday")
const formThursday = document.getElementById("thursday")
const formFriday = document.getElementById("friday")
const formSaturday = document.getElementById("saturday")
const formSunday = document.getElementById("sunday")

export default function schedules() {
  if (formMonday) {
    const tbodyMon = document.getElementById("Monday")
    adminTable(tbodyMon)
    const radios = formMonday.querySelectorAll("input[type='radio']")
    adminForm(formMonday, radios)
  }
  if (formTuesday) {
    const tbodyTue = document.getElementById("Tuesday")
    adminTable(tbodyTue)
    const radios = formTuesday.querySelectorAll("input[type='radio']")
    adminForm(formTuesday, radios)
  }
  if (formWednesday) {
    const tbodyWed = document.getElementById("Wednesday")
    adminTable(tbodyWed)
    const radios = formWednesday.querySelectorAll("input[type='radio']")
    adminForm(formWednesday, radios)
  }
  if (formThursday) {
    const tbodyThu = document.getElementById("Thursday")
    adminTable(tbodyThu)
    const radios = formThursday.querySelectorAll("input[type='radio']")
    adminForm(formThursday, radios)
  }
  if (formFriday) {
    const tbodyFri = document.getElementById("Friday")
    adminTable(tbodyFri)
    const radios = formFriday.querySelectorAll("input[type='radio']")
    adminForm(formFriday, radios)
  }
  if (formSaturday) {
    const tbodySat = document.getElementById("Saturday")
    adminTable(tbodySat)
    const radios = formSaturday.querySelectorAll("input[type='radio']")
    adminForm(formSaturday, radios)
  }
  if (formSunday) {
    const tbodySun = document.getElementById("Sunday")
    adminTable(tbodySun)
    const radios = formSunday.querySelectorAll("input[type='radio']")
    adminForm(formSunday, radios)
  }

  restoreRadioState()
}
