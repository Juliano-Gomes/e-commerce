import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  const provider = createBrowserRouter([{
    path: '/',
    element: <Home />,
  }])
  return (
    <RouterProvider
    router={provider}
    ></RouterProvider>
  )
}

export default App
