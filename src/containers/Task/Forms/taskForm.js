// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import TextField from '@material-ui/core/TextField';
// import validate from './validate';

// const renderTextField = (
//   { input, label, meta: { touched, error }, ...custom },
// ) => (
//   <TextField
//     hintText={label}
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     {...custom}
//   />
// );

// const AddTaskForm = props => {
//   const { handleSubmit, pristine, reset, submitting } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field
//           name="taskName"
//           component={renderTextField}
//           label="Task Title"
//         />
//       </div>
      
//       <div>
//         <Field
//           name="description"
//           component={renderTextField}
//           label="Description"
//           multiLine={true}
//           rows={10}
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//         <button type="button" disabled={pristine || submitting}>Delete</button>
//       </div>
//     </form>
//   );
// };

// export default reduxForm({
//   form: 'AddTaskForm', // a unique identifier for this form
//   validate,
// })(AddTaskForm);


import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];



class AddTaskForm extends React.Component {

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
  
      <form className={classes.container} noValidate autoComplete="off" id="form-modal">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <button onClick={this.props.closePopup}>close me</button>
      </form>
    );
  }
}

AddTaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTaskForm);

