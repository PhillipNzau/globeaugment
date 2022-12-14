import './style.scss'
import Typed from 'typed.js'
// import research from '../public/research.jpg'
// import { setupCanvas } from './canvas'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="flex flex-col my__header bg-gradient-to-r from-[#b06ab3] to-[#4568dc] h-screen">
  
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
    
     <div class="container mx-auto my-auto" >
<!--        <canvas id="canvas" class="my__canvas mx-auto"> -->
<!--        </canvas> -->
        <div class="my__typewriter"> 
            <h1 id="headerTxt" class="text-white font-titleFont font-extrabold text-[3rem] md:text-[5rem]"></h1>
            <p  id="bodyTxt" class="text-white font-bodyFont text-[1rem] md:text-[3rem]"></p>
        </div>

    </div>
 
  </section>
  
  <section id="about" class="pt-[100px] px-[2rem] relative overflow-hidden">
    <svg class="hidden absolute rotate-45 -top-10 -left-12  w-[150px] h-[100px] my__about__svg md:block" width="951" height="978" viewBox="0 0 951 978" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M541.258 16.7212C621.641 36.0934 692.751 79.7331 754.861 134.325C816.929 188.881 866.937 254.72 898.791 330.979C932.097 410.712 968.294 499.837 941.915 582.122C915.785 663.627 817.128 693.58 761.652 758.749C705.093 825.19 693.915 936.404 612.856 968.673C532.229 1000.77 445.508 941.629 362.057 917.824C285.063 895.86 199.714 888.89 141.275 834.149C83.3678 779.906 68.866 696.547 45.0324 620.858C21.6687 546.661 -10.09 471.994 3.09699 395.331C16.411 317.929 70.2709 256.545 118.375 194.471C169.08 129.041 215.535 54.8092 291.836 22.7377C369.835 -10.0475 459.005 -3.10135 541.258 16.7212Z" fill="#4379e0"/>
    </svg>
    <div class="container mx-auto font-bodyFont relative md:max-h-[300px] overflow-hidden"> 
      
        <p class=" text-[40px] font-extralight"><span class="text-[#3B3B3B] font-titleFont font-extrabold">About</span> Globe Augment</p>
        
        <p class="relative z-10 text-base text-[#657E8A] font-light mt-11  md:mx-auto md:w-[700px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi molestias optio perspiciatis provident quae ratione. Aperiam assumenda autem voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dolorum, facilis fugiat laboriosam modi nesciunt perspiciatis quibusdam suscipit veniam!</p>
        
        <svg class="hidden  rotate-90 my__about__svg md:block" width="951" height="978" viewBox="0 0 951 978" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M541.258 16.7212C621.641 36.0934 692.751 79.7331 754.861 134.325C816.929 188.881 866.937 254.72 898.791 330.979C932.097 410.712 968.294 499.837 941.915 582.122C915.785 663.627 817.128 693.58 761.652 758.749C705.093 825.19 693.915 936.404 612.856 968.673C532.229 1000.77 445.508 941.629 362.057 917.824C285.063 895.86 199.714 888.89 141.275 834.149C83.3678 779.906 68.866 696.547 45.0324 620.858C21.6687 546.661 -10.09 471.994 3.09699 395.331C16.411 317.929 70.2709 256.545 118.375 194.471C169.08 129.041 215.535 54.8092 291.836 22.7377C369.835 -10.0475 459.005 -3.10135 541.258 16.7212Z" fill="#4568dc85"/>
        </svg>
    </div>    
  </section>
  
  <section id="research" class="bg-indigo-900 min-h-full min-w-screen"> 
    <div class="parallax flex items-center ">
        <div class="flex items-center justify-between flex-wrap  mx-auto font-bodyFont"> 
            <div class="bg-white text-starts px-5 py-10 mb-5 md:w-[550px]  md:mx-auto "> 
         <p class=" text-[40px] font-extralight">
        <span class="text-[#3B3B3B] font-titleFont font-extrabold">Our</span> Research</p>
        
        <p class="text-base text-[#657E8A]
         font-bold  mt-11  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi molestias optio perspiciatis provident quae ratione. Aperiam assumenda autem voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dolorum, facilis fugiat laboriosam modi nesciunt perspiciatis quibusdam suscipit veniam!</p>
      </div>
<!--            <div class="card__container flex mx-auto  justify-center  flex-wrap"> -->
<!--            <div class="my__card min-w-[200px] bg-white">sdsd</div>-->
<!--            <div class="my__card  min-w-[200px]  bg-white">sdsd</div>-->
<!--            <div class="my__card  min-w-[200px]  bg-white">sdsd</div>-->
<!--         </div>-->
         </div>
    </div>
   
  </section>
  
  <section class="bg-gray-900 py-11"> 
    <p class="text-white font-titleFont text-[30px]">We are the <span class=" font-bold">Solution</span></p>
  </section>
  
  <section id="iot" class="pt-[100px] min-h-full min-w-screen"> 
    <div> 
        <p class=" text-[40px] font-extralight"><span class="text-[#3B3B3B] font-titleFont font-extrabold">IOT</span> Solutions</p>
    </div>
  
  </section>
`
new Typed("#headerTxt", {
    strings: ['Global Augment'],
    typeSpeed: 100,
    showCursor: false,
});

new Typed("#bodyTxt", {
    strings: ['Smart <strong>IOT solutions</strong> ', 'Management <strong>Masters</strong>', 'Sports <strong>Mapping Experts</strong>' ],
    typeSpeed: 150,
    startDelay: 2000,
    showCursor: false,
    loop: true
})
// setupCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)
