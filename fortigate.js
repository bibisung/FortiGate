const API_KEY = 'jyrjmbGdcc5n1y7H5qqH5gzr56dy94'
const GET_USER_URL = 'https://192.168.1.99/api/v2/cmdb/user/local/'
const GET_POLICY_URL = 'https://192.168.1.99/api/v2/cmdb/firewall/policy/'
const CREATE_USER_URL = 'https://192.168.1.99/api/v2/cmdb/user/local/'
const GET_CONFIG_URL = 'https://192.168.1.99/api/v2/monitor/system/config/backup/?scope=global'
const buttonEl = document.querySelector('.btn')
const currentTime = Date.now()

// FortiGate 모든 User 정보 가져오기
const GET_USER_RES = fetch(GET_USER_URL, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Accept': 'application/json',
    'Origin': 'https://localhost:1234'
  },
  mode: 'cors',
  cache: 'default'
}).then(GET_USER_RES => GET_USER_RES.json())
console.log(GET_USER_RES)

// FortiGate IPv4 Policy 가져오기
const GET_POLICY_RES = fetch(GET_POLICY_URL, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Accept': 'application/json',
    'Origin': 'https://localhost:1234'
  },
  mode: 'cors',
  cache: 'default'
}).then(GET_POLICY_RES => GET_POLICY_RES.json())
console.log(GET_POLICY_RES)

// User 생성
// const CREATE_USER = fetch(CREATE_USER_URL, {
//   method: 'POST',
//   headers: {
//     'Authorization': `Bearer ${API_KEY}`,
//     'Accept': 'application/json',
//     'Origin': 'https://localhost:1234'
//   },
//   body: JSON.stringify({
//     'name': 'user001',
//     'status': 'enable',
//     'type': 'password',
//     'two-factor': 'disable',
//     'sms-server': 'fortiguard',
//     'auth-concurrent-override': 'disable',
//     'passwd': 'user001'
//   }),
//   mode: 'cors',
//   cache: 'default'
// }).then((response) => response.json())
//   .then((data) => console.log(data))

if(buttonEl) {
  buttonEl.addEventListener('click', function () {
    const GET_CONFIG_RES = fetch(GET_CONFIG_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Origin': 'https://localhost:1234'
      },
      mode: 'cors',
      cache: 'default'
    }).then(GET_CONFIG_RES => GET_CONFIG_RES.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${CurrentTime}.conf`
        a.click()
        a.remove()
      })
  })
}