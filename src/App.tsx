import { Box } from '@mui/material'
import DetructedFruitBox from './components/Destruct'
import OneByOneFruitBox from './components/OneByOne'

const App = () => {
  console.log("---- app re-rendered")
  return (
    <Box className='flex justify-center items-center h-[100vh] w-[100vw]'>
      <DetructedFruitBox />
      <OneByOneFruitBox />
    </Box>
  )
}

export default App
