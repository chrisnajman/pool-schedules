import themeSwitcher from "./js-modules/theme.js"
import loadingAnimation from "./js-modules/loader.js"
import tabs from "./js-modules/components/tabs.js"
import schedules from "./js-modules/schedules/schedules.js"
import chart from "./js-modules/chart/chart.js"
import activateDayName from "./js-modules/components/activate-day-name.js"
themeSwitcher()
loadingAnimation()
tabs()
schedules()
chart()
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const dayName = urlParams.get("day")
activateDayName(dayName)
