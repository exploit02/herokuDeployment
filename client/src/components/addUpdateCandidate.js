import React, { Component } from 'react'
import { MDBContainer, MDBBtn,MDBRow, MDBCol,MDBInput, MDBCard, MDBCardBody, MDBFormInline} from 'mdbreact';
import NavBar from './../components/navBar';
import {CandidateService} from '../services/candidateService'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import  { notification }  from '../util/notification';
import validator from 'aadhaar-validator'
 
const gender = [
    { value: 'Male', label: 'Male', name:'gender' },
    { value: 'Female', label: 'Female', name:'gender' }
]
const source = [
  { value: 'Event', label: 'Event', name:'source' },
  { value: 'Roadshow', label: 'Roadshow', name:'source' },
  { value: 'Referral', label: 'Referral', name:'source' },
  { value: 'Word Of Mouth', label: 'Word Of Mouth', name:'source' },
  { value: 'Press', label: 'Press', name:'source' }
];

const sourceTypes = [
    { value: 'Inbound', label: 'Inbound', name:'source_type' },
    { value: 'Outbound', label: 'Outbound', name:'source_type' }
  ];

  const employmentStatus = [
    { value: 'Self-employed', label: 'Self-employed', name:'employment_status' },
    { value: 'Unemployed', label: 'Unemployed', name:'employment_status' },
    { value: 'Employed', label: 'Employed', name:'employment_status' },
  ];
  
  const occupation = [
    { value: 'Farmer', label: 'Farmer', name:'occupation' },
    { value: 'Mason', label: 'Mason', name:'occupation'  },
    { value: 'Poultry Farmer', label: 'Poultry Farmer', name:'occupation'  },
    { value: 'Shopkeeper', label: 'Shopkeeper', name:'occupation'  },
    { value: 'Mechanic', label: 'Mechanic', name:'occupation'  },
    { value: 'Teacher', label: 'Teacher', name:'occupation'  },
    { value: 'Housewife', label: 'Housewife', name:'occupation'  }
  ];
  const annualIncome = [
    { value: '<2 lacs/annum', label: '<2 lacs/annum', name:'annual_income' },
    { value: '2-5 lacs/annum', label: '2-5 lacs/annum', name:'annual_income' },
    { value: '5-10 lacs/annum', label: '5-10 lacs/annum', name:'annual_income' },
    { value: '10-20 lacs/annum', label: '10-20 lacs/annum', name:'annual_income' },
    { value: '>20 lacs/annum', label: '>20 lacs/annum', name:'annual_income' }
  ];

const educationalQualification = [
    { value: 'Never went to school', label: 'Never went to school', name:'educational_qualification' },
    { value: '5th pass', label: '5th pass', name:'educational_qualification' },
    { value: '8th pass', label: '8th pass', name:'educational_qualification' },
    { value: '10th pass', label: '10th pass', name:'educational_qualification' },
    { value: '12th pass', label: '12th pass', name:'educational_qualification' },
    { value: 'Diploma', label: 'Diploma', name:'educational_qualification' },
    { value: 'Graduate', label: 'Graduate', name:'educational_qualification' },
    { value: 'Post-graduate', label: 'Post-graduate', name:'educational_qualification' }
  ];
  
  const status = [
    { value: 'Interested in exploring', label: 'Interested in exploring', name:'status' },
    { value: 'Undergoing Training', label: 'Undergoing Training', name:'status' },
    { value: 'Training Complete', label: 'Training Complete', name:'status' },
    { value: 'Stream identified', label: 'Stream identified', name:'status' },
    { value: 'Resume made', label: 'Resume made', name:'status' },
    { value: 'Resume submitted', label: 'Resume submitted', name:'status' },
    { value: 'Resume sent for processing', label: 'Resume sent for processing', name:'status' },
    { value: 'Resume declined', label: 'Resume declined', name:'status' },
    { value: 'Resume accepted', label: 'Resume accepted', name:'status' },
    { value: 'Due diligence', label: 'Due diligence', name:'status' },
    { value: 'Background check', label: 'Background check', name:'status' },
    { value: 'Job offer received', label: 'Job offer received', name:'status' },
    { value: 'No longer interested', label: 'No longer interested', name:'status' },
    { value: 'Deceased', label: 'Deceased', name:'status' }
  ];

const selectedOption = null;

