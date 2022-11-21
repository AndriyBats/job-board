import { useState } from 'react'
import { Link } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// icons-material
import PlaceIcon from '@mui/icons-material/Place'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// helpers/constants
// components

// forms

//////////////////////////////////////////////////

const JobItem = () => {
  // console.log('data', data)
  // console.log('pictures', data.data.pictures)
  // const { pictures, description } = data.data
  const theme = useTheme()
  const [value, setValue] = useState(2)

  const isPhone = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Card sx={{ pt: 1, mt: 1, width: '100%' }}>
      <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <Box
          width={{ xl: '85px', lg: '85px', md: '66px', sm: '66px', xs: '66px' }}
          height={{ xl: '85px', lg: '85px', md: '66px', sm: '66px', xs: '66px' }}
          sx={{ '& img': { borderRadius: '50%' } }}
        >
          <img
            alt='Picture'
            width='100%'
            height='100%'
            src={'https://picsum.photos/200/300'}
          />
        </Box>
        <Box
          width= '100%'
          display= 'flex'
          justifyContent= 'space-between'
          ml={{ xl: '26px', lg: '26px', md: '19px', sm: '19px', xs: '19px' }}
          flexDirection= {{ xl: 'row', lg: 'row', md: 'column-reverse', sm: 'column-reverse', xs: 'column-reverse' }}
        >
          <Box>
            <Typography
              component={Link}
              to={'/job_detailed'}
              sx={{ fontSize: '20px', fontWeight: '700', color: 'text.darkBlue' }}
            >
              {'\n  Consequat ipsum ut laborum consectetur. Qui deserunt non amet consequat cupidatat..\n\n'}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', fontWeight: '400', color: 'text.secondary' }}
            >
              {'Department name • '}
              {'Allgemeines Krankenhaus der Stadt Wien - AKH'}
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <PlaceIcon sx={{ color: 'text.secondary' }} />
              <Typography
                sx={{ fontSize: '16px', fontWeight: '400', color: 'text.secondary' }}
              >
                {'Vienna, Austria'}
              </Typography>
            </Box>
          </Box>
          <Box display='flex' flexDirection='row' justifyContent= 'space-between'>
            <Box
              display='flex'
              m={{ xl: 4, lg: 4, md: 0, sm: 0, xs: 0 }}
              alignItems={{ xl: 'center', lg: 'center', md: 'start', sm: 'start', xs: 'start' }}
            >
              <Rating
                height='20px'
                value={value}
                color='text.darkBlue'
                name='simple-controlled'
                onChange={(event, newValue) => setValue(newValue)}
              />
            </Box>
            <Box
              display='flex'
              alignItems='end'
              flexDirection='column'
              justifyContent='space-between'
            >
              {!isPhone && <BookmarkBorderIcon sx={{ color: 'text.darkGrey' }} />}
              <Typography
                sx={{ fontSize: '16px', fontWeight: '400', width: '120px', color: 'text.secondary' }}
              >
                {'Posted 2 days ago'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default JobItem
