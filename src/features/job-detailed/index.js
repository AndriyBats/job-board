// import * as R from 'ramda'
import { Link } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// icons-material

// api
import { useFetchJobsQuery } from '../../api/jobAPI'
// features
import Location from './components/location'
import JobDetailis from './components/job-details'
import AdditionalInfo from './components/additional-info'
import AttachedImages from './components/attached-images'
//////////////////////////////////////////////////

const JobDetailed = () =>{
  const { data } = useFetchJobsQuery()
  console.log('jobs', data)

  return (
    <Box width='100%'>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} justifyContent='center'>
          <Box
            mt={2}
            width='100%'
            display='flex'
            p={{ xl: 3, lg: 3, md: 1, sm: 1, xs: 1 }}
            flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
            alignItems={{ xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' }}
          >
            <Box
              p={{ xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}

              width={{ xl: 'calc(100% - 432px)', lg: 'calc(100% - 432px)', md: '372px', sm: '372px', xs: '372px' }}
            >
              <JobDetailis />
              <Box
                display='flex'
                flexDirection={{
                  xl: 'column',
                  lg: 'column',
                  md: 'column-reverse',
                  sm: 'column-reverse',
                  xs: 'column-reverse',
                }}
              >
                <AdditionalInfo />
                <AttachedImages />
              </Box>
              
            </Box>
            <Box
              display='flex'
              p={{ xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
              justifyContent={{ xl: 'start', lg: 'start', md: 'center', sm: 'center', xs: 'center' }}
            >
              <Location />
            </Box>
          </Box>
          <Button
            variant='contained'
            startIcon={<ArrowBackIosIcon sx={{ fontSize: '18px', color: 'text.darkBlue' }} />}
            component={Link}
            to={'/'}
            sx={{
              mt: '89px',
              width: '221px',
              height: '50px',
              fontSize: '12px',
              backgroundColor: 'background.lightGrey',
            }}
          >
            <Typography sx={{ fontSize: '12px', fontWeight: '600', color: 'text.darkBlue' }}>
              {'RETURN TO JOB BOARD'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobDetailed
