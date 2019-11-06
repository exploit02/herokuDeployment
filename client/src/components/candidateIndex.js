import React, { Component } from 'react'
import { MDBContainer, MDBBtn, MDBIcon } from 'mdbreact';
import NavBar from './navBar';
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact';
import {CandidateService} from '../services/candidateService'




export class candidateIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      candidateData : []
    }
  }
  

  async componentDidMount (){
    const candidateData = await CandidateService.getCandidate()
    
    var formattedCandidatedata = []
    candidateData.map((candidateDataSlice , index) => {
      var candidateDataSliceFormat ={};
      candidateDataSliceFormat.name = candidateDataSlice.name;
      candidateDataSliceFormat.aadhar_no = candidateDataSlice.aadhar_no;
      candidateDataSliceFormat.phone_number = candidateDataSlice.phone_number;
      candidateDataSliceFormat.city = candidateDataSlice.city;
      candidateDataSliceFormat.bank_account = candidateDataSlice.bank_account ? 'Yes' : 'No';
      candidateDataSliceFormat.action = <span className=""><Link to={{pathname :`/updatecandidate`, state: {Id:candidateDataSlice._id} }}>
                                        &nbsp;&nbsp;&nbsp;
                                        <MDBIcon icon="user-edit" /> &nbsp;&nbsp; 
                                      </Link><Link to={{pathname :`/details`, state: {Id:candidateDataSlice._id} }}>
                                        &nbsp;&nbsp;&nbsp;
                                        <MDBIcon far icon="user" />&nbsp;&nbsp; 
                                      </Link></span>
      formattedCandidatedata.push(candidateDataSliceFormat)
    })
    
    this.setState({
      candidateData:formattedCandidatedata
    })
  }







  render() {
    var data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Aadhar Number',
          field: 'aadhar_no',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Mobile Number',
          field: 'phone_number',
          sort: 'asc',
          width: 200
        },
        {
          label: 'City',
          field: 'city',
          sort: 'asc',
          width: 100
        },
        {
          label: 'HasBankAccount',
          field: 'bank_account',
          sort: 'asc',
          width: 200
        },
        {
          label: `ActionButton`,
          field: 'action',
          width: 100
        }
      ],
      rows: this.state.candidateData
    };
    return (
      <div>
        <NavBar/>
          <MDBContainer>
            <Link to={{pathname :`/addcandidates`, state: {Id:null} }}>
              <MDBBtn outline color="info" rounded size="sm" type="submit" className="mr-auto " style={{float:'right', marginTop:'23px'}}>
                <MDBIcon icon="user-plus" />
              </MDBBtn>
            </Link>
            <MDBDataTable
              striped
              bordered
              hover
              data={data}
            />
          </MDBContainer>
      </div>
    )
  }
}

export default candidateIndex