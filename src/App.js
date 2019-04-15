import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Question from './Question';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  grid: {
    margin: 0,
    width: '100%'
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
  handleAnswered = (userAnswer, answer, correct) => {
    alert(correct ? 'You are correct' : `The correct answer is ${answer}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} onKeyPress={this.handleAnswerChanged}>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item xs={12} sm={6} md={4}>
            <Question className={classes.question} rows={rows} header="Q12" onAnswer={this.handleAnswered} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
