// material
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ShareIcon from '@mui/icons-material/Share'
import SquareIcon from '@mui/icons-material/Square'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
//////////////////////////////////////////////////

const JobDetailis = () => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('lg'))

  const BootstrapButton = styled(Button)({
    fontSize: 12,
    fontWeight: 600,
    boxShadow: 'none',
    lineHeight: '16px',
    fontStyle: 'normal',
    padding: '18px 30px',
    textTransform: 'none',
    fontFamily: 'Proxima Nova',
    backgroundColor: '#3A4562',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  })

  return(
    <>
      <Box
        display='flex'
        justifyContent= 'space-between'
        flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
        width={{ xl: 'calc(100% - 432px)', lg: 'calc(100% - 432px)', md: '372px', sm: '372px', xs: '372px' }}
      >
        <Typography sx={{ fontSize: '28px', fontWeight: '700', color: 'text.darkBlue' }}>
            Job Details
        </Typography>
        <Divider />
        <Box
          mr={0}
          mt={{ xl: 0, lg: 0, md: 4, sm: 4, xs: 4 }}
          display='flex' flexDirection='row' alignItems='center'
        >
          {isPhone && <StarBorderIcon sx={{ mr: 2, fontSize: '20px', color: 'text.darkGrey' }} />}
          {!isPhone && <BookmarkBorderIcon sx={{ mr: 2, fontSize: '20px', color: 'text.darkGrey' }} />}
          <Typography sx={{ mr: 4, fontSize: '18px', fontWeight: '400', color: 'text.secondary' }}>
                    Save to my list
          </Typography>
          <ShareIcon sx={{ mr: 2, fontSize: '20px', color: 'text.darkGrey' }} />
          <Typography sx={{ fontSize: '18px', fontWeight: '400', color: 'text.secondary' }}>
                  Share
          </Typography>
        </Box>
      </Box>
      {!isPhone && <Divider />}
      {!isPhone && <BootstrapButton sx={{ mt: 4 }} variant='contained'>
                APPLY NOW
      </BootstrapButton>}
      <Box
        sx={{ mt: 4 }}
        display='flex'
        flexDirection={{ xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' }}>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: 'text.darkBlue' }}>
            {'Arb eitsme dizi ner/-in / Bet riebsmed iziner/-in (m/w/d) oder einen Arzt'}
          </Typography>
          {!isPhone && <Typography
            sx={{
              mt: 1,
              mb: 1,
              width: '120px',
              fontSize: '16px',
              fontWeight: '400',
              color: 'text.secondary',
            }}
          >
            {'Posted 2 days ago'}
          </Typography>}
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          {isPhone && <Typography
            sx={{
              mt: 1,
              mb: 1,
              width: '120px',
              display: 'flex',
              fontSize: '16px',
              fontWeight: '400',
              alignItems: 'center',
              color: 'text.secondary',
            }}
          >
            {'Posted 2 days ago'}
          </Typography>}
          <Box
            ml='60px'
            display='flex'
            flexDirection={{
              xl: 'column',
              lg: 'column',
              md: 'column-reverse',
              sm: 'column-reverse',
              xs: 'column-reverse',
            }}
          >
            <Box display='flex' alignItems='center' flexDirection='row'>
              <EuroSymbolIcon sx={{ fontSize: '20px', color: 'text.darkBlue' }} />
              <Typography sx={{ width: '140px', fontSize: '20px', fontWeight: '700', color: 'text.darkBlue' }}>
                {'54 000—60 000'}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
              {'Brutto, per year'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ mt: 2, fontSize: '18px', fontWeight: '400', color: 'text.darkBlue' }}>
        {'Arbeclkmds ajcoiejocjcokso kjcojcmcpd sjcodspckcp dscner/-in (m/w/d) oder einen Arzt/eine Ärztin'}
      </Typography>
      <Typography sx={{ mt: 4, fontSize: '20px', fontWeight: '700', color: 'text.darkBlue' }}>
        {'Compensation & Benefits:'}
      </Typography>
      <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
        {'Our physicians enjoy a wide range of benefits, including:'}
      </Typography>
      <List
        aria-label='contacts'
        sx={{
          mt: '-10px',
          ml: '-56px',
          width: '100%',
          maxWidth: 360,
          '.MuiListItemIcon-root': {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <ListItem mr='60px' disablePadding>
          <ListItemIcon >
            <SquareIcon fontSize='9px' />
          </ListItemIcon>
          <ListItemText primary='Chelsea Otakan' />
        </ListItem>
      </List>
      <Box
        display='flex'
        justifyContent={{ xl: 'start', lg: 'start', md: 'center', sm: 'center', xs: 'center' }}
      >
        <BootstrapButton sx={{ mt: 4 }} variant='contained'>
            APPLY NOW
        </BootstrapButton>
      </Box>
     
    </>
  )
}

export default JobDetailis
