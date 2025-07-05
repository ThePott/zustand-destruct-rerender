const destructuredSummaryCode = `const Apple = () => {
  const { appleStock, increaseAppleStock } = useDesctructedFruit()
  console.log("---- deconstructed apple re-rendered")
  return (...)
}

const Banana = () => {
  const { bananaStock, increaseBananaStock } = useDesctructedFruit()
  console.log("---- deconstructed banana re-rendered")
  return (...)
}

const DetructedFruitBox = () => {
  console.log("---- deconstructed app re-rendered")
  return (
    <div>
      <p>구조 분해 할당</p>
      <Apple />
      <Banana />
    </div>
  )
}
`

const oneByOneCode = `const Apple = () => {
  const appleStock = useOneByOneFruit((state) => state.appleStock)
  const increaseAppleStock = useOneByOneFruit((state) => state.increaseAppleStock)
  console.log("---- one-by-one apple re-rendered")
  return (...)
}

const Banana = () => {
  const bananaStock = useOneByOneFruit((state) => state.bananaStock)
  const increaseBananaStock = useOneByOneFruit((state) => state.increaseBananaStock)
  console.log("---- one-by-one banana re-rendered")
  return (...)
}

const DetructedFruitBox = () => {
  console.log("---- one-by-one banana re-rendered")
  return (
    <div>
      <p>구조 분해 할당</p>
      <Apple />
      <Banana />
    </div>
  )
}
`

export { destructuredSummaryCode, oneByOneCode }