import { GlobalStyles } from '@mui/material';
import Home from "./pages/Home/Home"


function App() {

  return (
    <>
      <GlobalStyles styles={{
        html: { scrollBehavior: 'smooth' }
      }} />

      <Home />
    </>
  )
}

export default App
