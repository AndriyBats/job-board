import { useNavigate, useLocation } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
// icons-material
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// features
import Location from './components/location'
import JobDetailis from './components/job-details'
import AdditionalInfo from './components/additional-info'
import AttachedImages from './components/attached-images'
//////////////////////////////////////////////////

const JobDetailed = () => {
  const navigate = useNavigate()
  const locations = useLocation()

  const {
    name,
    title,
    phone,
    email,
    salary,
    address,
    location,
    benefits,
    pictures,
    description,
    employment_type,
  } = locations.state

  return (
    <Box width='100%'>
      <Grid container>
        <Grid p={3} item lg={12} md={12} sm={12} xs={12} justifyContent='center'>
          <Box
            mt={2}
            width='100%'
            display='flex'
            p={{ xl: 3, lg: 3, md: 1, sm: 1, xs: 1 }}
            flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
            alignItems={{ xl: 'start', lg: 'start', md: 'center', sm: 'center', xs: 'center' }}
          >
            <Box
              p={{ xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
              width={{ xl: 'calc(100% - 432px)', lg: 'calc(100% - 432px)', md: '374px', sm: '374px', xs: '374px' }}
            >
              <JobDetailis title={title} salary={salary} benefits={benefits} description={description} />
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
                <AdditionalInfo benefits={benefits} employment_type={employment_type} />
                <AttachedImages pictures={pictures} />
              </Box>
              
            </Box>
            <Box
              display='flex'
              p={{ xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
              justifyContent={{ xl: 'start', lg: 'start', md: 'center', sm: 'center', xs: 'center' }}
            >
              <Location name={name} phone={phone} email={email} location={location} address={address} />
            </Box>
          </Box>
          <Button
            variant='contained'
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIosIcon sx={{ fontSize: '18px', color: 'text.darkBlue' }} />}
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
