import PropTypes from 'prop-types';
import { Button, ListBtn } from './FeadbackOptions.styled';

export const Feadback = ({ options, onLeaveFeedback }) => {
  return (
    <ListBtn>
      {options.map(option => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          key={option}
          name={option}
        >
          {option}
        </Button>
      ))}
    </ListBtn>
  );
};

Feadback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
