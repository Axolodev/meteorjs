import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render Login buttons
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
        // Clean up blaze view
        Blaze.remove(this.view);
    }

    render(){
        // A render placeholder container that will be filled in.
        return <span ref="container"/>
    }
}

/**
 * Notes:
 * You can use Meteor.user() to check if a user is logged in and get information about them.
 */
