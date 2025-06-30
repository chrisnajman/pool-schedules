import { theads } from "../globals.js"
export default function theadRows() {
  const rowsTheads = `
            <tr>
                <th rowspan="2">Time</th>
                <th colspan="5">Lanes</th>
            </tr>
            <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
            </tr>
        `
  theads.forEach((thead) => {
    thead.innerHTML = rowsTheads
  })
}
