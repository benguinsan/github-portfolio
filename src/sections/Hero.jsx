import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import ReactLogo from "../components/ReactLogo"
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import Zaku_ii from "../components/Zaku_ii"
import { Leva, useControls } from "leva"
import Stylized_Planet from "../components/Stylized_Planet"


const Hero = () => {
  // just import leva and controls when want to modify s, p, r on ui
  // const controls = useControls('Zaku_ii',{
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: 0.1,
  //     max: 10
  //   },
  // });

  // is modified for small
  const isSmall = useMediaQuery({maxWidth: 440});
  // is Modifier for mobile devices
  const isMobile = useMediaQuery({maxWidth: 768});
  // is Modifier for tablet devices
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
        <p className="sm:text-3xl text-xl font-medium text-white text-left font-generalsans">
          Hi, I am Phuc <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">FullStack Developer</p>
        <p className="sm:text-2xl text-lg font-medium text-white-600 text-left font-generalsans">mrben1113@gmail.com</p>
      </div>

      {/* Scene for threejs (3d object) */}
      <div className="w-full h-full absolute inset-0">
        {/* Leva Controller */}
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>

            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>

            {/* Model (Object) */}
            <HeroCamera isMobile = {isMobile}>
              <Zaku_ii
                scale={sizes.zakuScale} 
                position={sizes.zakuPosition}  
                rotation={[0, 2.5, 0]}
              />
            </HeroCamera>

            {/* Group float elements */}
            <group>
              <ReactLogo 
                position={sizes.reactLogoPosition}
              />
              <Stylized_Planet
                scale={sizes.stylized_planetScale}
                position={sizes.stylized_planetPosition}
              />
            </group>  

            {/* Light */}
            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          
          </Suspense>
        </Canvas>
      </div>

      {/* button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="assets/FS_PhucNguyen.pdf" className="w-fit" target='_blank'>
          <Button name="Let's see my CV" isBeam ContainerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
      
    </section>
  )
}

export default Hero