
import beach from '/beach.mp3'
import logo from '/logo.png'
import './App.css'

function App() {

  return (
    <>
        <audio id="audio" loop autoPlay> 
          <source src={beach} type="audio/mp3"/>
        </audio>
        <div className="sky"></div> 
    <div className="sand"></div>
    <div className="wet-sand"></div>
    <div className="sea">
        <div className="seafoam"></div>
    </div>
    <div className="palm-tree">
        <div className="trunk"></div>
        <div className="leaves">
            <div className="leaves-1"></div>
            <div className="leaves-2"></div>
            <div className="leaves-3"></div>
        </div>
    </div>
    <div className="sand-front"></div>
    <img src={logo} className="App-logo" alt="logo" />
    <p className='coming-soon'>Big waves are coming!<br/> be ready with your surf boards</p>
    </>
  )
}

export default App
