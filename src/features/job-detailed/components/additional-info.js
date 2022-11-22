// material
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
//////////////////////////////////////////////////

const AdditionalInfo = ({ benefits, employment_type }) => (
  <Box>
    <Typography sx={{ mt: '86px', fontSize: '28px', fontWeight: '700', color: 'text.darkBlue' }}>
        Additional info
    </Typography>
    <Divider />
    <Typography sx={{ mt: 2, mb: 1, fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
        Employment type
    </Typography>
    <Box display='flex' flexWrap='wrap' flexDirection='row'>
      {
        employment_type?.map((element, index) => (
          <Box
            p={2}
            mr='6px'
            mb='6px'
            key={index}
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
              {element}
            </Typography>
          </Box>
        ))
      }
    </Box>
    <Typography sx={{ mt: 4, mb: 1, fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
        Benefits
    </Typography>
    <Box display='flex' flexWrap='wrap' flexDirection='row'>
      {
        benefits?.map((benefit, index) => (
          <Box
            p={2}
            mr='6px'
            mb='6px'
            key={index}
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
              {benefit}
            </Typography>
          </Box>
        ))
      }
    </Box>
  </Box>
)

export default AdditionalInfo
