# Student Placement Portal

This project is a Student Placement Portal designed to facilitate the registration, login, and application process for students seeking job placements. The application allows students to view available companies, submit applications, and manage their profiles.

## Features

- **Student Registration**: Students can register by providing their name, email, and password.
- **Student Login**: Registered students can log in to access their profiles and applications.
- **Profile Management**: Students can update their profile information, including phone number, branch, and year.
- **Company Listings**: Students can view a list of companies available for applications, along with details about roles, locations, and salary packages.
- **Application Tracking**: Students can view the status of their applications submitted to various companies.

## Project Structure

```
frontend
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   └── CompanyCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── StudentRegistration.jsx
│   │   ├── StudentLogin.jsx
│   │   ├── StudentProfile.jsx
│   │   └── Applications.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Follow the on-screen instructions to register, log in, and manage your applications.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.