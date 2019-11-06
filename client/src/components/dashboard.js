import React, { Component } from 'react'
import { MDBContainer, MDBBtn,MDBRow, MDBCol,MDBInput,MDBIcon, MDBCard, MDBCardBody, MDBFormInline} from 'mdbreact';
import NavBar from './../components/navBar';
import {CandidateService} from '../services/candidateService'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      toDate: '',
      fromDate: '',
      state:'',
      city:'',
      dashboardDataByGender:[],
      dashboardDataByStatus:[],
      dashboardDataByAgegroup:[]
    };
  }
  
 
  toHandler = date => {
    this.setState({
      toDate: date
    });
  };

  fromHandler = date => {
    this.setState({
      fromDate: date
    });
  };

  inputHandler = event =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  filterHandler = async()=>{
    var dashboardDataByGender = await CandidateService.candidateCountByGender(this.state.toDate, this.state.fromDate, this.state.state, this.state.city);
    var dashboardDataByStatus = await CandidateService.candidateCountByStatus(this.state.toDate, this.state.fromDate, this.state.state, this.state.city);
    var dashboardDataByAgegroup = await CandidateService.candidateCountByAgegroup(this.state.toDate, this.state.fromDate, this.state.state, this.state.city);
    this.setState({
      dashboardDataByGender: dashboardDataByGender,
      dashboardDataByStatus: dashboardDataByStatus,
      dashboardDataByAgegroup: dashboardDataByAgegroup
    });
  }
  componentDidMount = async() =>{
    var dashboardDataByGender = await CandidateService.candidateCountByGender();
    var dashboardDataByStatus = await CandidateService.candidateCountByStatus();
    var dashboardDataByAgegroup = await CandidateService.candidateCountByAgegroup();
    this.setState({
      dashboardDataByGender: dashboardDataByGender,
      dashboardDataByStatus: dashboardDataByStatus,
      dashboardDataByAgegroup: dashboardDataByAgegroup
    });
  }
  render() {
    const dashboardDataByGender = this.state.dashboardDataByGender;
    const dashboardDataByStatus = this.state.dashboardDataByStatus;
    const dashboardDataByAgegroup = this.state.dashboardDataByAgegroup;
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
                                selected={this.state.fromDate}
                                onChange={this.fromHandler}
                                // minDate={new Date()}
                                maxDate={this.state.toDate? new Date(this.state.toDate): null}
                              />
                              <br/><label className="mdb-label">From</label>
                            </MDBCol>
                            <MDBCol md="3">
                              <DatePicker
                                selected={this.state.toDate}
                                onChange={this.toHandler}
                                minDate={this.state.fromDate? new Date(this.state.fromDate): null}
                                maxDate={new Date()}
                              />
                              <br/><label className="mdb-label">To</label>
                            </MDBCol>
                            <MDBCol md="2">
                              <div className="form-group">
                                <input type="text" id="example3" className="form-control form-control-sm" name="state" value={this.state.state} onChange={this.inputHandler}/>
                                <label htmlFor="example3">State</label>
                              </div>
                            </MDBCol>
                            <MDBCol md="2">
                              <div className="form-group">
                                <input type="text" id="example3" className="form-control form-control-sm" name="city" value={this.state.city} onChange={this.inputHandler}/>
                                <label htmlFor="example3">city</label>
                              </div>
                            </MDBCol>
                            <MDBCol md="2" className="dashboard_filter">
                              <MDBBtn outline color="info" rounded size="sm" type="submit" className="mr-auto" onClick={this.filterHandler}>
                              <MDBIcon icon="filter" />&nbsp;&nbsp;Filter
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
                              dashboardDataByGender.map((slice, index)=>{
                                return(
                                  <p key={index}>{slice._id} : {slice.count}</p>
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
                        {
                          dashboardDataByAgegroup.map((slice, index)=>{
                            return(
                              <p key={index}>{slice.ageGroup} : {slice.personCount}</p>
                            )
                          })
                        }
                        </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                      <MDBCard>
                        <MDBCardBody>
                        <h5>Candidate Count By Status</h5>
                            {
                              dashboardDataByStatus.map((slice, index)=>{
                                return(
                                  <p key={index}>{slice._id} : {slice.count}</p>
                                )
                              })
                            }
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

export default Dashboard
