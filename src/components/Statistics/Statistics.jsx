import PropTypes from 'prop-types';

import { List, Item } from './Statistics.styled';

export const Statistic = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  percentage = 0,
}) => {
  return (
    <List>
      <Item>
        Good: <span>{good}</span>
      </Item>
      <Item>
        Neutral: <span>{neutral}</span>
      </Item>
      <Item>
        Bad: <span>{bad}</span>
      </Item>
      <Item>
        <span>Total: {total}</span>
      </Item>
      <Item>Positive feedback: %{percentage}</Item>
    </List>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
