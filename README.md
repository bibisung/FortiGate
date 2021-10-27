# 개요
Fortinet 제품 중 FortiGate에서 제공되는 REST API를 사용하여 CRUD 및 추후에 사용될 Management Console 제작 위한 기능 구현

## 테스트 환경
FortiGate(192.168.1.99) -------------  UTP  ------------ Server(192.168.1.100)   
- Server에서 설계되어있는 REST API URL로 Request   
- Response 데이터를 JSON 형식으로 변환

## 기능
- FortiGate 모든 User 정보 확인
- FortiGate 모든 IPv4 Policy 정보 확인
- FortiGate User 생성
- FortiGate 실시간 Config 다운로드

## 이슈사항
1. CORS
- https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
2. WAI-ARIA role 