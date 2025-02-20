import { Canvas, flushGlobalEffects } from "@react-three/fiber"
import { myProjects } from "../constants"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Center, OrbitControls } from "@react-three/drei"




const Project = () => {

  return (
    <section className="c-space my-20" id="work">
        <p className="head-text">My work</p>
        <div className="grid lg:grid-cols-1 grid-cols-1 mt-12 gap-6">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={myProjects[0].logoStyle}>
                    <img src={myProjects[0].logo} alt="logo" />
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5 z-10">
                    <p className="text-white text-2xl font-semibold animatedText">{myProjects[0].title}</p>
                    <p className="animatedText ">{myProjects[0].desc}</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {myProjects[0].tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                    </div>

                    <a href={myProjects[0].href} className="flex items-center gap-2 text-white-600 z-10" target="_blank">
                        <p>Check Github</p>
                        <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>    
                </div>
            </div>
            
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={myProjects[1].logoStyle}>
                    <img src={myProjects[1].logo} alt="logo" />
                </div>
                <div className="flex flex-col gap-5 text-white-600 my-5 z-10">
                    <p className="text-white text-2xl font-semibold animatedText">{myProjects[1].title}</p>
                    <p className="animatedText ">{myProjects[1].desc}</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <div className="flex items-center gap-3">
                        {myProjects[1].tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                    </div>

                    <a href={myProjects[1].href} className="flex items-center gap-2 text-white-600 z-10" target="_blank">
                        <p>Check Github</p>
                        <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>    
                </div>
            </div>


        </div> 
    </section>
  )
}

export default Project
