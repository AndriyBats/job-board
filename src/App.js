import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
// utilities
import { Layout } from './components/layout'
//////////////////////////////////////////////////

// routes
const JobBoard = lazy(() => import('./features/job-board'))
const JobDetailed = lazy(() => import('./features/job-detailed'))

const App = () => (
  <Suspense fallback={<Box width='100vh' height='100vh' backgroundColor='background.grey' />}>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<JobBoard />} />
        <Route path={'/job_detailed'} element={<JobDetailed />} />
      </Route>
    </Routes>
  </Suspense>
)

export default App
