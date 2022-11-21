import { Outlet } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
//////////////////////////////////////////////////

export const Layout = () => (
  <Box width='100%'>
    <Outlet />
  </Box>
)
