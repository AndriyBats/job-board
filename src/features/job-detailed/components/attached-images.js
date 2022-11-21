// material
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
//////////////////////////////////////////////////

const AttachedImages = () => {

  return(
    <Box>
      <Typography sx={{ mt: '87px', fontSize: '28px', fontWeight: '700', color: 'text.darkBlue' }}>
        Attached images
      </Typography>
      <Divider />
      <Box sx={{ mt: 2 }} display='flex' flexWrap='wrap' flexDirection='row'>
        <Box
          mr={1}
          mb={1}
          width={{ xl: '200px', lg: '200px', md: '200px', sm: '200px', xs: '200px' }}
          height={{ xl: '120px', lg: '120px', md: '120px', sm: '120px', xs: '120px' }}
          sx={{ '& img': { borderRadius: '8px' } }}
        >
          <img
            alt='Picture'
            width='100%'
            height='100%'
            src={'https://picsum.photos/200/300'}
          />
        </Box>
        <Box
          mr={1}
          mb={1}
          width={{ xl: '200px', lg: '200px', md: '200px', sm: '200px', xs: '200px' }}
          height={{ xl: '120px', lg: '120px', md: '120px', sm: '120px', xs: '120px' }}
          sx={{ '& img': { borderRadius: '8px' } }}
        >
          <img
            alt='Picture'
            width='100%'
            height='100%'
            src={'https://picsum.photos/200/300'}
          />
        </Box>
        <Box
          mr={1}
          mb={1}
          width={{ xl: '200px', lg: '200px', md: '200px', sm: '200px', xs: '200px' }}
          height={{ xl: '120px', lg: '120px', md: '120px', sm: '120px', xs: '120px' }}
          sx={{ '& img': { borderRadius: '8px' } }}
        >
          <img
            alt='Picture'
            width='100%'
            height='100%'
            src={'https://picsum.photos/200/300'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AttachedImages
