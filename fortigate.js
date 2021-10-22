// FortiGate 모든 User 정보 가져오기
const getUserUrl = 'https://192.168.1.99/api/v2/cmdb/user/local/'

const getUserRes = fetch(getUserUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer jyrjmbGdcc5n1y7H5qqH5gzr56dy94',
      'Accept': 'application/json',
      'Origin': 'https://192.168.1.99'
    },
    mode: 'cors',
    cache: 'default'
}).then(getUserRes => {return getUserRes.json();})
console.log(getUserRes)


// FortiGate IPv4 Policy 가져오기
const getPolicyUrl = 'https://192.168.1.99/api/v2/cmdb/firewall/policy/'

const getPolicyRes = fetch(getPolicyUrl, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer jyrjmbGdcc5n1y7H5qqH5gzr56dy94',
      'Accept': 'application/json',
      'Origin': 'https://192.168.1.99'
    },
    mode: 'cors',
    cache: 'default'
}).then(getPolicyRes => {return getPolicyRes.json();})
console.log(getPolicyRes)