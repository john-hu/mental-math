import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItemText from '@material-ui/core/ListItemText';

import ResultDialog from './ResultDialog';

configure({ adapter: new Adapter() });

describe('renders ResultDialog', () => {
  let dialog;
  let onCloseCallback;
  beforeEach(() => {
    onCloseCallback = jest.fn();
    dialog = mount(
      <ResultDialog answered={1} correct={1} elapsed={1000} open={true} onClose={onCloseCallback} />
    );
  });

  it('renders 100% in score', () => {
    const listItemTexts = dialog.find(ListItemText);
    expect(listItemTexts.length).toBe(2);
    expect(listItemTexts.get(0).props.secondary).toBe('100%');
  });

  it('renders time', () => {
    const listItemTexts = dialog.find(ListItemText);
    expect(listItemTexts.length).toBe(2);
    expect(listItemTexts.get(1).props.secondary).toBe('1 seconds');
  });

  it('calls onClose callback when close', () => {
    const closeBtn = dialog.find('button');
    expect(closeBtn.text()).toBe('Close');
    closeBtn.simulate('click');
    expect(onCloseCallback.mock.calls.length).toBe(1);
  });
});

test('invisble dialog should not be visible', () => {
  const dialog = mount(<ResultDialog answered={1} correct={1} elapsed={1000} open={false} />);
  expect(dialog.exists('button')).toBeFalsy();
});
