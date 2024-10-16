let student ={
  firstName: "Alex",
  lastName: "Stark",
  rollNumber: 1
}
export const handler = async (event) => {
  // TODO implement
  console.log(" >>>>Inside lambda Function...");
  if(event.httpMethod === 'GET')
  {
    return getStudentRecord(event);
  }
  if(event.httpMethod === 'POST'){
    return createStudentRecord(event);
  }
  
};

 function getStudentRecord(event){
   const response = {
     statusCode: 200,
     body: JSON.stringify({
       student_details: student
     })
   };
   return response
 }
 
 function createStudentRecord(event){
   const body = JSON.parse(event.body);
   const response = {
     statusCode: 200,
     body: JSON.stringify({
     message: "successfully created",
     details: body
   })
 };
 return response
 }
