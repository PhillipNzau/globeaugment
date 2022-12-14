import '../style.scss'
import typescriptLogo from "../typescript.svg";
import globeLogo from "../globe.svg";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${globeLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Reasech</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p class="text-3xl">the hell</p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
