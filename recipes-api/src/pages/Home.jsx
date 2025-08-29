import {Reveal} from "../animations/Reveal"
import {Typewriter} from "../animations/Typewriter"

export default function Home() {
  return <div>
    <section className="relative h-screen overflow-hidden">
           <video
            src="https://videos.pexels.com/video-files/8879530/8879530-uhd_2732_1440_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-70">
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pb-32">
                <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl text-center px-4 tracking-in-expand">Bienvenido al mejor sitio <br /> de recetas</h1>
                <Typewriter className="text-white text-opacity-80 text-xl md:text-2xl mt-4 drop-shadow-2xl tracking-in-expand" text="Descubre cientos de recetas deliciosas"></Typewriter>
                <button className="bg-green-500 text-xl mt-10 text-white hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 animate-bounce">Registrate</button>
            </div>
        </div>
    </section>  
    <section className="relative min-h-screen overflow-hidden bg-amber-400 pb-10">
    <Reveal>
        <div className="w-full justify-center flex mt-24">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl text-center px-4">Recetas destacadas</h1>
        </div>

    
      <div className="flex flex-wrap justify-center gap-8 cursor-pointer">  {/* Contenedor de las tarjetas */}
          
              <div class="max-w-sm  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-16 justify-center items-center mx-auto slide-top hover:scale-110 transition-all duration-300 group">
                        <a href="#">
                            <img  class="w-full h-64 object-cover rounded-t-lg"  src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?_gl=1*1fjds5k*_ga*MTUwNDM4NzE1OC4xNzU2MTI3OTk5*_ga_8JE65Q40S6*czE3NTYzNDY4MTEkbzMkZzEkdDE3NTYzNDY4MzkkajMyJGwwJGgw" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-orange-600 duration-700">Alitas de Pollo a la Parrilla</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jugosas y doradas al carbón, marinadas con especias que realzan todo su sabor. Perfectas para compartir en familia o con amigos.</p>
                        </div>
                  </div>
                    

              <div class="max-w-sm  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-16 justify-center items-center mx-auto slide-top hover:scale-110 transition-all duration-300 group">
                  <a href="#">
                      <img  class="w-full h-64 object-cover rounded-t-lg"  src="https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg?_gl=1*1tysa1z*_ga*MTUwNDM4NzE1OC4xNzU2MTI3OTk5*_ga_8JE65Q40S6*czE3NTYzODQ2OTMkbzUkZzEkdDE3NTYzODQ3MTQkajM5JGwwJGgw" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-orange-600 duration-700">Postre de Fresas</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Cremoso, suave y delicado, con una textura que se deshace en la boca dejando un dulzor equilibrado y envolvente.</p>
                  </div>
              </div>
              <div class="max-w-sm  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-16 justify-center items-center mx-auto flip-up hover:scale-110 transition-all duration-300 group">
                  <a href="#">
                      <img  class="w-full h-64 object-cover rounded-t-lg"  src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?_gl=1*10b1etn*_ga*MTUwNDM4NzE1OC4xNzU2MTI3OTk5*_ga_8JE65Q40S6*czE3NTYzODQ2OTMkbzUkZzEkdDE3NTYzODUxMTIkajEzJGwwJGgw " alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-orange-600 duration-700">Pizza de Pepperoni</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Crujiente y dorada en cada bocado, con una base perfectamente horneada que combina suavidad por dentro y textura firme por fuera.</p>
                  </div>
              </div>     
      </div>
    </Reveal>
        
        

        
        
    </section>     
  </div>;
}
