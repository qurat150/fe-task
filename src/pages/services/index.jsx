import { Typography } from '@mui/material';
import { UICard } from 'components';
import { FlexBoxCentered, StyledTypography } from 'styles';
import { theme } from 'theme';

const Services = () => {
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
          OUR SERVICES
        </StyledTypography>
        <Typography variant="h2">Event Service We Provide</Typography>
        <Typography width="900px" textAlign="center">
          Duis consectetur urna ac urna sollicitudin, in porta metus dignissim.
          Morbi malesuada nisl ac nibh laoreet, in ultrices est elementum.
          Suspendisse fringilla efficitur risus ac iaculis. Mauris neque enim.
        </Typography>

        <UICard sx={{ flexWrap: 'wrap' }} readMore cardSet={2} />
      </FlexBoxCentered>
    </FlexBoxCentered>
  );
};

export default Services;
