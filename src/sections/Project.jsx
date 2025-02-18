import { Canvas, flushGlobalEffects } from "@react-three/fiber"
import { myProjects } from "../constants"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Center, OrbitControls } from "@react-three/drei"
import DemoComputer from "../components/DemoComputer"



const Project = () => {

  return (
    <section className="c-space my-20" id="work">
        <p className="head-text">My work</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={myProjects[0].spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                </div>
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

                    <a href="https://github.com/tthanhvu002sgu/bookingcare-fe" className="flex items-center gap-2 text-white-600" target="_blank">
                        <p>Check Github</p>
                        <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>    
                </div>
            </div>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                        

                    <ambientLight intensity={5}/>
                    <directionalLight position={[10, 10, 5]} intensity={0.5}/>

                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                <DemoComputer texture={myProjects[0].texture}/>
                            </group>
                        </Suspense>
                    </Center>
                    
                    {/* camera interact (rotation, zoom, pan) */}
                    {/* Thuộc tính này giới hạn góc nghiêng tối đa của camera so với trục Y (trục dọc). */}
                    <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>

                </Canvas>
            </div>

        </div> 
    </section>
  )
}

export default Project