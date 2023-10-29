import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader";
const Ball = (props : any) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} 
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]}/>
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0,0,1]}
          map={decal}
          rotation={[2*Math.PI , 0 ,6.25]}
          // fltShading
          />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon} : any) => {
  return(
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    // shadows
    // camera={{position:[20,3,5],fov:30}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          // maxPolarAngle={Math.PI/2}
          // minPolarAngle={Math.PI/2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default BallCanvas