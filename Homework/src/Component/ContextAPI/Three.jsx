import React, { useContext } from 'react'
import { Absorb } from '../../App'

const Three = () => {
    const user = useContext(Absorb)
  return (
    <div>
        {user}
    </div>
  )
}

export default Three