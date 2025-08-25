// src/pages/Home.jsx



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
                <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl text-center px-4">Bienvenido al mejor sitio <br /> de recetas</h1>
                <p className="text-white text-opacity-80 text-xl md:text-2xl mt-4 drop-shadow-2xl">
                              Descubre cientos de recetas deliciosas
                </p>
                <button className="bg-green-500 text-xl mt-10 text-white hover:bg-orange-600 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 animate-bounce">Registrate</button>
            </div>
            
        </div>
    </section>       
  </div>;
}
