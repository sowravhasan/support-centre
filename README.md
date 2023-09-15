## Project Features

### Feature 1: Course Selection
- Description: Users can select courses from a list.
- Implementation: I maintain a list of available courses in the `allCourses` state variable, which is fetched from a JSON file using `fetch`. Users can select courses, and the selected courses are stored in the `selectCourse` state array. We also calculate and display the total credit hours and price for selected courses.

### Feature 2: Credit Hour Limit
- Description: The application enforces a credit hour limit of 20 hours.
- Implementation: I use the `remaining` state variable to keep track of the remaining credit hours. When a user selects a course, we calculate the remaining credit hours and update the state. If a course exceeds the limit, an error message is displayed using the `toast` library.

### Feature 3: Real-time Updates
- Description: Users can see real-time updates of their selected courses' total credit hours, total price, and the remaining credit hours.
- Implementation: We use React's state management to update and display these values dynamically as users interact with the application. The `totalCredit`, `totalPrice`, and `remaining` state variables are updated in response to user actions, providing a seamless and responsive user experience.

## State Management

In this project, state management plays a critical role in handling user interactions and providing real-time feedback. We use React's `useState` and `useEffect` hooks to manage the state in the following ways:

- **Course Data**: The list of available courses is fetched from a JSON file and stored in the `allCourses` state array.

- **Selected Courses**: The selected courses are maintained in the `selectCourse` state array. Courses are added or removed based on user interactions.

- **Remaining Credit Hours**: We track the remaining credit hours in the `remaining` state variable and update it when a course is selected. This ensures that users stay within the credit hour limit.

- **Total Credit Hours and Total Price**: The total credit hours and total price for selected courses are stored in the `totalCredit` and `totalPrice` state variables, respectively. These values are updated dynamically to reflect the current selection.

- **Error Handling**: Error messages, such as exceeding the credit hour limit, are displayed using the `toast` library to provide precise feedback to users.