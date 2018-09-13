
# IaaSathon Frontend Server

# Details
- Port should be exposed as port 3000

# Prereqs
 - either have nodejs installed
 - or deploy using Docker with the following conatiner 
 - Must connect to the backend servers that run as port 8000
  - either have the same public load balancer point to the backend servers
  - or edit line 16 in ./src/components/PollData.js from
  ```
  let url = "http://"+window.location.hostname + ":8000/getPolls"
  ```
  to
  ```
  let url = "http://"+<public ip address of the load balancer to the backend servers> + ":8000/getPolls"
  ```


 


 # If running with nodejs
 - run the following command
 
 ```
 $ npm start
 ```

 # If running with docker
 - run the following command
 ```
 $ docker run -d -p 3000:5000 schmidtp0740/iaasathon-frontend 
 ```
