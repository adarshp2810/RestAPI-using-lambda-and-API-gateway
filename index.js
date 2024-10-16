// Create a student object with properties for first name, last name, and roll number.
let student = {
  firstName: "Alex",
  lastName: "Stark",
  rollNumber: 1 // Roll number without leading zero to avoid octal interpretation.
};

// Lambda handler function to process incoming events
export const handler = async (event) => {
  // Log the entry into the function for debugging purposes
  console.log(" >>>>Inside lambda Function...");

  // Check if the HTTP method of the incoming request is GET
  if (event.httpMethod === 'GET') {
    // Call the function to get the student record and return its response
    return getStudentRecord(event);
  }

  // Check if the HTTP method of the incoming request is POST
  if (event.httpMethod === 'POST') {
    // Call the function to create a new student record and return its response
    return createStudentRecord(event);
  }

  // If the method is neither GET nor POST, return a 405 Method Not Allowed response
  return {
    statusCode: 405,
    body: JSON.stringify({
      message: "Method Not Allowed"
    })
  };
};

// Function to retrieve student records for GET requests
function getStudentRecord(event) {
  // Construct a response object with HTTP status and body
  const response = {
    statusCode: 200, // HTTP status code for a successful request
    body: JSON.stringify({
      student_details: student // Include the student details in the response body
    })
  };
  return response; // Return the constructed response
}

// Function to create a new student record for POST requests
function createStudentRecord(event) {
  // Parse the JSON body of the incoming request to retrieve student details
  const body = JSON.parse(event.body);

  // Construct a response object indicating success and echoing the received details
  const response = {
    statusCode: 200, // HTTP status code for a successful request
    body: JSON.stringify({
      message: "successfully created", // Message indicating the operation was successful
      details: body // Include the details of the created student record in the response
    })
  };
  return response; // Return the constructed response
}
