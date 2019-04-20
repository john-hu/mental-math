import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class ResultDialog extends PureComponent {
  static propTypes = {
    answered: PropTypes.number.isRequired,
    correct: PropTypes.number.isRequired,
    elapsed: PropTypes.number.isRequired,
    open: PropTypes.bool,

    onClose: PropTypes.func
  };

  static defaultTypes = {
    open: false
  };

  render() {
    const { answered, correct, elapsed, open, onClose } = this.props;
    const score = answered ? `${Math.round(correct * 100 / answered)}%` : 'N/A';
    const secondUsed = Math.round(elapsed / 1000);
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <Typography variant="title">Your result:</Typography>
        </DialogTitle>
        <List>
          <ListItem>
            <Typography>You did a great job. You answered {answered} questions with {correct} correct answers within {secondUsed} seconds.</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Your score:" secondary={score} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time used:" secondary={`${secondUsed} seconds`} />
          </ListItem>
        </List>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ResultDialog;
