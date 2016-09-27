import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class GithubField extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <TextField
          hintText="i.e johndoe"
          floatingLabelText="Github Username"
        />
      </MuiThemeProvider>
    );
  }
}

export default GithubField;