
import React, { Component } from 'react';



export default class Login extends Component {
    render() {
        return (
            <form>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </form>
        );
    }
}