import { CardActions, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { FlexBox, StyledTypography } from 'styles';
import { BorderCard } from './ui';
import jsonCardsData from 'data';
import { RightArrowIcon } from 'components';

export default function UICard({
  backgroundColor = 'transparent',
  cardSet,
  readMore,
  ...otherProps
}) {
  return (
    <FlexBox {...otherProps}>
      {cardSet
        ? jsonCardsData[`cardSet${cardSet}`].map((data) => (
            <BorderCard
              backgroundColor={backgroundColor}
              variant="outlined"
              key={data.id}
              sx={{ flex: 1 }}
            >
              <CardContent>
                <img src={data.icon} alt="" />
                <StyledTypography variant="h6">{data.title}</StyledTypography>
                <StyledTypography>{data.description}</StyledTypography>
              </CardContent>
              {readMore ? (
                <CardActions>
                  <Typography>Read More</Typography>
                  <RightArrowIcon />
                </CardActions>
              ) : null}
            </BorderCard>
          ))
        : null}
    </FlexBox>
  );
}

UICard.propTypes = {
  backgroundColor: PropTypes.string,
  cardSet: PropTypes.number,
  readMore: PropTypes.bool,
};
