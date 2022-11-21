// material
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
//////////////////////////////////////////////////

const AdditionalInfo = () => {

  return(
    <Box>
      <Typography sx={{ mt: '86px', fontSize: '28px', fontWeight: '700', color: 'text.darkBlue' }}>
        Additional info
      </Typography>
      <Divider />
      <Typography sx={{ mt: 2, mb: 1, fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
        Employment type
      </Typography>
      <Box display='flex' flexWrap='wrap' flexDirection='row'>
        <Box
          p={2}
          mr='6px'
          mb='6px'
          height='50px'
          display='flex'
          borderRadius='8px'
          border='1px solid'
          alignItems='center'
          borderColor='background.lightGreyBorder'
          backgroundColor='background.littleLightGrey'
          width={{ xl: '220px', lg: '220px', md: '120px', sm: '120px', xs: '120px' }}
          justifyContent={{ xl: 'center', lg: 'center', md: 'end', sm: 'end', xs: 'end' }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Full time'}
          </Typography>
        </Box>
        <Box
          p={2}
          mr='6px'
          mb='6px'
          height='50px'
          display='flex'
          borderRadius='8px'
          border='1px solid'
          alignItems='center'
          borderColor='background.lightGreyBorder'
          backgroundColor='background.littleLightGrey'
          width={{ xl: '220px', lg: '220px', md: '120px', sm: '120px', xs: '120px' }}
          justifyContent={{ xl: 'center', lg: 'center', md: 'end', sm: 'end', xs: 'end' }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Full time'}
          </Typography>
        </Box>
        <Box
          p={2}
          mr='6px'
          mb='6px'
          height='50px'
          display='flex'
          borderRadius='8px'
          border='1px solid'
          alignItems='center'
          borderColor='background.lightGreyBorder'
          backgroundColor='background.littleLightGrey'
          width={{ xl: '220px', lg: '220px', md: '120px', sm: '120px', xs: '120px' }}
          justifyContent={{ xl: 'center', lg: 'center', md: 'end', sm: 'end', xs: 'end' }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Full time'}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ mt: 4, mb: 1, fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
        Benefits
      </Typography>
      <Box display='flex' flexWrap='wrap' flexDirection='row'>
        <Box
          p={2}
          mr='6px'
          mb='6px'
          height='50px'
          display='flex'
          borderRadius='8px'
          border='1px solid'
          alignItems='center'
          justifyContent='center'
          backgroundColor='background.littleLightYelow'
          borderColor='background.littleLightYelowBorder'
          width={{ xl: '220px', lg: '220px', md: 'fit-content', sm: 'fit-content', xs: 'fit-content' }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Flexible shedule'}
          </Typography>
        </Box>
        <Box
          p={2}
          mr='6px'
          mb='6px'
          height='50px'
          display='flex'
          borderRadius='8px'
          border='1px solid'
          alignItems='center'
          justifyContent='center'
          backgroundColor='background.littleLightYelow'
          borderColor='background.littleLightYelowBorder'
          width={{ xl: '220px', lg: '220px', md: 'fit-content', sm: 'fit-content', xs: 'fit-content' }}
        >
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Flexible shedule'}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default AdditionalInfo
