import { useState } from 'react'
import './App.css'

function App() {
  const [isStopped, setIsStopped] = useState(true);

  const handleOnClick = () => {
    if (isStopped) {
      const randomRounds = Math.floor(Math.random() * (7 - 3) + 3);
      const randomDeg = Math.floor(Math.random() * (27 - 7) + 7);
      const finalDeg = randomRounds * 360 + randomDeg;
      const wheel = document.getElementById("wheel");
      wheel.style.transform = `rotate(${finalDeg}deg)`;
      wheel.style.transition = "transform 3s cubic-bezier(.2,.93,.43,1)";
      setIsStopped(false);

      setTimeout(() => {
        wheel.style.transform = "rotate(0deg)";
        wheel.style.transition = "none";
        setIsStopped(true);
      }, 5000);
    } else {
      return;
    }
  }

  return (
    <>
      <div className='container'>
        <h1>Prize Wheel</h1>
        <div className='out-circle' id='wheel'>
          <div className='in-circle'>

            <div className='first-container'>
              <div className='content-1'>
                <div>$100</div>
              </div>
            </div>
            <div className='second-container'>
              <div className='content-2'>
                <div>$200</div>
              </div>
            </div>
            <div className='third-container'>
              <div className='content-3'>
                <div>$300</div>
              </div>
            </div>
            <div className='fourth-container'>
              <div className='content-4'>
                <div>$400</div>
              </div>
            </div>
            <div className='fifth-container'>
              <div className='content-5'>
                <div>$500</div>
              </div>
            </div>
            <div className='sixth-container'>
              <div className='content-6'>
                <div>$600</div>
              </div>
            </div>


          </div>
        </div>

        <div className='pointer-body'></div>
        <div className='pointer-head'></div>
        <button type='button'
          className='btn'
          onClick={handleOnClick}
        >
          Start!
        </button>
      </div>
    </>
  )
}

export default App
