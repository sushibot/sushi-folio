import React, {useRef, useState, useEffect} from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import styles from "./geometry.module.css"

export default function Geometry(){

    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});

    function Tetrahedron(props) {
        // This reference gives us direct access to the THREE.Mesh object
        const ref = useRef()
        // Hold state for hovered and clicked events
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => (ref.current.rotation.x += 0.01))
        useFrame((state, delta) => (ref.current.rotation.y += props.spin * Math.PI))
        // Return the view, these are regular Threejs elements expressed in JSX
        return (
          <mesh
            {...props}
            ref={ref}
            scale={props.scale}>
            <tetrahedronGeometry args={[3,0]}  />
            <meshStandardMaterial color={props.color} wireframe={props.wireframe}/>
          </mesh>
        )
      }
      var gyroPresent = false;
      window.addEventListener("devicemotion", function(event){
          console.log(event.target)
          if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
              gyroPresent = true;
      });
      
      
    return<>
    
    <Canvas style={{width: size.width, height: size.height}}>
      <ambientLight intensity={0.5} />
      <Tetrahedron position={[2.3,2,1]} spin={0.001} scale={0.1}/>
      <Tetrahedron position={[1.3,1.6,1]} spin={0.002} scale={0.4} color={"rgba(227, 227, 241, 0.959)"} wireframe={true}/>

      <Tetrahedron position={[-1.3,-0.6,-0.4]} spin={0.004} scale={0.5} color={'rgba(159, 221, 255, 0.6)'}/>
    </Canvas>
    </>
}