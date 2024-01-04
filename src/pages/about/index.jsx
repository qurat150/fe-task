import { Box, Grid, Typography } from '@mui/material';
import { FaPlay } from 'react-icons/fa';

import { Images } from 'assets';
import { RightArrowIcon, UIButton, UICard } from 'components';

import {
  CenteredGrid,
  FlexBox,
  FlexBoxCentered,
  StyledBackgroundImage,
  StyledTypography,
} from 'styles';

const About = () => {
  return (
    <FlexBox
      sx={{
        height: '1000px',
        backgroundColor: 'black',
        flexDirection: 'column',
      }}
    >
      <Grid container sx={{ marginTop: '10rem' }}>
        <CenteredGrid item xs={6}>
          <Box sx={{ width: '500px' }}>
            <StyledTypography
              sx={{
                color: '#7E33FF',
                fontWeight: 'bold',
              }}
            >
              ABOUT KALSOFT
            </StyledTypography>
            <StyledTypography variant="h4">
              Make Your Event Idea Come True
            </StyledTypography>
            <StyledTypography>
              Duis consectetur urna ac urna sollicitudin, in porta metus
              dignissim. Morbi malesuada nisl ac nibh laoreet, inultrices est
              elementum. Suspendisse fringilla efficitur risus ac iaculis.
              Mauris neque enim.
            </StyledTypography>

            <Grid container>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <RightArrowIcon />
                <Typography>Provide Best Quality Events</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <RightArrowIcon />
                <Typography>Provide Best Quality Events</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <RightArrowIcon />
                <Typography>Provide Best Quality Events</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <RightArrowIcon />
                <Typography>Provide Best Quality Events</Typography>
              </Grid>
            </Grid>
            <UIButton ml="0"> Read More</UIButton>
          </Box>
        </CenteredGrid>
        <Grid item xs={6}>
          <FlexBoxCentered>
            <StyledBackgroundImage
              url={Images.page2Img.src}
              width="400px"
              height="450px"
            >
              <FlexBoxCentered>
                <UIButton circleBorder>
                  <FaPlay />
                </UIButton>
              </FlexBoxCentered>
            </StyledBackgroundImage>
          </FlexBoxCentered>
        </Grid>
      </Grid>
      <StyledBackgroundImage url={Images.page3Img.src} height="300px">
        <UICard cardSet={1} />
      </StyledBackgroundImage>
    </FlexBox>
  );
};

export default About;
