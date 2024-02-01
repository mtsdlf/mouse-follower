import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  return(
    <>
      <div style={{
    position: 'absolute',
    backgroundColor: '#09f',
    borderRadius: '50%',
    opacity: 0.8 ,
    pointerEvents: 'none',
    left: -25,
    right: -25,
    width: 50,
    height: 50,
    transform: `translate(${position.x}px, ${position.y}px)`
  }}>

  </div>
  <h3>Proyecto 3</h3>
   <button onClick={()=>{
    setEnabled(!enabled)
   }
  }
  >{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
  
}
function App () {


  EventListener('pointermove', handleMove)
      }
  
    }, [enabled]) 
    return(
      <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8 ,
        pointerEvents: 'none',
        left: -25,
        right: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
    
      </div>
      <h3>Proyecto 3</h3>
       <button onClick={()=>{
        setEnabled(!enabled)
       }
      }
      >{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
      </>
    )
  } 
 

  return (
  <main>
    <FollowMouse />
  </main>
  )
}

export default App
