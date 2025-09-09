# SV DRC 2012 - Instagram Post Generator

Cleaned & structured static web app for generating Instagram match posts.

## Project Structure
- index.html – Core markup (no inline JS/CSS)
- css/style.css – Layout, responsive design, accessibility & hover states
- js/app.js – Logic (data, rendering, caching, export)
- img/ – Preset background images

## Key Improvements
- Externalized and organized styles & scripts
- Added logo fetch caching (avoids repeat network calls)
- Background fit + dark overlay for contrast
- Preset background gallery with keyboard accessibility
- Drag & drop + click upload (5MB limit, validation)
- CORS resilience with proxy fallback (Weserv)
- Graceful placeholder badges if logos fail
- Adaptive team name text wrapping & dynamic font sizing
- Clear status messaging for generate/download steps

## Usage
1. Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari).
2. Select an upcoming match from the dropdown.
3. Choose a background (upload or preset).
4. Click "Genereer Instagram Post".
5. Review preview.
6. Click "Download Post" to save a PNG.

## Notes
- Proxy is only used at download time if original logos taint the canvas.
- Time & date values are pre-filled in `js/app.js` (adjust as needed).
- Add or remove matches by editing the `matches` array.

## Customization
- Change accent colors in `css/style.css` (`#667eea`, `#764ba2`, `#e74c3c`).
- Adjust canvas size by editing `<canvas>` attributes and related layout.

## Future Ideas
- Multi-language toggle
- Score input + final result mode
- Service worker for offline presets
- Theming (light/dark)

## License
Internal / club use. Add a license if distributing.

