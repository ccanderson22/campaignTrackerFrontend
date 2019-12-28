Thank you for choosing Catalyte for your software need, follow the steps below to get the frontend up and running

***These steps are assuming you have already set up the SuperHealthInc(LINK BELOW) backend and have it running, if you have not done that, go do that first then setup the frontend***
https://gitlab.catalyt.es/training/cycleworkinggroups/denver/denver_2019_cycle_1/_associates/canderson/projects/canderson_final_backend
#
~

1. Open your IDE (i.e. VisualStudio Code) then click File in the upper left and go down to Open Folder, and select the folder you have all the frontend files in.


2. Once the project is open, go to the top navbar once again and select Terminal,and go down and click the 'New Terminal' option.


3. With the terminal open, make sure you have the project file selected in the file path. Next up, in the terminal type 'npm install', it might take a minute to install all the files.

4. Next is to run the tests by entering 'npm run coverage' to the terminal and hitting enter

5. Next will be to build the frontend, in the terminal enter 'npm run build' and hit enter

6. Once build is complete in the terminal enter 'npm install -g serve' and hit enter, and wait for it to complete.

7. After that install is done, enter 'serve -s build' in the terminal and hit enter. There should be a success message that pops up in the terminal. 

8. After all the above step have been complete the front end should be running on 'http://localhost:5000/'



**Postman collection:** https://www.getpostman.com/collections/e14ea1256df572743142
**Swagger Link:**<br> http://localhost:8080/swagger-ui.html#/
#


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
