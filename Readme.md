# Learning App

## Overview

**Learning App** is a platform designed for students to search for notes and previous year question papers with an intelligent search feature. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and aims to provide a seamless and efficient way to access educational resources.

## Features

- **Intelligent Search:** Quickly find relevant notes and question papers.
- **User Authentication:** Secure login and registration system.
- **Responsive Design:** Accessible on various devices and screen sizes.
- **Notes and Question Papers:** A vast collection of educational resources.

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Hosting:** Netlify

## Project Structure

```
Learning_app/
├── Frontend/            # Frontend code
│   ├── public/
│   └── src/
├── Backend/            # Backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── .gitignore
├── package.json
├── README.md
└── ...                # Other configuration files
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/gauravkatara53/Learning_app.git
cd Learning_app
```

2. Install dependencies for both client and server:

```bash
cd client
npm install
cd ../server
npm install
```

3. Set up environment variables:

Create a `.env` file in the `server` directory and add the following:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the application:

```bash
# In the server directory
npm start

# In the client directory
npm start
```

## Usage

1. Visit the hosted application at [topicjsr.netlify.app](https://topicjsr.netlify.app).
2. Register or log in to your account.
3. Use the search feature to find notes and previous year question papers.
4. Access and download the resources as needed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to all the contributors and supporters of this project.

## Contact

For any questions or feedback, please reach out to me at gauravkatara53@gmail.com.
