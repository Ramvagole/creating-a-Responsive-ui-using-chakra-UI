import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Flex } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box bg='tomato' w='100%' p={4} bg='#f1f1f1'>
          <h1 style={{fontSize:"25px",fontWeight:"700"}}>Our Clients Speak</h1>
          <h4>we have been working client all around world</h4>
          <Box bg='tomato' w='100%' p={4} bg='#f1f1f1'>
            <Flex flexDir={{base:"column",sm:"column",md:"column",lg:"row"}} gap={"20px"}>
              <div style={{width:"500px",height:"300px"}}>
                <div style={{backgroundColor:"white",borderRadius:"8px",position:"relative",height:"100px",marginTop:"20px"}}>
                  <h1 style={{fontSize:"25px",fontWeight:"700",marginTop:"0px"}}>Efficent Collaborating</h1>
                  <h4>Lorem ipsum dolor sit amet ,consectur adipiscing elit.Author neque sed imperdiet nibh lectus feugiat nunc sem. </h4>
                  <div style={{width:"0",height:"0",borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"15px solid white",position:"absolute",left:"170px",top:"100px"}}></div>
                </div>
                <div>
                  <img style={{width:"70px",borderRadius:"100%",marginTop:"25px",marginLeft:"145px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIlGEiw4Df0A1p3yVE9P-GSEJLBL5R9FOMI51fpYF39ybtSn3dDJbH2qBew&s'/>
                  <h1 style={{fontSize:"25px",fontWeight:"700"}}>Jane Cooper</h1>
                  <h4>CEO at ABC Corporation</h4>
                </div>
              </div>
              <div style={{width:"500px",height:"500px"}}>
                <div style={{backgroundColor:"white",borderRadius:"8px",position:"relative",height:"100px",marginTop:"20px"}}>
                  <h1 style={{fontSize:"25px",fontWeight:"700",marginTop:"0px"}}>Efficent Collaborating</h1>
                  <h4>Lorem ipsum dolor sit amet ,consectur adipiscing elit.Author neque sed imperdiet nibh lectus feugiat nunc sem. </h4>
                  <div style={{width:"0",height:"0",borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"15px solid white",position:"absolute",left:"170px",top:"100px"}}></div>
                </div>
                <div>
                <img style={{width:"70px",borderRadius:"100%",marginTop:"25px",marginLeft:"145px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIlGEiw4Df0A1p3yVE9P-GSEJLBL5R9FOMI51fpYF39ybtSn3dDJbH2qBew&s'/>
                  <h1 style={{fontSize:"25px",fontWeight:"700"}}>Jane Cooper</h1>
                  <h4>CEO at ABC Corporation</h4>
                </div>
              </div>
              <div style={{width:"500px",height:"500px"}}>
                <div style={{backgroundColor:"white",borderRadius:"8px",position:"relative",height:"100px",marginTop:"20px"}}>
                  <h1 style={{fontSize:"25px",fontWeight:"700",marginTop:"0px"}}>Efficent Collaborating</h1>
                  <h4>Lorem ipsum dolor sit amet ,consectur adipiscing elit.Author neque sed imperdiet nibh lectus feugiat nunc sem. </h4>
                  <div style={{width:"0",height:"0",borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"15px solid white",position:"absolute",left:"175px",top:"100px"}}></div>
                </div>
                <div>
                <img style={{width:"70px",borderRadius:"100%",marginTop:"25px",marginLeft:"145px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIlGEiw4Df0A1p3yVE9P-GSEJLBL5R9FOMI51fpYF39ybtSn3dDJbH2qBew&s'/>
                  <h1 style={{fontSize:"25px",fontWeight:"700"}}>Jane Cooper</h1>
                  <h4>CEO at ABC Corporation</h4>
                </div>
              </div>
            </Flex>
          </Box>
      </Box>
    </>
  )
}

export default App
