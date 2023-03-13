
function Navbar() {
  return (
    <div  style={{display:"flex",margin:"auto", width:"630px",height:"80%",}}>
      <div style={{display:"flex", flexDirection:"column",width:"40%",marginLeft:"30px",fontSize:"13px"}}>
      <h2>Flex Business Pro</h2>
      <p>Clean and Modern Business Theme</p>
      </div>
      <div style=
      {{display:"flex",justifyContent:"space-evenly",fontSize:"12px",
      alignItems:"center",width:"60%"}}>
      <p>Home</p>
      <p>About Us</p>
      <p>Styleguide</p>
      <p>Blog</p>
      <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Navbar
