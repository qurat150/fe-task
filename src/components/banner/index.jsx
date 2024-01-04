import { Grid, Typography } from '@mui/material';
import { FaPlay } from 'react-icons/fa';

import { CustomTypography, UIButton, UICard } from 'components';
import { StyledBackgroundImage } from './ui';
import { FlexBoxCentered } from 'styles';
import { Images } from 'assets';

const Banner = () => {
  return (
    <StyledBackgroundImage url={Images.homeBg.src}>
      <Grid container direction="column" spacing={2}>
        <Grid item height="400px">
          <FlexBoxCentered flexDirection="column">
            <CustomTypography letterSpacing="3px">
              KALSOFT ORGANIZER
            </CustomTypography>

            <CustomTypography variant="h2">
              Get An Unforgettable Event
            </CustomTypography>
            <CustomTypography variant="h2">Experience With us</CustomTypography>

            <CustomTypography sx={{ color: '#F4F4F4' }}>
              Duis consectetur urna ac urna sollicitudin, in porta metus
              dignissim. Morbi malesuada nisl ac nibh laoreet, in
            </CustomTypography>

            <CustomTypography sx={{ color: '#F4F4F4' }}>
              in ultrices est elementum. Suspendisse fringilla efficitur risus
              ac iaculis. Mauris neque enim.
            </CustomTypography>

            <FlexBoxCentered>
              <UIButton>OUR SERVICES</UIButton>
              <UIButton circleBorder>
                <FaPlay />
              </UIButton>
              <Typography>PLAY VIDEO</Typography>
            </FlexBoxCentered>
          </FlexBoxCentered>

          <Grid item>
            <FlexBoxCentered>
              <UICard backgroundColor="black" cardSet={1} />
            </FlexBoxCentered>
          </Grid>
        </Grid>
      </Grid>
    </StyledBackgroundImage>
  );
};

export default Banner;
