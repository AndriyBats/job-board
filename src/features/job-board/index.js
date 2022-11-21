// import * as R from 'ramda'
// material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// api
import { useFetchJobsQuery } from '../../api/jobAPI'
// features
import JobItem from './components/item-job'
//////////////////////////////////////////////////

const JobBoard = () =>{
  const { data } = useFetchJobsQuery()
  console.log('jobs', data)

  return (
    <Box width='100%' height='100%' backgroundColor='background.grey'>
      <Grid container rowSpacing={1}>
        <Grid item lg={12} md={12} sm={12} xs={12} justifyContent='center'>
          <Box p={3} mt={2} width='100%'>
            {/* {
              data?.map((job, index) => (
                <JobItem key={index} data={job} />
              ))
            } */}
            <JobItem />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobBoard
