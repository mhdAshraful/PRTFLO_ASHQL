import { useState, useEffect } from 'react'

function useResize() {

  const [innerWidth, seInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const sized = window.addEventListener("resize", () =>
      seInnerWidth(window.innerWidth)
    )
    return () => sized
  }, [window.innerWidth])

  return innerWidth

}

export default useResize