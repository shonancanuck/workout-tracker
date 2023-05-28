# FitTracker

FitTracker is a workout app designed to help users track their fitness progress. It allows users to sign up, log in, store their daily workout statistics in a database, check their last workout, and track their progress on each exercise. This app was developed as a Minimum Viable Product (MVP) solo project for the Code Chrysalis Immersive program.

## Features

- User Authentication: FitTracker provides a secure user authentication system that allows users to sign up and log in to their personal accounts.
- Workout Tracking: Users can record their daily workout statistics, including exercise details such as the type of exercise, sets, reps, and weight lifted.
- Database Storage: FitTracker utilizes a database to store user information, workout data, and progress records.
- Last Workout Display: Users can view their last recorded workout, providing them with a quick overview of their most recent fitness session.
- Exercise Progress Tracking: FitTracker enables users to track their progress on each exercise over time, helping them monitor improvements and set new fitness goals.

## Getting Started

To get started with FitTracker, follow the steps below:

1. Clone the FitTracker repository from GitHub:

   ```
   git clone https://github.com/your-username/FitTracker.git
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Set up the database:

   - FitTracker uses a database to store user data and workout information. Make sure you have a compatible database system (such as PostgreSQL) installed and running.
   - Create a new database for FitTracker.
   - Configure the database connection in the application's configuration files.

4. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Define the necessary environment variables in the `.env` file, including database credentials, session secret, etc.

5. Run the application:

   ```
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access FitTracker.

## Usage

FitTracker provides a simple and intuitive user interface. Here's a brief guide on how to use the app's main features:

### Sign Up

- On the FitTracker home page, click on the "Sign Up" button.
- Fill in the required information, including your name and password.
- Click on the "Sign Up" button to create your account.
- You will be redirected to the login page.

### Log In

- On the FitTracker home page, click on the "Log In" button.
- Enter your registered name and password.
- Click on the "Log In" button to access your account.

### Recording a Workout

- After logging in, you will be taken to the dashboard.
- Click on today's date on the calendar.
- Select an exercise from the list and enter the exercise details, such as sets, reps, and weight lifted.
- Click on the "Submit" button to record your workout.

### Viewing Last Workout

- On the dashboard, you can see your last recorded workout displayed.
- This provides a quick summary of your most recent fitness session.

### Tracking Exercise Progress

- FitTracker automatically tracks your progress on each exercise.
- Navigate to the "History" section in the app.
- You will find a comprehensive overview of your progress on different exercises over time.
- Use this information to monitor improvements and set new fitness goals.

## Contributing

FitTracker is an open-source project, and contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the FitTracker repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive
