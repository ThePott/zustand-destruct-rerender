import { Box, Button, Paper, Typography } from '@mui/material';
import { create } from 'zustand';

interface FruitState {
    appleStock: number;
    increaseAppleStock: () => void;
    bananaStock: number;
    increaseBananaStock: () => void;
}

const useDesctructedFruit = create<FruitState>()(
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
  const { appleStock, increaseAppleStock } = useDesctructedFruit()
  console.log("---- deconstructed apple re-rendered")
  return (
    <Box className="flex justify-between items-center gap-6">
      <Typography>사과: {appleStock}</Typography>
      <Button onClick={increaseAppleStock}>🍎 +1</Button>
    </Box>
  )
}

const Banana = () => {
  const { bananaStock, increaseBananaStock } = useDesctructedFruit()
  console.log("---- deconstructed banana re-rendered")
  return (
    <Box className="flex justify-between items-center gap-6">
      <Typography>바나나: {bananaStock}</Typography>
      <Button onClick={increaseBananaStock}>🍌 +1</Button>
    </Box>
  )
}

const DetructedFruitBox = () => {
  console.log("---- deconstructed app re-rendered")
  return (
    <Paper sx={{borderRadius: "24px"}} className='p-6 flex flex-col gap-3'>
      <Typography variant='h6'>구조 분해 할당</Typography>
      <Apple />
      <Banana />
    </Paper>
  )
}


export default DetructedFruitBox