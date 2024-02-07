import { useLocation } from "react-router"
import Footer from "./layouts/Footer/Footer"
import Header from "./layouts/Header/Header"
import MyRoutes from "./routes/MyRoutes"

function App() {
  const location = useLocation()

  return (
    <>
      <div style={{ height: '100vh', display: "flex", flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: '1' }}><MyRoutes /></main>
        {
          location.pathname !== '/login' && location.pathname !== '/signup' &&
          <Footer />
        }
      </div>


    </>
  )
}

export default App
