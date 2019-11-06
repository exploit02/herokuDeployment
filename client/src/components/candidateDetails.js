import React, { Component } from 'react'
import { MDBContainer,MDBRow, MDBCol, MDBBtn,MDBIcon, MDBTable, MDBTableBody, MDBTableHead, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import NavBar from './navBar'
import {CandidateService} from '../services/candidateService'
import ModalPage from './historyDetailsModal'

export class candidateDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             versions:[],
             modal: false
        }
    }
    toggle = (e) => {
        var versionData = this.state.versions.filter((val)=>{ 
            if(e.target.dataset.id == val._id){
                return val;
            }
        })

        console.log(e.target.dataset.id)
        this.setState({
          modalData: versionData,
          modal: !this.state.modal
        });
      }
    componentDidMount = async () =>{
        if(this.props.location.state.Id){
            const candidateData = await CandidateService.selectedCandidate(this.props.location.state.Id)
            //console.log(candidateData.versions)
            this.setState({
                _id:candidateData._id,
                aadhar_no: candidateData.aadhar_no,
                name: candidateData.name,
                phone_number: candidateData.phone_number,
                dob: candidateData.dob,
                alternate_phone_number: candidateData.alternate_phone_number,
                email: candidateData.email,
                gender: candidateData.gender,
                address_1: candidateData.address_1,
                address_2: candidateData.address_2,
                city: candidateData.city,
                district: candidateData.district,
                state: candidateData.state,
                country: candidateData.country,
                source: candidateData.source,
                source_type: candidateData.source_type, 
                employment_status: candidateData.employment_status, 
                occupation: candidateData.occupation,
                annual_income: candidateData.annual_income, 
                educational_qualification: candidateData.educational_qualification,
                successful_enterprises: candidateData.successful_enterprises,
                failed_enterprises: candidateData.failed_enterprises,
                status:candidateData.status,
                bank_account: candidateData.bank_account,
                credit_history: candidateData.credit_history,
                needs_training: candidateData.needs_training,
                versions:candidateData.versions
            })
        }
    }
    modalGenerator = function (params) {
        
    }
    render() {
        const statusHistory = this.state.versions;
        //console.log(statusHistory)
        return (
            <div>
               <NavBar/>
               {/* <Link to={{pathname :`/addcandidates`, state: {Id:null} }}>
              <MDBBtn outline color="primary" style={{float:'right'}}>
              <MDBIcon icon="chevron-left" />
              </MDBBtn>
            </Link>  */}
               <MDBContainer>
                    <MDBRow className="login_row_margin">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                <p className="h4 text-center py-4">Candidate Details</p>
                                <h5>Personal Details</h5>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Aadhar Number : 
                                            </span> {this.state.aadhar_no} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Name :
                                            </span>  {this.state.name} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Phone Number :
                                            </span>  {this.state.phone_number} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">DOB :
                                            </span>  {this.state.dob} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Alternate Phone Number :
                                            </span> {this.state.alternate_phone_number} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Email :
                                            </span>  {this.state.email} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Gender :
                                            </span> {this.state.gender} </label>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <h5>Address</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Address Line 1 :
                                            </span> {this.state.address_1} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Address Line 2 :
                                            </span>  {this.state.address_2} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">City :
                                            </span> {this.state.city} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">District :
                                            </span>  {this.state.district} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">State :
                                            </span> {this.state.state} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Country :
                                            </span>  {this.state.country} </label>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <h5>Other Details</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Source :
                                            </span>  {this.state.source} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Source Type :
                                            </span>  {this.state.source_type} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Employment Status :
                                            </span> {this.state.employment_status} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Occupation :
                                            </span>  {this.state.occupation} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Current Annual Income:
                                            </span> {this.state.annual_income} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Educational Qualification:
                                            </span>  {this.state.educational_qualification} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Number of Successfull Enterprises :
                                            </span> {this.state.successful_enterprises} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Number of Failed Enterprises :
                                            </span>  {this.state.failed_enterprises} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Has Bank Account:
                                            </span> {this.state.bank_account?'Yes' : 'No'} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Has A Credit History:
                                            </span>  {this.state.credit_history?'Yes':'No'} </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Needs Training:
                                            </span> {this.state.needs_training?'Yes':'No'} </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Status:
                                            </span>  {this.state.status} </label>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <h5>Status History</h5>
                                <hr/>
                                <MDBTable striped>
                                    <MDBTableHead>
                                        <tr>
                                            <th>SL No.</th>
                                            <th>Status</th>
                                            <th>Modified Date</th>
                                            <th style={{textAlign:"center"}}>Details</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                           statusHistory.map((slice , index) => {
                                                return(
                                                        <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{slice.status}</td>
                                                            <td>{new Date(slice.updatedAt).getDate() + '/' + (new Date(slice.updatedAt).getMonth()+1) + '/' + new Date(slice.updatedAt).getFullYear()}</td>
                                                            <td style={{textAlign:"center"}}><MDBBtn onClick={this.toggle} data-id ={slice._id}>View</MDBBtn></td>
                                                        </tr>
                                                    )
                                           }) 
                                        }
                                    </MDBTableBody>
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    
                    {
                        this.state.modal ? <ModalPage data={this.state.modalData} handler={this.toggle}/> : null
                    }
                   
                </MDBContainer>
            </div>
        )
    }
}

export default candidateDetails
