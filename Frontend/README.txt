About the application:
This is an application with Reactjs front and node.js in the backend with express
acting as the bridge between them both.

In the landing page the user will be asked to enter their credentials and only when
they match with the data in backend they'll be taken to the home page otherwise an
alert message pops up stating that no person is found with the entered credentials.

There is no signup screen as the user data is created manually in the backend using
postman.

The user data is stored in localstorage and is being used to check if the user is
logged in and to fetch user name and display on the screen.

React.map():
Used React.map() in the About-Us, Contact, Home and Jobs pages to display different
images as per the page that the user is in.

Structuring of the folders:
- The entire application is split into Backend and Frontend Folders.
1.Backend:
Has action, functions, models and operations folders apart from the entry file.
2.Frontend:
Has Components, Images folders under src folder apart form the entry file.
Here the Components file is split into Cards, Login, Navbar and Pages folders.

Styling:
Styling is done in a mixture of React Bootstrap, Inline and external CSS.