const API_KEY = 'njpnxtztjyyxygtnxHm1rgtrkg4GGc'
const GET_USER_URL = 'https://192.168.1.99/api/v2/cmdb/user/local/'
const GET_POLICY_URL = 'https://192.168.1.99/api/v2/cmdb/firewall/policy/'
const CREATE_USER_URL = 'https://192.168.1.99/api/v2/cmdb/user/local/'
const GET_CONFIG_URL = 'https://192.168.1.99/api/v2/monitor/system/config/backup/?scope=global'
const GET_SYSTEM_RESOURCE_URL = 'https://192.168.1.99/api/v2/monitor/system/global-resources'
const buttonEl = document.querySelector('.btn')
const currentTime = Date.now()

// FORTIGATE ALL USER INFORMATION SELECT
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

// FORTIGATE ALL IPV4 POLICY SELECT
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

// USER CREATE
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

//CONFIG DOWNLOAD
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
        const anchorEl = document.createElement('a')
        document.body.appendChild(anchorEl) //for Firefox
        anchorEl.href = url
        anchorEl.download = `${currentTime}.conf`
        anchorEl.click()
        anchorEl.remove()
      })
  })
}

// MONITOR RESOURCE
const GET_SYSTEM_RESOURCE_RES = fetch(GET_SYSTEM_RESOURCE_URL, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Accept': 'application/json',
    'Origin': 'https://localhost:1234'
  },
  mode: 'cors',
  cache: 'default'
}).then(GET_SYSTEM_RESOURCE_RES => console.log(GET_SYSTEM_RESOURCE_RES.json()))