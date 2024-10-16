# RestAPI-using-lambda-and-API-gateway
**What is Rest API?**

A REST API (Representational State Transfer Application Programming Interface) is a web service that adheres to the principles of REST architecture. It enables communication between a client (e.g., a web browser or mobile app) and a server over HTTP, typically for managing and manipulating data.

Key features of a REST API include:

**Statelessness:** Each API call from the client contains all the necessary information, meaning the server does not need to remember any state between requests. This allows for scalability.

**Resources:** REST APIs represent data as resources, identified by URLs. 

**HTTP Methods:** REST APIs commonly use standard HTTP methods to perform operations on resources:

GET: Retrieve data. 
POST: Create new data. 
PUT/PATCH: Update existing data. 
DELETE: Remove data.

**Data format:** REST APIs often use JSON or XML to structure the data being sent between the client and the server.

**Stateless HTTP requests:** The server processes each request as a separate, standalone request.

So,Lets start with creating a API Gateway
![img 1](https://github.com/user-attachments/assets/5673871f-86e2-4024-a28b-014aa0b227bf)

Create a new REST API with Name student

Create a Resource as student 
![img2](https://github.com/user-attachments/assets/95b25ace-f870-4a15-9e2d-4608ec2cb2cd)

Create Two methods as GET and POST and set the integration type as MOCK 
![img3](https://github.com/user-attachments/assets/8be62d5d-856a-4484-8625-655f9f9d841e)

After the API Gateway is done We move on to Lambda  

![img4](https://github.com/user-attachments/assets/2b5a60bd-e455-4c58-9135-3b8ca0345ecd)

We create a function from scratch

As we need to add student records and add GET and POST in it we change the code

![img5](https://github.com/user-attachments/assets/4739f5ac-68d4-4cf3-9032-919ddb0e85e1)

After the code is updated we have to deploy the application

![img6](https://github.com/user-attachments/assets/b10dcb3a-7d15-46da-93a0-934e53812c15)

Test the code we have added a Console.log to show that API is ready to deploy

![img7](https://github.com/user-attachments/assets/a92d7a94-a4a1-4f0d-98cf-23ca3ff890cd)

as we have updated the code in lambda function we need to change the integration type to Lambda in API Gateway 

![img8](https://github.com/user-attachments/assets/2ecaca4e-d3f6-4def-9586-afe7444b0ebb)

The Update should be in both GET and POST 

While Updating Select Lambda Proxy Integration And your student records file

![img9](https://github.com/user-attachments/assets/8e168be8-f64e-4efd-ad89-1286058aded1)

Deploy the API as New Satge Api 

![img10](https://github.com/user-attachments/assets/2b60c134-1ae7-41e1-bbd7-afcaf430d005)

In GET method we can see the link were our details of the StudentRecords are present 

![img11](https://github.com/user-attachments/assets/d9748486-9b95-42e6-9e49-20e0a166e510)

****THE OUTPUT:****

![img12](https://github.com/user-attachments/assets/7c15bed6-16b7-422a-8817-9cf8910f618b)

**Even if we change the details it will update itself**
