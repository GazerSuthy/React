import React from 'react'
import { AppProvider } from './context'
import {useChildrenContext} from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'

// Using contexts allow App to be clean with less prop drilling
function App() {

  /* The scope of useChildrenContext is only in <AppProvider> therefore it doesn't exist here unless we wrap our whole app in <AppProvider>,  */
  const {isLoading} = useChildrenContext()
  console.log(isLoading)

  if(isLoading){
    return(
      <h1>Loading...</h1>
    )
  }

  return (
    // let's react know that this is the root component for our context that we created
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
