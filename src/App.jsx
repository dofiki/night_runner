import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import controls_lg from './assests/controls_lg.png'
import Player from './components/Player';
import Ground from './components/Ground';
import HelpPanel from './components/HelpPanel';
import EnemyPanel from './components/EnemyPanel';
import GrassLeft from './components/sideway/GrassLeft';
import GrassRight from './components/sideway/GrassRight';
import NightGuard from './components/NightGuard';
import Score from './components/Score';
import MobileControls from './components/MobileControls';

function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows camera={{ position: [0, 20, 28], fov: 80 }}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 30, 200]} />

        {/* helpers */}
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
        </GizmoHelper>


        {/* lights */}
        <ambientLight intensity={0.5} color="white" /> 
        <spotLight
          position={[-15, 20, 45]} 
          angle={Math.PI / 5}
          intensity={200} 
          distance={80} 
          decay={1}
          penumbra={0.5}
          castShadow
          color="white"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />  
  
       <spotLight
          position={[10, 30, -100]} 
          angle={Math.PI / 5}
          intensity={150} 
          distance={80} 
          decay={1}
          penumbra={0.5}
          castShadow
          color="white"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />  
          
       <spotLight
          position={[-20, 30, -180]} 
          angle={Math.PI / 5}
          intensity={200} 
          distance={80} 
          decay={1}
          penumbra={0.5}
          castShadow
          color="white"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />  
        {/* scene with debug body */}
        <Physics> 
            <Ground />
            <Player />
            <NightGuard />
            <HelpPanel />
            <EnemyPanel />
            <GrassLeft />
            <GrassRight />
        </Physics>

        <Score />
        
      </Canvas>
      <MobileControls />

      <div className='absolute bottom-10 hidden xl:flex'>
        <img src={controls_lg} className='w-50 opacity-45' />
      </div>

    </div>
  );
}

export default App;
