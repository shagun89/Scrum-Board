import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AddTaskForm from './Forms/taskForm';
import { Modal } from 'react-bootstrap';



const styles = theme => ({
    button: {
     // margin: theme.spacing.unit,
      margin: '0px',
      color: 'navy',
      padding: '0 10px',
    },
    input: {
      display: 'none',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
  });

class Task extends React.Component{

    constructor(){
        super();
        this.state={
            visibility: false,
            open: false
        }
    }
    togglePopup = () => {
      this.setState({
        visibility: !this.state.visibility
      });
    }
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
    // showForm() {
    //     this.setState({open: true});
    // }
    
    render() {
        console.log("task propsL: ",this.props);
        const { classes } = this.props;
        const clicked = Boolean(false);
        return (
        <div class="wrapper">
        <header class="clear">
          <ul>
            <li>Rejected</li>
            <li>Pending</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Production</li>
          </ul>
          
        </header>
        
        <section id="dashboard" class="dashboard clear">
          <div id="rejected" class="rejected"></div>
          <div id="pending" class="pending"></div>
          <div id="development" class="development"></div>
          <div id="testing" class="testing"></div>
          <div id="production" class="production"></div>
        </section>
        <div id="page-container">
          
          <footer id= "footer">
          <ul>
            <li class = "bottom_view">
            <Button variant="contained" color="" className={classes.button} onClick={this.handleOpen}>
            <AddIcon className={classes.leftIcon} />
            Add a task
            </Button>
            </li>
            <li class = "bottom_view"><Button variant="contained" color="" className={classes.button}>
            <AddIcon className={classes.leftIcon} />
            Add a task
            
            </Button></li>
            <li class = "bottom_view"><Button variant="contained" color="" className={classes.button}>
            <AddIcon className={classes.leftIcon} />
            Add a task
            </Button></li>
            <li class = "bottom_view"><Button variant="contained" color="" className={classes.button}>
            <AddIcon className={classes.leftIcon} />
            Add a task
            </Button></li>
            <li class = "bottom_view"><Button variant="contained" color="" className={classes.button}>
            <AddIcon className={classes.leftIcon} />
            Add a task
            </Button></li>
          </ul>
          </footer>
        </div>
        {this.state.open &&
         <Modal open={this.state.open} onHide={this.handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
       </Modal>
        // <Modal 
        // open={this.state.open} onHide={this.handleClose}
        // >
        // <Modal.body>
        // <AddTaskForm closePopup={this.togglePopup}/>
        // </Modal.body> 
        // </Modal>
        }
        {/* //call apply bind */}
        </div>
        );
    }
}

Task.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Task);
