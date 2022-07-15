import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="M.Tech Software Engineering" where="Federation University" from="Nov 2018" to="2021"/>
            <Widecard title="BscCSIT" where="Academia International College" from="2013" to="2017"/>
            <Widecard title="HSEB" where="Einstein Academy" from="2010" to="2012"/>

            </div>
            )
        }
    }
    
export default Education
    