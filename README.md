# Spectech - Full-Stack Application with RESTful API
🕶️ Spectech is a comprehensive full-stack application designed to provide hands-on experience with Spring Boot for building a robust RESTful API that supports CRUD operations. The project primarily focuses on the admin side, offering extensive functionalities for managing products, orders, and other administrative tasks.

### Key Features

- **Admin-Centric Functionality:** Spectech places a strong emphasis on the admin side, providing an extensive set of functionalities for efficient management of products and other administrative tasks.

- **Secure RESTful API:** The project leverages Spring Boot to create a secure and efficient RESTful API. Admins can seamlessly perform CRUD operations, ensuring a smooth data management process.

- **HTTPS Requests:** Secure communication is facilitated through the use of HTTPS requests, ensuring data integrity and confidentiality in every interaction.

- **Postman Integration:** Spectech integrates seamlessly with Postman, providing a convenient environment for testing and development of the RESTful API.

### Technologies Used

### Backend
- **Spring Boot:** Used for developing the backend and implementing the RESTful API. 🌐
- **Java:** The programming language for Spring Boot. ☕
- **MySQL:** Database for storing frame details and user details. 🗃️

### Frontend
- **React:** Used for building the frontend user interface. ⚛️

### API Communication
- **HTTPS Requests:** Used for secure communication between the frontend and backend. 🔒

### API Testing and Development
- **Postman:** Integrated for testing and development of the RESTful API. 🧪

### Project Overview

Spectech is a hands-on, full-stack application developed with Spring Boot, emphasizing the admin side for efficient management of products, orders, and various administrative tasks. This project serves as an immersive experience in building a robust RESTful API supporting CRUD operations.

### Installation and Setup Guide

To run Spectech locally on your machine, follow these steps:

### Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your machine:

- **Java Development Kit (JDK):** Spectech uses Java, so make sure you have the JDK installed. You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase-downloads.html) or use OpenJDK.

- **Node.js:** Ensure that Node.js is installed on your machine. You can download it from [the official Node.js website](https://nodejs.org/).

- **MySQL Database:** Spectech relies on MySQL for data storage. Install and set up MySQL on your machine. You can download MySQL from [the official MySQL website](https://dev.mysql.com/downloads/).

### Backend (Spring Boot)


1. **Clone the Repository:**
   ```bash
   git clone https://github.com/monishperiyasamy/SpecTech-RestAPI.git


2.**Navigate to the Project Directory:**
cd backend/SpectechProject

3.**Build and run the Spring Boot application:**
./mvnw spring-boot:run  
This will start the backend server at http://localhost:8080.  
### Frontend (React)  
1. **Navigate to the frontend directory:** cd frontend/spectech
2. **Install frontend dependencies:** npm install  
3.**Start the React application:** npm start

### Database  
Create a MySQL database for Spectech. You can use a MySQL client or the command line to create a database.  

Update the database configuration in the backend. Open the application.properties file in the src/main/resources directory and configure the database connection properties:  

spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name  
spring.datasource.username=your_database_username  
spring.datasource.password=your_database_password  

Replace your_database_name, your_database_username, and your_database_password with your actual database information.  
### Final Steps
With the backend server running and the React development server started, open your web browser and visit http://localhost:3000.  

You should now see and be able to interact with the Spectech application locally.  

### API Endpoints 
### Frame Details

 **Get All Frames with Pagination and Sorting:** GET /frames/getframes?page=0&size=4&sortBy=prdtId 
 
**Create Frame Details:** POST /frames/postframes   

**Get Frame Details by ID:** GET /frames/getframes/{id}  

 **Update Frame Details by ID:** PUT /frames/updateframes/{id}  
 
 **Delete Frame Details by ID:** DELETE /frames/deleteframes/{id} 
 
 **Delete All Frame Details:** DELETE /frames

   ### Custom Queries
**Get Frames by Brandname:** GET /frames/getframesByBrandname/{brandname}  

**Get Frames by Rating Range:** GET /frames/getframesByRating/{start}/{end}  

**Delete Frames by Rating Status:** DELETE /frames/deleteframesByRating/{status}  

**Update Frame Price by Rating:** PUT /frames/upadteFramePriceByRating/{price}/{rating}  

### User Signup
**Create User Account:** POST /cred/signup
### User Login

**Get All Logged-in Users:** GET /login/get


   












   
