# Pool Schedules

**Pool Schedules** is a simulated scheduling application, divided into two parts: an **admin page** (`index.html`) for managing schedule data, and a **public-facing chart page** (`daily-pool-chart.html`) for viewing the results. This setup mimics a common intranet-to-web publishing model.

The **admin interface** is optimized for **tablet and desktop devices**, reflecting the assumption that staff or administrators are more likely to manage complex scheduling tasks on larger screens. Its table has a fixed width and scrolls horizontally on smaller viewports to remain usable. In contrast, the **chart page** is designed with **mobile responsiveness** in mind — its layout and tables adapt fluidly to small screens for easier public access on phones or tablets.

## How to use

### Admin Page (index.html)

- Select schedule items for each day using radio buttons grouped by time slot and activity type.
- Use the tab interface to switch between days (Monday through Sunday).
- On form submission, changes are automatically saved to `localStorage`, so data is retained on page reload.

### Chart Page (daily-pool-chart.html)

- View the current schedule in a tabbed interface, one tab per day.
- The table highlights different activity types using color-coded cells.
- Use the back button at the bottom to return to the admin page.

## Features

- Accessible tabbed interface using ARIA roles and attributes.
- Persistent data storage using `localStorage`.
- Distinct separation of admin input and public chart output.
- Responsive layout for various screen sizes.
- Colour key legend for clarity on schedule categories.
- Clean modular JavaScript with ES6 syntax.
- Light/dark theme toggle with `localStorage` persistence.
- Keyboard navigation for full accessibility.

[View on GitPage](https://chrisnajman.github.io/pool-schedules)

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

### Main

- `index.js`: Entry point that initializes the admin interface and applies URL parameters to determine which tab/panel to show.
- _`js-modules/`_
  - `globals.js`: Shared constants used across modules.
  - _`components/`_
    - `thead-rows.js`: Generates table header rows dynamically.
    - `tabs.js`: Handles the tabbed interface (selection, panel switching).
    - `reset-all-tab-panels.js`: Hides all tab panels.
    - `reset-all-tabs.js`: Deselects all tabs.
    - `activate-day-name.js`: Applies URL param to highlight the appropriate tab and show its panel.
    - _`local-storage/`_
      - `set-local-storage.js`: Saves admin input to `localStorage`.
      - `get-local-storage.js`: Retrieves saved data from `localStorage`.
    - `set-multiple-attributes.js`: Utility function to apply multiple attributes to an element.
  - _`schedules/`_
    - `schedules.js`: Dispatches updates across the interface.
    - _`components/`_
      - `admin-form.js`: Constructs the form element for each schedule.
      - `admin-radios.js`: Builds the input elements for time slots and activity options.
      - `admin-table.js`: Wraps form input within an accessible table layout.
  - _`chart/`_
    - `chart.js`: Initializes the public chart interface and populates it with data.
    - _`components/`_
      - `chart-table.js`: Renders a read-only view of schedule data.
      - `back-button.js`: Handles return navigation to the admin interface.

## Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Accessibility

The site includes numerous accessibility enhancements:

- Fully keyboard-navigable using tab keys and arrow keys.
- ARIA roles and attributes are implemented throughout (e.g. for tabs and panels).
- A visually hidden skip link is provided for screen reader users.
- The **colour key** at the top of the `daily-pool-chart.html` page clearly labels activity types (Lessons, Activity, Fitness, Closed) using colour swatches.
  - All colours have been carefully selected to meet [WCAG AAA](https://www.w3.org/WAI/WCAG21/quickref/) contrast requirements.
  - The key is marked with `aria-hidden="true"` to avoid redundancy for screen reader users, who receive this data contextually within each schedule table.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).

---

## Build and Deployment Notes

The following assumes you have `node` installed on your machine.

### Installing Dependencies

Before running the build commands, install the required packages (`esbuild postcss postcss-nesting postcss-cli cssnano`) as dev dependencies:

```bash
npm i
```

### Why `/docs`?

- The `/docs` folder contains optimized production-ready assets, including:
  - `bundle.js`: the JavaScript bundled into a single file (no modules)
  - `style.min.css`: the CSS processed with nesting flattened and minified
- The original source files (`index.js`, files in `js-modules/`, `style.css` with nesting, etc.) remain in the project root for easier development and editing.
- GitHub Pages is configured to serve the site from the `/docs` folder instead of the root, so your published site uses these optimized files.

> [!IMPORTANT]
> If you're publishing on GitHub Pages, make sure the Pages setting is configured to serve from the `/docs` folder on the `main` branch.

### The `postcss.config.js` file

- Located in the project root, this configuration file instructs PostCSS how to process your CSS:
  - It enables CSS nesting support with `postcss-nesting`.
  - It minifies the final CSS using `cssnano`.
- This file is automatically used during the **build** process when PostCSS runs.

### Build Script

> [!IMPORTANT]
> Before running the build script:

- Make sure you have _manually_ **copied** all files (images, favicons, etc ) that are used in the site from the project root to `/docs`.
- Make sure you have _manually_ **copied** all HTML files from the project root to `/docs` (excluding e.g. `README.md`, `LICENSE` and `.gitignore`).
- Ensure that the `script` and `link rel="stylesheet"` tags in the updated HTML files in `/docs` are coded as:

```html
<script
  src="./bundle.js"
  defer
></script>
<link
  rel="stylesheet"
  href="./style.min.css"
/>
```

... instead of the code in the HTML found in the project root:

```html
<script
  src="./index.js"
  type="module"
></script>
<link
  rel="stylesheet"
  href="./style.css"
/>
```

#### Run the Build Script

To update the built assets in `/docs` after editing source files, run:

```bash
npm run build
```

This runs the following tasks:

- Bundles and minifies JavaScript using `esbuild`.
- Processes and minifies CSS using `postcss`.

---
