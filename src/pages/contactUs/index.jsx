import { Grid } from '@mui/material';

import { UIButton, UITextField } from 'components';
import { FlexBox, FlexBoxCentered, StyledTypography } from 'styles';

const ContactUs = () => {
  return (
    <FlexBoxCentered style={{ backgroundColor: 'black', height: '600px' }}>
      <FlexBox
        alignItems="center"
        style={{ width: '80%' }}
        flexDirection="column"
      >
        <FlexBox>
          <StyledTypography
            variant="h2"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Keep In Touch
          </StyledTypography>{' '}
          <StyledTypography
            variant="h2"
            sx={{
              color: '#7E33FF',
              fontWeight: 'bold',
            }}
          >
            With KalSoft
          </StyledTypography>
        </FlexBox>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UITextField label="Your Name" />
          </Grid>
          <Grid item xs={6}>
            <UITextField label="Email Address" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UITextField label="Your Country" />
          </Grid>
          <Grid item xs={6}>
            <UITextField label="Phone Number" />
          </Grid>
        </Grid>

        <UITextField multiline rows={4} />

        <UIButton variant="contained">Send Email</UIButton>
      </FlexBox>
    </FlexBoxCentered>
  );
};

export default ContactUs;
