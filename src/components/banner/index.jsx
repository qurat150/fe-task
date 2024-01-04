import { Typography } from '@mui/material';
import { StyledMain } from './ui';
import CustomTypography from 'components/typography';
import { UIButton } from 'components';
import { FlexBox } from 'styles';

const Banner = () => {
  return (
    <>
      <StyledMain>
        <CustomTypography letterSpacing="3px">
          KALSOFT ORGANIZER
        </CustomTypography>
        <CustomTypography variant="h2" letterSpacing="2px">
          Get An Unforgettable Event
        </CustomTypography>
        <CustomTypography variant="h2">Experience With us</CustomTypography>
        <CustomTypography sx={{ color: '#F4F4F4' }}>
          Duis consectetur urna ac urna sollicitudin, in porta metus dignissim.
          Morbi malesuada nisl ac nibh laoreet,
        </CustomTypography>
        <Typography sx={{ color: '#F4F4F4', lineHeight: '19.5px' }}>
          in ultrices est elementum. Suspendisse fringilla efficitur risus ac
          iaculis. Mauris neque enim.
        </Typography>

        <FlexBox>
          <UIButton>Hui</UIButton>
          <UIButton>Hui</UIButton>
        </FlexBox>
      </StyledMain>
    </>
  );
};

export default Banner;
