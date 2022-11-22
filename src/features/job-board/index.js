import { useEffect, useState } from 'react'
// material
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
// api
import { useFetchJobsQuery } from '../../api/jobAPI'
// features
import JobItem from './components/item-job'
//////////////////////////////////////////////////

const JobBoard = () =>{
  const [page, setPage] = useState(1)
  const { data } = useFetchJobsQuery()
  const [newData, setNewData] = useState(data?.filter((element, index) => {
    if(index >= page * 4 - 4 && index < page * 4 ) return element
  }))

  useEffect(() => {
    setNewData(data?.filter((element, index) => {
      if(index >= page * 4 - 4 && index < page * 4 ) return element
    }))
  }, [page, data])

  return (
    <Box width='100%' height='100%' backgroundColor='background.grey'>
      <Grid container rowSpacing={1}>
        <Grid item lg={12} md={12} sm={12} xs={12} justifyContent='center'>
          <Box p={3} mt={2} width='100%'>
            {
              newData?.map((job, index) => (
                <JobItem key={index} data={job} />
              ))
            }
          </Box>
          <Box m={4} display='flex' justifyContent='center'>
            <Stack spacing={2} backgroundColor='background.white'>
              <Pagination count={5} shape='rounded' onChange={(event, value) => setPage(value)} />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JobBoard
