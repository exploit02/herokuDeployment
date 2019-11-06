var axios = require('axios')
var ES6Promise = require('es6-promise')
axios.defaults.withCredentials = true
ES6Promise.polyfill()
const ApiService = {
    get( apiurl, todate='', fromdate='', state='', city='') {
      return axios.get(apiurl, { params: {todate: todate, fromdate:fromdate, state:state, city:city} })
      .then(response => {
          return response.data
        })
        .catch(response => {
            return response.data
        })
    },

    post( apiurl,bodyFormData) {
        return axios.post(apiurl,bodyFormData)
        .then(response => {
            return response
          })
        .catch(err => {
          
          const res = {
              message : err.response.data.message,
              status : err.response.status
          }
          return res;
        
        })
    },

    patch( apiurl,bodyFormData) {
      return axios.patch(apiurl,bodyFormData)
      .then(response => {
        
          return response
        })
        .catch(err => {
          
          const res = {
              message : err.response.data.message,
              status : err.response.status
          }
          return err;
        
        })
    }
    
}
  export default ApiService



export const CandidateService = {
  getCandidate() {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates' )
  },

  selectedCandidate(candidateID) {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates/'+candidateID)
  },

  checkAadhar(aadharNumber) {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates/byaadhar/'+aadharNumber)
  },

  addCandidate(candidate) {
    return ApiService.post( 'https://herokuappdeploytest.herokuapp.com/candidates',candidate)
  },

  updateCandidate(candidate) {
    return ApiService.patch( 'https://herokuappdeploytest.herokuapp.com/candidates/'+candidate['_id'], candidate)
  },

  candidateCountByGender(todate, fromdate, state, city) {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates/bygender', todate, fromdate, state, city)
  },

  candidateCountByStatus(todate, fromdate, state, city) {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates/bystatus', todate, fromdate, state, city)
  },

  candidateCountByAgegroup(todate, fromdate, state, city) {
    return ApiService.get( 'https://herokuappdeploytest.herokuapp.com/candidates/byagegroup', todate, fromdate, state, city)
  }
}