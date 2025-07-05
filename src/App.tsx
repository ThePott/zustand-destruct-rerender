import { Box, Typography } from '@mui/material'
import FruitBox from './components/FruitBox'
import { logAtStart } from './asciiArt'
import { useEffect } from 'react'

const App = () => {
  setTimeout(
    () => console.log(logAtStart),
    500
  )
  useEffect(
    () => {
      return () => console.log("---- app re-rendered")
    }
  )
  
  return (
    <Box className='h-[100vh] w-[100vw] py-6 flex justify-center overflow-y-scroll flex-wrap gap-6'>
      <Box className="flex flex-col gap-6 items-center">

        <Typography variant='h5' className='font-semibold'>Zustand Store State을 어떻게 할당할까</Typography>
        <Typography variant='h6'>개발자 도구에서 콘솔창을 열어보세요</Typography>

        <Box className='flex gap-6 flex-wrap justify-center items-start'>
          <FruitBox usage='DESTRUCTURED'>
            <FruitBox.Apple />
            <FruitBox.Banana />
          </FruitBox>

          <FruitBox usage='ONE_BY_ONE'>
            <FruitBox.Apple />
            <FruitBox.Banana />
          </FruitBox>
        </Box>

      </Box>
    </Box>
  )
}

export default App
