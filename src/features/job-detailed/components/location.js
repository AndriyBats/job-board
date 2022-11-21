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

const Location = () => {
  const position = [17.761356, 59.020266]
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('lg'))

  return(
    <Box width={{ xl: '402px', lg: '402px', md: '372px', sm: '372px', xs: '372px' }}>
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
            {'University Hospital Giessen.'}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <PlaceIcon sx={{ color: 'text.secondary' }} />
            <Typography
              sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
            >
              {'AKH Wien, 1090 Wien, Währinger '}
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
          >
            {'+43 (01) 40400-12090,'}
          </Typography>
          <Typography
            sx={{ fontSize: '18px', fontWeight: '400', color: 'text.white' }}
          >
            {'post_akh_diz@akhwien.at'}
          </Typography>
        </Box>
        <Box width='100%' height='50%' borderRadius=' 0 0 8px 8px'>
          <MapComponent position={position} />
        </Box>
      </Box>
    </Box>
   
  )
}

export default Location
