import './style.scss'
import Typed from 'typed.js'
// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
   
    <div class="container mx-auto font-bodyFont relative md:max-h-[300px] overflow-hidden"> 
      
        <p class=" text-[40px] font-extralight"><span class="text-[#3B3B3B] font-titleFont font-extrabold">About</span> Globe Augment</p>
        
        <p class="text-base text-[#657E8A] font-light mt-11  md:mx-auto md:w-[700px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi molestias optio perspiciatis provident quae ratione. Aperiam assumenda autem voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dolorum, facilis fugiat laboriosam modi nesciunt perspiciatis quibusdam suscipit veniam!</p>
        
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
        <span class="text-[#3B3B3B] font-titleFont font-extrabold">Something</span> Catchy</p>
        
        <p class="text-base text-[#657E8A]
         font-bold  mt-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi molestias optio perspiciatis provident quae ratione. Aperiam assumenda autem voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dolorum, facilis fugiat laboriosam modi nesciunt perspiciatis quibusdam suscipit veniam!</p>
      </div>
<!--            <div class="card__container flex mx-auto  justify-center  flex-wrap"> -->
<!--            <div class="my__card min-w-[200px] bg-white">sdsd</div>-->
<!--            <div class="my__card  min-w-[200px]  bg-white">sdsd</div>-->
<!--            <div class="my__card  min-w-[200px]  bg-white">sdsd</div>-->
<!--         </div>-->
         </div>
    </div>
   
  </section>
  
  <section id="iot" class="py-[100px] min-h-full min-w-screen relative overflow-hidden"> 
    <svg class="hidden absolute -top-[880px]  rotate-270 my__about__svg md:block" width="951" height="978" viewBox="0 0 951 978" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M541.258 16.7212C621.641 36.0934 692.751 79.7331 754.861 134.325C816.929 188.881 866.937 254.72 898.791 330.979C932.097 410.712 968.294 499.837 941.915 582.122C915.785 663.627 817.128 693.58 761.652 758.749C705.093 825.19 693.915 936.404 612.856 968.673C532.229 1000.77 445.508 941.629 362.057 917.824C285.063 895.86 199.714 888.89 141.275 834.149C83.3678 779.906 68.866 696.547 45.0324 620.858C21.6687 546.661 -10.09 471.994 3.09699 395.331C16.411 317.929 70.2709 256.545 118.375 194.471C169.08 129.041 215.535 54.8092 291.836 22.7377C369.835 -10.0475 459.005 -3.10135 541.258 16.7212Z" fill="#4568dc85"/>
        </svg>
    <div class="container mx-auto overflow-hidden"> 
        <p class=" text-[40px] font-extralight"><span class="text-[#3B3B3B] font-titleFont font-extrabold">What</span> We offer</p>
        
          <div class="swiper mt-11">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide flex flex-col justify-center items-center"> 
                    <img src="https://html.dynamiclayers.net/at/sensis-html/img/icon-2.png" alt="ico" class="h-[50px] w-[50px] mb-5">
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                    
                </div>
                <div class="swiper-slide flex flex-col justify-center items-center"> 
                <img src="https://html.dynamiclayers.net/at/sensis-html/img/icon-4.png" alt="ico" class="h-[50px] w-[50px] mb-5">
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                </div>
                <div class="swiper-slide flex flex-col justify-center items-center"> 
                <img src="https://html.dynamiclayers.net/at/sensis-html/img/icon-3.png" alt="ico" class="h-[50px] w-[50px] mb-5">
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                </div>
              </div>

              <!-- If we need scrollbar -->
              <div class="swiper-scrollbar"></div>
          </div>
    </div>
  </section>
  
   <section class="bg-gray-900 py-9"> 
    <p class="text-white font-titleFont text-[30px]">We are the <span class=" font-bold">Solution</span></p>
  </section>
  
  <section class="py-[100px] overflow-hidden"> 
    <div class=" md:flex items-center"> 
        <div class="hidden h-[400px] md:block container mx-auto relative  "> 
          <svg class="hidden absolute rotate-90 -left-[700px] my__about__svg md:block" width="951" height="978" viewBox="0 0 951 978" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M541.258 16.7212C621.641 36.0934 692.751 79.7331 754.861 134.325C816.929 188.881 866.937 254.72 898.791 330.979C932.097 410.712 968.294 499.837 941.915 582.122C915.785 663.627 817.128 693.58 761.652 758.749C705.093 825.19 693.915 936.404 612.856 968.673C532.229 1000.77 445.508 941.629 362.057 917.824C285.063 895.86 199.714 888.89 141.275 834.149C83.3678 779.906 68.866 696.547 45.0324 620.858C21.6687 546.661 -10.09 471.994 3.09699 395.331C16.411 317.929 70.2709 256.545 118.375 194.471C169.08 129.041 215.535 54.8092 291.836 22.7377C369.835 -10.0475 459.005 -3.10135 541.258 16.7212Z" fill="#4568dc85"/>
        </svg>
            <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="pulse absolute top-[30px] left-[50px] h-[50px] w-[50px] rounded-full "> 
            <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="pulse absolute top-[60px] left-1/2  h-[50px] w-[50px] rounded-full "> 
            <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="pulse absolute top-[120px] left-[150px]  h-[50px] w-[50px] rounded-full "> 
            
             <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="pulse absolute top-[240px] left-[250px]  h-[50px] w-[50px] rounded-full "> 
        </div>
        <div class="container mx-auto overflow-hidden md:text-start"> 
         <p class=" text-[30px] font-extralight font-titleFont ">See <span class="text-[#3B3B3B] font-extrabold">What people</span> say about us</p>
         
         <div class="swiper2 mt-11 ">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide flex flex-col justify-center text-start"> 
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A] mb-10 md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                   
                   <div class="flex items-center space-x-3 "> 
                     <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="h-[50px] w-[50px] rounded-full "> 
                     <div class=""> 
                         <p class="font-bold text-[18px] font-titleFont text-[#3B3B3B]">Growth strategy</p>
                        <p class="font-extralight font-bodyFont text-base  text-[#657E8A]">CEO Somewhere</p>
                     </div>
                   </div>
                </div>
                
                <div class="swiper-slide flex flex-col justify-center text-start"> 
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A] mb-10 md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                   
                   <div class="flex items-center space-x-3 "> 
                     <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="h-[50px] w-[50px] rounded-full "> 
                     <div class=""> 
                         <p class="font-bold text-[18px] font-titleFont text-[#3B3B3B]">Growth strategy</p>
                        <p class="font-extralight font-bodyFont text-base  text-[#657E8A]">CEO Somewhere</p>
                     </div>
                   </div>
                </div>
                
                <div class="swiper-slide flex flex-col justify-center text-start"> 
                    <p class="font-bold text-[20px] font-titleFont mb-3 text-[#3B3B3B]">Growth strategy</p>
                    <p class="font-bodyFont text-base text-[#657E8A] mb-10 md:w-[500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, adipisci eius enim fugit natus numquam odit omnis pariatur, quidem repellat sint sit tenetur.</p>
                   
                   <div class="flex items-center space-x-3 "> 
                     <img  src="https://html.dynamiclayers.net/at/sensis-html/img/testi-3.jpg" alt="ico" class="h-[50px] w-[50px] rounded-full "> 
                     <div class=""> 
                         <p class="font-bold text-[18px] font-titleFont text-[#3B3B3B]">Growth strategy</p>
                        <p class="font-extralight font-bodyFont text-base  text-[#657E8A]">CEO Somewhere</p>
                     </div>
                   </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  </section>
  
  <footer class="py-[100px] my__footer"> 
    <div class="flex flex-wrap items-center justify-center  md:w-3/4 mx-auto "> 
        <div class="bg-white text-starts px-5 py-10 mb-5 md:w-[500px] md:mx-auto text-start"> 
             
          
         <p class=" text-[40px] font-extralight">
        <span class="text-[#3B3B3B] font-titleFont font-extrabold">Questions?</span> Reach out today</p>
        
        <p class="text-base text-[#657E8A]
         font-bold  mt-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi molestias optio perspiciatis provident quae ratione. Aperiam assumenda autem voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur dolorum, facilis fugiat laboriosam modi nesciunt perspiciatis quibusdam suscipit veniam!</p>
      
        </div>
        
        <div class="md:w-[500px] md:mx-auto ">
          <form class="text-start w-full max-w-sm my__form md:min-h-[300px] p-5">
           <div class="flex items-center space-x-5 mb-10"> 
                <div class="border-b border-gray-400 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-white placeholder-gray-400 font-bodyFont font-light placeholder-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" aria-label="First name">
             </div>
                <div class="border-b border-gray-400 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-white placeholder-gray-400 font-bodyFont font-light mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Email">
             </div>
           </div>
           <div class="border-b border-gray-400 py-2 w-full">
                <textarea class="appearance-none bg-transparent border-none w-full text-white placeholder-gray-400 font-bodyFont font-light mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Message" aria-label="Message"></textarea>
           </div>
           <button class="font-bodyFont mt-10 bg-transparent hover:bg-white border-white hover:border-white hover:text-black text-sm border-2 text-white py-2 px-10 rounded" type="button">
                Contact us
              </button>
          </form>
            
        </div>
    </div>
  
  </footer>
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

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// setupCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)
