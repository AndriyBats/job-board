// material
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
// icons-material
import PlaceIcon from '@mui/icons-material/Place'
// components
import { MapComponent } from '../../../components/map'
//////////////////////////////////////////////////

const Location = ({ name, phone, email, location, address }) => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('lg'))

  return(
    <Box width={{ xl: '402px', lg: '402px', md: '374px', sm: '374px', xs: '374px' }}>
      {isPhone &&
      (
        <Box mb={4}>
          <Typography sx={{ fontSize: '28px', fontWeight: '700', color: 'text.darkBlue' }}>
            Contacts
          </Typography>
          <Divider />
        </Box>
      )
      }
      <Box width='100%' height='436px'>
        <Box p='30px 60px' height='50%' borderRadius='8px 8px 0 0' backgroundColor='background.darkBlue'>
          <Typography sx={{ fontSize: '20px', fontWeight: '700', color: 'text.white' }}>
            {'Department name.'}
          </Typography>
          <Typography sx={{ fontSize: '20px', fontWeight: '700', color: 'text.white' }}>
            {name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <PlaceIcon sx={{ color: 'text.secondary' }} />
            <Typography
              sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
            >
              {address}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
          >
            {phone}
          </Typography>
          <Typography
            sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
          >
            {email}
          </Typography>
        </Box>
        <Box width='100%' height='50%' borderRadius=' 0 0 8px 8px'>
          <MapComponent position={[location.lat, location.long]} />
        </Box>
      </Box>
    </Box>
   
  )
}

export default Location
