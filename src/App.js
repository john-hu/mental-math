import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Question from './Question';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  grid: {
    margin: '64px 0 0 0',
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  question: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '240px'
  }
});

const rows = [
  {
    min: 0,
    max: 10
  },
  {
    min: -10,
    max: 10
  },
  {
    min: 0,
    max: 50
  },
  {
    min: -10,
    max: 10
  }
];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answeredCount: 0,
      correctCount: 0,
      elapsed: 0,
      startTime: null,
      timerId: null
    };
  }

  handleTimerUpdate = () => this.setState({ elapsed: new Date().getTime() - this.state.startTime });

  handleTimerStartStop = (fn) => {
    if (this.state.timerId) {
      window.clearInterval(this.state.timerId);
      this.setState(
        {
          timerId: null,
          startTime: 0
        },
        typeof fn === 'function' ? fn : undefined
      );
    } else {
      this.setState(
        {
          answeredCount: 0,
          correctCount: 0,
          elapsed: 0,
          startTime: new Date().getTime(),
          timerId: window.setInterval(this.handleTimerUpdate, 250)
        },
        typeof fn === 'function' ? fn : undefined
      );
    }
  };

  handleAnswered = (userAnswer, answer, correct) => {
    if (!this.state.timerId) {
      this.handleTimerStartStop(this.increaseAnswered.bind(this, correct));
    } else {
      this.increaseAnswered(correct);
    }
  };

  increaseAnswered = (correct) => {
    const { answeredCount, correctCount } = this.state;
    this.setState({
      answeredCount: answeredCount + 1,
      correctCount: (correctCount || 0) + +correct
    });
  };

  render() {
    const { classes } = this.props;
    const { answeredCount, correctCount, elapsed, timerId } = this.state;
    const score = `(${correctCount} / ${answeredCount})`;
    return (
      <div className={classes.root} onKeyPress={this.handleAnswerChanged}>
        <AppBar>
          <Toolbar>
            <Typography className={classes.grow} color="inherit" variant="h6">
              Score: {score}, Elapsed time: {Math.round(elapsed / 1000)}s
            </Typography>
            <Button color="inherit" onClick={this.handleTimerStartStop}>
              {timerId ? 'Stop' : 'Start'}
            </Button>
          </Toolbar>
        </AppBar>
        <Grid className={classes.grid} container spacing={24} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Question
              className={classes.question}
              rows={rows}
              header={`Q ${answeredCount + 1}`}
              onAnswer={this.handleAnswered}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
