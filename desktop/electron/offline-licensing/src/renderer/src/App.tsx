import { App as AppWrapper } from 'antd'
import { MemoryRouter, Route, Routes } from 'react-router'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home/HomePage'
import CreatePage from './pages/create/CreatePage'
import ValidatePage from './pages/validate/ValidatePage'
import AboutPage from './pages/about/AboutPage'

function App(): React.JSX.Element {
  return (
    <AppWrapper>
      <MemoryRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/validate" element={<ValidatePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    </AppWrapper>
  )
}

export default App
