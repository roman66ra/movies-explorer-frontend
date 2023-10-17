import { useEffect, useState } from "react"

export default function useWindowSize() {
    const [size, setSize] = useState(0)
  
    useEffect(() => {
      function onResize() {
        setSize({
          width: window.innerWidth,
        })
      }
      onResize()
  
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [])
  
    return size
  }