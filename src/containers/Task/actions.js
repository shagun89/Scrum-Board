import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../Store/store';
import AddTaskForm from './Forms/taskForm';


export function showForm(val) {
    if(val){
        <AddTaskForm />
        // <Provider store={store}>
        //     <MuiThemeProvider muiTheme={getMuiTheme()}>
        //     <div style={{ padding: 15 }}>
                
        //         <Values form="AddTaskForm" />
        //     </div>
        //     </MuiThemeProvider>
        // </Provider>
    }
    else{
        alert('Not worked!');
    }
}