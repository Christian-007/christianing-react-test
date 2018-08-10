# Star Wars API Demo
This project is created using ReactJS and uses data from `https://swapi.co/` API endpoints. The project is bootstrapped with `create-react-app` command which automatically generates ready-to-use ReactJS project with some default `Webpack` configurations out of the box.

## Table of Contens
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installing and running the project](#installing-and-running-the-project)
- [Running build version on a static server](#running-build-version-on-a-static-server)
- [Methods of Implementations](#methods-of-implementations)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine. In addition, methods of implementations will be presented to make it easier to understand the flow and structure of this project.

### Prerequisites
Please ensure you have the following installed on your machine:
- NodeJS
- Github CLI

### Installing and running the project

#### 1. Clone project
Navigate to your preferred folder in your machine and clone this project repository with the following command:
```
$ git clone https://github.com/Christian-007/christianing-react-test
```
This will create a new folder with this project files inside of it.

#### 2. Install project dependencies
Navigate to the cloned project folder and run `npm install`.
```
$ cd projectname/
$ npm install
```
This setups the project with the list of depedencies that are listed on `package.json` file.


#### 3. Run project
Run the project using the following command:
```
$ npm start
```
This should run the project on `http://localhost:3000` and open your default browser automatically.

### Running build version on a static server
The command `npm start` will run the un-optimized version of ReactJS app. The following can be done to generate a production version and run it locally on your machine:
### 1. Generate production build
Run the following commands to generate a production build of the project:
```
$ cd projectname
$ npm run build
```

### 2. Install a static server
You can skip this step if you have installed a static server. Otherwise, run the following command:
`
$ npm install -g serve
`
This will install a `serve` package globally.

*Note for UNIX user: if you encounter permission problem, use the command `sudo npm install -g serve` to install the package as an Admin.*

### 3. Run the production build
With the command `serve`, you can now run the production build which is located in `/build` folder.
```
$ serve -s build
```
### Methods of Implementations
As mentioned above, this project is a ReactJS app built using `create-react-app` command. The following are the main dependencies of the project:
- `axios` for handling Promise based HTTP request (GET, POST, etc.)
- `bootstrap` and `react-bootstrap` CSS responsive frameworks with ReactJS components friendly
- `react-router-dom` react router v4 for handling router navigation throughout the web app
- `react-redux`, `redux`, and `redux-thunk` for handling state management within the ReactJS app
- `react` and `react-dom` the foundation for building ReactJS app

Additionally, the following are dependencies that can improve the visualisation of webapp:
- `react-content-loader` for displaying SVG based content loader while fetching data from API
- `react-fontawesome` ReactJS package for displaying `FontAwesome` icon components

#### Method 1: Routing
The folder `router-navigation` contains files that are responsible for defining the routing flows. `RouterContainer.js` lists down the overall routes for the web app. `FilmPath.js` controls only routes related to Films (e.g. List of films and details of selected film). The routing defined in this project are as follows:
- **Home Routes**
    - `/` is for displaying Landing Page presented by the component `src/components/Home`
- **Films Routes**
    - `/films` is for displaying list of Star Wars films presented by the component `src/components/Films`
    - `/films/:number` is for displaying the details of the selected film presented by the component `src/components/Home`
- **404 Page Not Found**
    -  The component `src/components/NotFoundPage.js` will be displayed if the URL does not match any of the defined routes.

### Method 2: Fetch data using Star Wars API
As `redux` is used in this project, to fetch data, it is advised to perform the operation within redux `actions/index.js` functions. The following is the flow of fetching the list of Star Wars films:
1. User visits `/films` route which invokes the component `Film`
2. Upon rendering the component, the redux `actions` function `this.props.fetchFilms()` is invoked.
3. The function `fetchFilms()` will use the `axios.get(url)` function to retrieve a GET request from Star Wars API endpoint `https://swapi.co/films/` which then will return a JSON response.
4. While fetching the data, the component will show some predefined content loaders from `ComponentLoaders/FilmLoader.js`.
5. The response from the GET request is dispatched to the relevant `reducers` which will return a new state with list of star wars films.
6. In the `Films.js` component, it will then check whether there is films data coming in the `reducers/filmReducers.js`. If there is, then stop showing the content loader and show the relevant data.

### Method 3: Retrieve the selected film details
This method is similar to the previous method, however, it requires a nested fetch. The followings are the flow:
1. User clicks on View -> button on one of the films.
2. The browser navigates to `films/:number` route which will invoke the component `FilmDetails.js`.
3. Upon rendering the component, the redux actions function `this.props.getFilmDetail(filmIndex)` is invoked (`filmIndex` value is retrieved from the URL param `:number`).
4. The function `getFilmDetail(filmIndex)` will use the `axios.get(url)` function to retrieve a GET request from Star Wars API endpoint `https://swapi.co/films/:number` which then will return a JSON response.
5. If it returns a success response, it will fetch some other data, such as `characters`, `planets`, and `starships`. These will be fetched inside the general function `getBatchDetails(fieldType, batchDetails)` (e.g. `fieldType` is `characters` and `batchDetails` is the response array like `response.data.characters` that contains a list of Star Wars API endpoint.
6. While fetching the data, the component will show some predefined content loaders from `ComponentLoaders/FilmDetailLoader.js`.
7. The response from the GET request is dispatched to the relevant `reducers` which will return a new state with list of star wars films.
8. In the `FilmDetails.js` component, it will then check whether there is film details data coming in the `reducers/filmReducers.js`. If there is, then stop showing the content loader and show the relevant data.

### Method 4: Handle not found film ID
One of the defined routes is `films/:number' which contains dynamic values. This may lead to an error in which the user cannot see. The following are the flow to handle and show a friendly Not-Found-Page to users:
1. Inside the redux action function `getFilmDetail(filmIndex)`, there is a `catch` method that sets `fetchError` value to `true` inside `filmReducers`.
2. In the component `FilmDetails.js` within the `render()` function, it performs a check whether the `fetchError` data inside `filmReducers` is `true`. If it's true, then shows `NotFoundPage.js` component, otherwise, shows relevant data.

## Created by
Christian Ing Sunardi