export class addUpdateCandidate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            _id:null,
            aadhar_no:'',
            name: '',
            phone_number:'',
            dob: '',
            alternate_phone_number: '',
            email: '',
            gender: null,
            address_1: '',
            address_2: '',
            city: '',
            district: '',
            state: '',
            country: '',
            source: '',
            source_type: null, 
            employment_status: null, 
            occupation: null,
            annual_income: null, 
            educational_qualification: null,
            successful_enterprises: '',
            failed_enterprises: '',
            status:null,
            bank_account: false,
            credit_history: false,
            needs_training: false,
            sourceDisabled: false,
            aadhar_no_validation : false,
            aadhar_exist: false
        }

    }

    componentDidMount = async () =>{
        if(this.props.location.state.Id){
            const candidateData = await CandidateService.selectedCandidate(this.props.location.state.Id)
            this.setState({
                _id:candidateData._id,
                aadhar_no: candidateData.aadhar_no,
                name: candidateData.name,
                phone_number: candidateData.phone_number,
                dob: new Date(candidateData.dob),
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
                sourceDisabled:true,
                aadhar_no_validation: false,

            })
        }
    }

    inputHandler = async (event)=>{
        
        this.setState({
            [event.target.name]: event.target.value
        })
        if(event.target.name === 'aadhar_no' && validator.isValidNumber(event.target.value)){
            var isExist = await CandidateService.checkAadhar(event.target.value);
            this.setState({
                aadhar_no_validation : !isExist,
                aadhar_exist: isExist
            }); 
        }else if(event.target.name === 'aadhar_no'){
            this.setState({
                aadhar_no_validation : false,
                aadhar_exist: false
            });
        }
    }
    

    radioHandler = (name, val) =>()=>{
        this.setState({[name]:val})
    }

    selectHandler = (event)=>{
        this.setState({
            [event.name]: event.value
        })
    }

    dateHandler = dob => this.setState({ dob:dob })

    submitHandler = async (event) =>{
        event.preventDefault();
        // event.target.className += " was-validated";
        if(this.state.aadhar_no_validation){
            const candidateServiceResponse = await CandidateService.addCandidate(this.state)
            if(candidateServiceResponse.status === 201){
                this.props.history.push("/candidates");
                notification.createNotification(candidateServiceResponse.status,"Candidate Created Successfully")
            }else{
                notification.createNotification(500,"Data Validation Failed")
            }
        }else{
            if(this.state.aadhar_exist)
                notification.createNotification(400,"Candidate with this Aadhar Number already registered");
            else
                notification.createNotification(400,"Aadhar Number is not valid");
        }
        
    }

    updateHandler = async (event) =>{
        event.preventDefault();
        const candidateServiceResponse = await CandidateService.updateCandidate(this.state)
        if(candidateServiceResponse !== undefined && candidateServiceResponse.status === 200){
            this.props.history.push("/candidates");
            notification.createNotification(candidateServiceResponse.status,"Candidate Updated Successfully")
        }else{
            notification.createNotification(500,"Data Validation Failed")
        }
    }

    
    render() {
        //this.props.location.state.Id === null? inputType = null : inputType = 'disabled';
        return (
            <div>
                <NavBar/>            
                <MDBContainer>
                    <MDBRow className="login_row_margin">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    {/* <form className="needs-validation"
          onSubmit={this.submitHandler}
          > */}
                                        {
                                         this.props.location.state.Id === null ?
                                         <p className="h4 text-center py-4">Fill Candidate Details</p>
                                         :
                                         <p className="h4 text-center py-4">Update Candidate Details</p>
                                        }
                                        <br/><br/>
                                        <h6>Personal Details</h6><hr/>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                {
                                                    this.props.location.state.Id === null?
                                                    <MDBInput label="Aadhar Number" name="aadhar_no" inputType onChange={this.inputHandler} value={this.state.aadhar_no}/>
                                                    :
                                                    <MDBInput label="Aadhar Number" name="aadhar_no" inputType onChange={this.inputHandler} value={this.state.aadhar_no} disabled/>

                                                }
                                            </MDBCol>
                                            <MDBCol md="6">
                                                {
                                                    this.props.location.state.Id === null?
                                                    <MDBInput label="Name" name="name" onChange={this.inputHandler} value={this.state.name}/>
                                                    :
                                                    <MDBInput label="Name" name="name" onChange={this.inputHandler} value={this.state.name} disabled/>

                                                }
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                <MDBInput label="Phone Number" name="phone_number" onChange={this.inputHandler} value={this.state.phone_number}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                            <MDBFormInline style={{marginTop: '35px'}}>
                                            <label className="mdb-label">DOB :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <DatePicker
                                                selected={this.state.dob}
                                                onChange={this.dateHandler}
                                                
                                            />
                                            </MDBFormInline>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                <MDBInput label="Alternate Phone Number" name="alternate_phone_number" onChange={this.inputHandler} value={this.state.alternate_phone_number}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBInput label="Email" name="email" onChange={this.inputHandler} value={this.state.email}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={gender} value={gender.filter(option => option.label === this.state.gender)} onChange={this.selectHandler} placeholder={'Gender'} required={true}/>
                                            
            
                                            </MDBCol>
                                        </MDBRow>
                                        <br/><br/>
                                        <h6>Address</h6><hr/>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                <MDBInput label="Address Line 1" name="address_1" onChange={this.inputHandler} value={this.state.address_1}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBInput label="Address Line 2" name="address_2" onChange={this.inputHandler} value={this.state.address_2}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                <MDBInput label="City" name="city" onChange={this.inputHandler} value={this.state.city}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBInput label="District" name="district" onChange={this.inputHandler} value={this.state.district}/>
                                            </MDBCol>
                                        </MDBRow>
                                      
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                                <MDBInput label="State" name="state" onChange={this.inputHandler} value={this.state.state}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <MDBInput label="Country" name="country" onChange={this.inputHandler} value={this.state.country}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <br/><br/>
                                        <h6>Other Details</h6><hr/>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={source} value={source.filter(option => option.label === this.state.source)} onChange={this.selectHandler} placeholder={'Source'} isDisabled={this.state.sourceDisabled}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={sourceTypes} value={sourceTypes.filter(option => option.label === this.state.source_type)} onChange={this.selectHandler} placeholder={'Source Type'}/>
                                            </MDBCol>
                                            </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={employmentStatus} value={employmentStatus.filter(option => option.label === this.state.employment_status)} onChange={this.selectHandler} placeholder={'Employment Status'}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={occupation} value={occupation.filter(option => option.label === this.state.occupation)} onChange={this.selectHandler} placeholder={'Occupation'}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={annualIncome} value={annualIncome.filter(option => option.label === this.state.annual_income)} onChange={this.selectHandler} placeholder={'Current Annual Income'}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={educationalQualification} value={educationalQualification.filter(option => option.label === this.state.educational_qualification)} onChange={this.selectHandler} placeholder={'Educational Qualification'}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                            <MDBCol md="6">
                                            <MDBInput type="number" label="Number of successful enterprises" name="successful_enterprises" onChange={this.inputHandler} value={this.state.successful_enterprises}/>
                                            </MDBCol>
                                            <MDBCol md="6">
                                            <MDBInput type="number" label="Number of failed enterprises" name="failed_enterprises" onChange={this.inputHandler} value={this.state.failed_enterprises}/>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow className="">
                                        <MDBCol md="6">
                                            <label className="mdb-main-label"></label>
                                            <Select options={status} value={status.filter(option => option.label === this.state.status)} onChange={this.selectHandler} placeholder={'Status'}/>
                                            </MDBCol>
                                            <MDBCol className="radio_input" md="6">
                                            <MDBFormInline>
                                            <label className="mdb-main-label">Has Bank Account :&nbsp;&nbsp;&nbsp; </label>
                                                <MDBInput gap onClick={this.radioHandler('bank_account', true)} checked={this.state.bank_account ? true : false} label="Yes" type="radio" id="radio1" />&nbsp;&nbsp;&nbsp;
                                                <MDBInput gap onClick={this.radioHandler('bank_account', false)} checked={!this.state.bank_account ? true : false} label="No" type="radio" id="radio2" />
                                            </MDBFormInline>
                                            </MDBCol>
                                            
                                        </MDBRow>
                                        <MDBRow className="">
                                        <MDBCol md="6" className="radio_input">
                                            <MDBFormInline>
                                            <label className="mdb-main-label"> Has a credit history :&nbsp;&nbsp;&nbsp;  </label>
                                                <MDBInput gap onClick={this.radioHandler('credit_history', true)} checked={this.state.credit_history ? true : false} label="Yes" type="radio" id="radio1" /> &nbsp;&nbsp;&nbsp;
                                                <MDBInput gap onClick={this.radioHandler('credit_history', false)} checked={!this.state.credit_history ? true : false} label="No" type="radio" id="radio2" />
                                            </MDBFormInline>
                                            </MDBCol>
                                            <MDBCol md="6" className="radio_input">
                                            <MDBFormInline>
                                            <label className="mdb-main-label"> Needs Training :&nbsp;&nbsp;&nbsp;  </label>
                                                <MDBInput gap onClick={this.radioHandler('needs_training', true)} checked={this.state.needs_training ? true : false} label="Yes" type="radio" id="radio1" /> &nbsp;&nbsp;&nbsp;
                                                <MDBInput gap onClick={this.radioHandler('needs_training', false)} checked={!this.state.needs_training ? true : false} label="No" type="radio" id="radio2" />
                                            </MDBFormInline>
                                            </MDBCol>
                                            
                                        </MDBRow>
                                        <div className="text-center py-4 mt-3">
                                            {
                                                this.props.location.state.Id === null? 
                                                <MDBBtn className="btn btn-outline-purple" type="submit" name="submit" onClick={this.submitHandler}>
                                                Submit
                                            </MDBBtn> :
                                            <MDBBtn className="btn btn-outline-purple" type="submit" name="update" onClick={this.updateHandler}>
                                            Update
                                        </MDBBtn>
                                            }
                                            
                                        </div>
                                        {/* </form> */}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default addUpdateCandidate
