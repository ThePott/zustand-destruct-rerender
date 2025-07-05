import { Box, Button, Typography } from '@mui/material';
import { create } from 'zustand'

interface FruitState {
    appleStock: number;
    increaseAppleStock: () => void;
    bananaStock: number;
    increaseBananaStock: () => void;
}

const useOneByOneFruit = create<FruitState>()(
    (set) => ({
        appleStock: 0,
        increaseAppleStock() {
            set((state) => ({ appleStock: state.appleStock + 1 }))
        },
        bananaStock: 0,
        increaseBananaStock() {
            set((state) => ({ bananaStock: state.bananaStock + 1 }))
        },
    })
)

const Apple = () => {
  const appleStock = useOneByOneFruit((state) => state.appleStock)
  const increaseAppleStock = useOneByOneFruit((state) => state.increaseAppleStock)
  console.log("---- one-by-one apple re-rendered")
  return (
    <Box>
      <Typography>사과: {appleStock}</Typography>
      <Button size='large' onClick={increaseAppleStock}>사과 +1</Button>
    </Box>
  )
}

const Banana = () => {
  const bananaStock = useOneByOneFruit((state) => state.bananaStock)
  const increaseBananaStock = useOneByOneFruit((state) => state.increaseBananaStock)
  console.log("---- one-by-one banana re-rendered")
  return (
    <Box>
      <Typography>바나나: {bananaStock}</Typography>
      <Button onClick={increaseBananaStock}>바나나 +1</Button>
    </Box>
  )
}

const OneByOneFruitBox = () => {
  console.log("---- one-by-one app re-rendered")
  return (
    <Box>
      <Typography variant='h6'>하나 씩 할당</Typography>
      <Apple />
      <Banana />
    </Box>
  )
}


export default OneByOneFruitBox