import React, { Component } from 'react';
import { Feadback } from './FeadbackOptions/FeadbackOptions';
import { Section } from './Section/Section';
import { Statistic } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const key = e.target.name;
    console.log(key);
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const feedback = this.onLeaveFeedback;

    return (
      <div>
        <Section title="Please leave feedback">
          <Feadback options={options} onLeaveFeedback={feedback} />
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
