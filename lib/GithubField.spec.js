import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GithubField from './GithubField';
import TextField from 'material-ui/TextField';


describe('Github Field', () => {

  it('should render a text field', () => {
    const wrapper = shallow(<GithubField />);
    expect(wrapper.containsAllMatchingElements(
      [<TextField/>])
    ).to.equal(true);
  });
});