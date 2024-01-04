import { Grid, Typography } from '@mui/material';
import { Images } from 'assets';

import {
  FlexBoxCentered,
  StyledBackgroundImage,
  StyledTypography,
} from 'styles';
import { theme } from 'theme';

const Projects = () => {
  return (
    <FlexBoxCentered style={{ backgroundColor: 'black', height: '800px' }}>
      <FlexBoxCentered style={{ width: '80%' }} flexDirection="column">
        <StyledTypography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            letterSpacing: '5px',
          }}
        >
          Our Projects
        </StyledTypography>
        <Typography variant="h2">Some of Our Events</Typography>
        <Typography width="900px" textAlign="center">
          Duis consectetur urna ac urna sollicitudin, in porta metus dignissim.
          Morbi malesuada nisl ac nibh laoreet, in ultrices est elementum.
          Suspendisse fringilla efficitur risus ac iaculis. Mauris neque enim.
        </Typography>

        <Grid container>
          <Grid item xs={6}>
            <StyledBackgroundImage height="300px" url={Images.page2Img.src} />
          </Grid>
          <Grid item xs={6}>
            <StyledBackgroundImage height="300px" url={Images.page3Img.src} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <StyledBackgroundImage height="300px" url={Images.homeBg.src} />
          </Grid>
          <Grid item xs={6}>
            <StyledBackgroundImage height="300px" url={Images.page2Img.src} />
          </Grid>
        </Grid>
      </FlexBoxCentered>
    </FlexBoxCentered>
  );
};

export default Projects;
