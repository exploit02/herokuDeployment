import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


export default function historyDetailsModal(props) {
  const modalData = props.data[0];
  return (
    <MDBContainer>
      <MDBModal isOpen={true} toggle={props.handler} size="lg">
        <MDBModalHeader toggle={props.handler}>Candidate History Detail &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date:{new Date(modalData.updatedAt).getDate() + '/' + (new Date(modalData.updatedAt).getMonth()+1) + '/' + new Date(modalData.updatedAt).getFullYear()}</MDBModalHeader>
        <MDBModalBody>
          <h5>Personal Details</h5>
          <hr></hr>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Aadhar Number : 
                      </span> {modalData.aadhar_no} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Name :
                      </span>  {modalData.name} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Phone Number :
                      </span>  {modalData.phone_number} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">DOB :
                      </span>  {modalData.dob} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Alternate Phone Number :
                      </span> {modalData.alternate_phone_number} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Email :
                      </span>  {modalData.email} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Gender :
                      </span> {modalData.gender} </label>
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
                      </span> {modalData.address_1} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Address Line 2 :
                      </span>  {modalData.address_2} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">City :
                      </span> {modalData.city} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">District :
                      </span>  {modalData.district} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">State :
                      </span> {modalData.state} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Country :
                      </span>  {modalData.country} </label>
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
                      </span>  {modalData.source} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Source Type :
                      </span>  {modalData.source_type} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Employment Status :
                      </span> {modalData.employment_status} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Occupation :
                      </span>  {modalData.occupation} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Current Annual Income:
                      </span> {modalData.annual_income} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Educational Qualification:
                      </span>  {modalData.educational_qualification} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Number of Successfull Enterprises :
                      </span> {modalData.successful_enterprises} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Number of Failed Enterprises :
                      </span>  {modalData.failed_enterprises} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Has Bank Account:
                      </span> {modalData.bank_account?'Yes' : 'No'} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Has A Credit History:
                      </span>  {modalData.credit_history?'Yes':'No'} </label>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Needs Training:
                      </span> {modalData.needs_training?'Yes':'No'} </label>
                  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="md-form1">
                      <label className="control-label"><span id="label">Status:
                      </span>  {modalData.status} </label>
                  </div>
              </div>
          </div>
          <br/><br/>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={props.handler}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  )
}
