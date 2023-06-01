import { useState,useEffect } from "react"
export const Message = () => {
    const [coords, setCoords] = useState({x:0,Y:0})
    useEffect(() => {
        const onMouseMove = ({x,y}) => {
            setCoords({x,y});
            console.log(coords);
        }
        window.addEventListener('mousemove', onMouseMove);
      return () => {
        window.removeEventListener('mousemove',onMouseMove);
      }
    }, [])
    
  return (
    <>
        <h3>Usuario existente</h3>
        {JSON.stringify(coords)}
    </>
  )
}