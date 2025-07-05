import { Box } from '@mui/material'
// import DetructedFruitBox from './components/Destruct'
// import OneByOneFruitBox from './components/OneByOne'
import FruitBox from './components/common/FruitBox'

const App = () => {
  console.log("---- app re-rendered")
  return (
    <Box className='flex justify-center items-center h-[100vh] w-[100vw] gap-6'>
      
      <FruitBox usage='DESTRUCTURED'>
        <FruitBox.Apple />
        <FruitBox.Banana />
      </FruitBox>
      
      <FruitBox usage='ONE_BY_ONE'>
        <FruitBox.Apple />
        <FruitBox.Banana />
      </FruitBox>

    </Box>
  )
}

export default App
