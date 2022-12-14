import '../style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="w-screen h-screen flex items-center"> 
  
      <div class="w-[500px] mx-auto"> 
          <img src="https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg" 
        alt="under construction">
        
        <p class="mb-5">Kindly go back home from here</p> 
        <a href="/" 
        class="font-bodyFont text-black text-sm border-2 text-white py-2 px-10 rounded" type="button">
                Home
              </a>
      </div>
        
        
  </section>   
`
