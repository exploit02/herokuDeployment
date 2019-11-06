import React, { Component } from 'react'
import  { notification }  from '../util/notification';
import {UserService} from './../services/userService';
import session from '../util/sessionStore'

export class logout extends Component {


    componentDidMount(){

        const token = localStorage.getItem("token");
        
        if(token){
         const logout = UserService.logout()
         session.email = null;
         session.name = null;
         session.isLoggedIn = false;
         localStorage.removeItem('session');
         this.props.history.push("/");
         notification.createNotification(201,"Logged out Successfully")
        }else{
            this.props.history.push("/");
            notification.createNotification(500,"Please Login to Access")
        }
      }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default logout