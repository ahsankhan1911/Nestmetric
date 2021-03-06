import React, { Component,  } from 'react';
import {withRouter} from 'react-router-dom'


class Header extends Component {

    handleDropdown() {

        if (document.getElementById('dlDropDown').className === "dropdown") {
            document.getElementById('dlDropDown').className = "dropdown open"
        }

        else {
            document.getElementById('dlDropDown').className = "dropdown"
        }
    }

    render() {
        return (
            <div id="header-wrapper">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/main/dashboard/" style={{ height: "45px" }}> </a>
                            </div>
                            <div className="collapse navbar-collapse" >
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="create-model">
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => {
                                                this.props.history.push({ pathname: "/main/module-create/wizard/choose-module-type" }) }} >
                                            <span className="plus-white" id="hello" >+</span> Create Model
                                        </button>
                                    </li>

                                    <li className="dropdown" id="dlDropDown">
                                        <a className="dropdown-toggle user-dropdown" onClick={() => { this.handleDropdown() }} >
                                            <span className="typcn typcn-user-outline" aria-hidden="true"></span>
                                        </a>
                                        <ul className="dropdown-menu">

                                            <hr />

                                            <li>
                                                <a href="/">
                                                    <span className="typcn typcn-user" aria-hidden="true"></span> My Account </a>
                                            </li>

                                            <li>
                                                <a href="/accounts/logout/" >
                                                    <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout  </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                                <ul className="nav navbar-nav navigation-menu">
                                    <li className="active">
                                        <a href="/main/dashboard/">Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
        )
    }

}

export default withRouter (Header)