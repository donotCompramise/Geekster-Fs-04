
import './Container.css'
import MainContent from './MainContent'
function Card() {
  return (
    <div id='container'>
      <div id="navbar">
      <div>
      <h2>logo</h2>
      </div>
      <div style={{display:"flex",justifyContent:'space-around',alignItems:"center",width:"200px"}}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      </div>
      <div style={{display:"flex",justifyContent:'space-around',alignItems:"center",width:"120px"}}>
      <img src='https://img.icons8.com/color/256/facebook-new.png' height="30px" width="30px" />
      <img src='https://img.icons8.com/ios/256/twitter.png'  height="30px" width="30px"  />
      <img src='https://img.icons8.com/ios/256/instagram-new.png'  height="30px" width="30px" />
      </div>
      </div>
      <MainContent />
    </div>
    
  )
}

export default Card
