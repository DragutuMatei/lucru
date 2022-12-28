/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { Cylinder, useGLTF } from '@react-three/drei'
import { useBox, useCylinder } from '@react-three/cannon';

export default function Cone({ position, props }) {

  const { nodes, materials } = useGLTF('/cone.glb');

  useEffect(() => {
    console.log("vrei reset la con?");

    const keyDown = (e) => {
      if (e.key === "r") {
        coneAPICylinder.position.set(position[0], position[1], position[2]);
        coneAPICylinder.velocity.set(0, 0, 0);
        coneAPICylinder.angularVelocity.set(0, 0, 0);
        coneAPICylinder.rotation.set(0, 0, 0);
      }
    }

    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };

  }, []);

  useEffect(() => {
    setTimeout(() => {
      coneAPICylinder.position.set(position[0], position[1], position[2]);
      coneAPICylinder.velocity.set(0, 0, 0);
      coneAPICylinder.angularVelocity.set(0, 0, 0);
      coneAPICylinder.rotation.set(0, 0, 0);
    }, 100);
  }, []);

  const [coneBody, coneAPI] = useBox(
    () => ({
      args: [0.23, .5, 0.23],
      mass: .8,
      position: position
    }),
    useRef(null)
  );

  const [coneBodyCylinder, coneAPICylinder] = useCylinder(
    () => ({
      args: [.71, 1.4, 3.4, 32, 1, true],
      mass: 1,
      position: position,
      type: 'Dynamic'
    }),
    useRef(null)
  );

  return (
    <group ref={coneBodyCylinder}>
      {/* <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial attach={"material"} />
      </mesh> */}
      {/* <mesh position={[0, (3.4 / 2) - 1.5, 0]}>
        <cylinderGeometry args={[.71, 1.4, 3.4, 32, 1, true]} attach="geometry" />
        <meshStandardMaterial attach={"material"} color={0x000000} />
      </mesh> */}
      <group {...props} dispose={null} scale={[0.028, 0.028, 0.028]} position={[0, -1.55, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
          <meshStandardMaterial attach={"material"} color={0x373cdb} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/cone.glb')
