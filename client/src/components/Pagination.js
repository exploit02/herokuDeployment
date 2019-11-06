import React, { Component } from 'react'
import { MDBContainer, MDBBtn,MDBRow, MDBCol,MDBInput,MDBIcon, MDBCard, MDBCardBody, MDBFormInline} from 'mdbreact';
import NavBar from './../components/navBar';
import {CandidateService} from '../services/candidateService'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class Pagination extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      startDate: new Date(),
      dashboardData:[]
    };
  }
  
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount = async() =>{
    var dashboardData = await CandidateService.getDashboardData();
    this.setState({
      dashboardData: dashboardData
    });
  }
  render() {
    const dashboardData = this.state.dashboardData;
    console.log(dashboardData)
    return (
      <div>
          <NavBar/>            
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12">
                      <MDBCard>
                        <MDBCardBody className="dashboard_card">
                          <MDBRow className="">
                            <MDBCol md="3">
                              <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                              />
                              <br/><label className="mdb-label">Start Date</label>
                            </MDBCol>
                            <MDBCol md="3">
                              <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                              />
                              <br/><label className="mdb-label">End Date</label>
                            </MDBCol>
                            <MDBCol md="2">
                              <div className="form-group">
                                <input type="text" id="example3" className="form-control form-control-sm" />
                                <label htmlFor="example3">State</label>
                              </div>
                            </MDBCol>
                            <MDBCol md="2">
                              <div className="form-group">
                                <input type="text" id="example3" className="form-control form-control-sm" />
                                <label htmlFor="example3">city</label>
                              </div>
                            </MDBCol>
                            <MDBCol md="2" className="dashboard_filter">
                              <MDBBtn outline color="info" rounded size="sm" type="submit" className="mr-auto ">
                              <MDBIcon icon="filter" />&nbsp;&nbsp;filter
                              </MDBBtn>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                </MDBRow><br/><br/>
                <MDBRow>
                  <MDBCol md="4">
                      <MDBCard>
                        <MDBCardBody>
                            <h5>Candidate Count By Gender</h5>
                            {
                              dashboardData.map((slice, index)=>{
                                return(
                                  <p>{slice._id} : {slice.count}</p>
                                )
                              })
                            }
                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                      <MDBCard>
                        <MDBCardBody>
                        <h5>Candidate Count By Age</h5>
                        <p>10yrs - 20yrs :</p>
                        <p>20yrs - 30yrs :</p>
                        <p>30yrs - 40yrs :</p>
                        <p>40yrs - 50yrs :</p>
                        <p>50yrs - 60yrs :</p>
                        <p>60yrs - 70yrs :</p>
                        <p>70yrs - 80yrs :</p>
                        <p>80yrs - 90yrs :</p>
                        <p>90yrs - 100yrs :</p>
                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                      <MDBCard>
                        <MDBCardBody>
                        <h5>Candidate Count By Status</h5>
                        <p>Interested in exploring :</p>
                        <p>Undergoing Training :</p>
                        <p>Training Complete :</p>
                        <p>Stream identified :</p>
                        <p>Resume made, :</p>
                        <p>Resume submitted :</p>
                        <p>Resume sent for processing :</p>
                        <p>Resume declined :</p>
                        <p>Resume accepted :</p>
                        <p>Due diligence :</p>
                        <p>Background check :</p>
                        <p>Job offer received :</p>
                        <p>No longer interested :</p>
                        <p>Deceased :</p>
                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </div>
    )
  }
}

export default Pagination
