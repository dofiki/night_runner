import { Text } from "@react-three/drei";
import degToRad from "../utils/degToRad";
import usePlayerStore from "../store/playerStore";

function Score() {

  const totalScore = usePlayerStore((state)=>{return state.totalScore})

  return (
    <mesh>
         <Text
            position={[-3, 21, 0]} 
            rotation={[degToRad(0),degToRad(0),degToRad(360)]}
            fontSize={0.8}
            color="white"
            anchorX={0}
            anchorY={0}> 
            
             Score: {totalScore} pts.
        </Text>
    </mesh>
  )
}

export default Score
