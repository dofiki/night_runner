import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import usePlayerStore from "../store/playerStore";

export default function MobileControls() {

  const playerPos = usePlayerStore(state => state.playerPosition);
  const setPlayerPos = usePlayerStore(state => state.setPlayerPosition);

  function moveLeft() {
    const [x, y, z] = usePlayerStore.getState().playerPosition;
    setPlayerPos([x - 1, y, z]);
  }

  function moveRight() {
    const [x, y, z] = usePlayerStore.getState().playerPosition;
    setPlayerPos([x + 1, y, z]);
  }

  function fireGun() {
    window.dispatchEvent(new Event("mousedown"));
  }

  return (
    <div className="absolute bottom-15 w-full flex justify-around gap-10 xl:hidden z-50">
      <div className="flex gap-5">  
        <button  onMouseDown={(e) => e.stopPropagation()} onClick={moveLeft}>
          <FaChevronCircleLeft className="text-5xl text-white" /></button>
        <button   onMouseDown={(e) => e.stopPropagation()} onClick={moveRight}>
          <FaChevronCircleRight className="text-5xl text-white" /></button>
      </div>
      <button onMouseDown={(e) => e.stopPropagation()} onClick={fireGun}>
        <FaGun className="text-5xl text-white" /></button>
    </div>
  );
}
