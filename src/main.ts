import './style.scss'
// import { setupCanvas } from './canvas'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="my__header bg-gradient-to-r from-[#b06ab3] to-[#4568dc]">
  
<!--    <video autoplay loop muted preload="none" poster="/particle-video-light.jpg">-->
<!--        <source  src="/particle-video-light.mp4" type="video/mp4">-->
<!--    </video> -->
    <header>
        <nav class="font-bodyFont flex justify-between items-center text-white">
            <a href="/" target="_blank">
                <img src="/globe.svg" class="logo vanilla" alt="TypeScript logo" />
            </a>
            
            <ul class="flex justify-between items-center space-x-5 my__hover">
                <li><a href="/research/">Research</a></li> 
                <li><a href="/research/">IOT</a></li>
                <li><a href="/research/">Management</a></li>  
            </ul>           
        </nav>
    </header>
    
     <div class="container mx-auto" >
<!--        <canvas id="canvas" class="my__canvas mx-auto"> -->
<!--        </canvas> -->
        <div class="my__typewriter"> 
            <h1 class="text-white font-titleFont">GLOBE AUGMENT</h1>
        </div>

    </div>
 
  </section>
`

// setupCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)
