# Sign In - University Catalog App 

This is a web application that includes two pages: the Sign In page and the Catalog page. The Sign In page allows users to log in to the application, while the Catalog page displays a catalog of universities. The app is built using React and Material-UI for the user interface.

## DEMO
https://ulyanalakevich.github.io/test-app/

## Sign In Page

The Sign In page allows users to enter their credentials and log in to the application. It consists of a form where users can input their username and password, and a list of social media links for alternative sign-in options. The background of the page displays a captivating image to enhance the user experience.

## Catalog Page

The Catalog component presents collection of universities in United States. It showcases university cards, each displaying information such as the university's name, country, and website link. Users can easily click on the website link to access more details. Additionally, users have the option to mark their favorite universities by clicking the "Add to favorites" button on each card. The component arranges the favorite universities at the beginning of the grid, offering a personalized experience to users. 

### Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Material-UI: A popular UI library for React that provides pre-designed components and styles.
- Redux: A state management library for managing the application's global state.
- API: The app uses an external API to fetch data.

## Project Structure

The project follows a modular structure, with each component placed in its own file.

## Components

The Sign In page consists of the following components:

1. **Form**: A component that displays a form with input fields for the username and password.
2. **SocialMediaList**: A component that displays a list of social media links for alternative sign-in options.
3. **SignUpButton**: A component that renders a button to navigate to the Sign Up page.
4. **Background Image**: An image component that provides the background image for the Sign In page.

The Catalog page consists of the following components:

1. **Header Component**: The Header component displays the title "Catalog" at the top of the page, fixed to the top as the user scrolls down. It serves as the header for the University Catalog app and provides a consistent user experience throughout the application.
2. **CardComponent**: The CardComponent is a reusable component that displays detailed information about a university in a card format. It includes the university's name, country, and website link. Additionally, it contains the Favorite component to mark universities as favorites.

3. **Favorite Component** : The Favorite component is responsible for rendering the favorite icon and text that allows users to mark a university as a favorite. When the icon is clicked, it triggers the toggleFavorite action from the Redux store, updating the university's isFavorite property accordingly.


**Figma Design:** The user interface and visual design for the Sing In page was created using Figma.

**API:** The University Catalog app fetches university data from the API provided by "http://universities.hipolabs.com/search?country=United+States" to display relevant information about universities in the United States.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

