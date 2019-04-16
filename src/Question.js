import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import clsNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  },
  header: {
    borderBottom: `solid 0.2rem ${theme.palette.divider}`
  },
  row: {
    ...theme.typography.display2,
    marginBottom: '0.1rem',
    marginTop: '0.1rem',
    textAlign: 'right',
    '&:before': {
      content: 'attr(data-index)',
      float: 'left'
    }
  },
  answer: {
    borderTop: `solid 0.1rem ${theme.palette.divider}`
  },
  answerInput: {
    ...theme.typography.display1,
    textAlign: 'right'
  }
});

class Question extends PureComponent {
  static propTypes = {
    answer: PropTypes.number,
    header: PropTypes.node,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
      })
    ),
    onAnswer: PropTypes.func
  };

  constructor(props) {
    super(props);
    const candidates = props.rows.map(({ min, max }) => Math.round(Math.random() * max + min));
    this.state = {
      candidates,
      answer: candidates.reduce((acc, v) => acc + v, 0)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.header !== this.props.header) {
      const candidates = nextProps.rows.map(({ min, max }) => Math.round(Math.random() * max + min));
      this.setState({
        candidates,
        answer: candidates.reduce((acc, v) => acc + v, 0)
      });
    }
  }

  handleKeyPressed = (e) => {
    const { onAnswer } = this.props;
    if (!e.target.value || e.key !== 'Enter' || !onAnswer) {
      return;
    }
    const userAnswer = +e.target.value;
    onAnswer(userAnswer, this.state.answer, userAnswer === this.state.answer);
    e.target.value = '';
  };

  renderRow = (value, index) => {
    const { classes } = this.props;
    return (
      <div key={index} className={classes.row} data-index={index + 1}>
        {value}
      </div>
    );
  };

  render() {
    const { answer, className, classes, header } = this.props;
    const { candidates } = this.state;
    return (
      <Paper className={clsNames(classes.root, className)}>
        <Typography className={classes.header} variant="h4" component="h4">
          {header}
        </Typography>
        {candidates.map(this.renderRow)}
        <TextField
          autoFocus
          className={clsNames(classes.answer, classes.row)}
          type="number"
          InputProps={{
            classes: { input: classes.answerInput }
          }}
          onKeyPress={this.handleKeyPressed}
        >
          {answer}
        </TextField>
      </Paper>
    );
  }
}

export default withStyles(styles)(Question);
