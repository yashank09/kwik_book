# Welcome to Kwik Book

View and Book the best flights around the world

Made using React.js

## Building

`cd ./kwik_books`

`yarn`

`yarn start`

## Thought Process

- I decided to isolate Form component, Date-Input and Suggestion components to make the app maintainable

- I also isolated `api` calls in an independent file to seperate concerns

- Currently all state is local and shared to it's children; this can be moved to a global state using Context if needed

- Styling of the components has not been thought much. I have extensive experience with CSS and Material design for further customizations

- Since no flights are available from the `api` due to COVID restrictions, I could not focus too much on the design of the flight cards. The logic however is completely satisfied

- Lastly, I'm still getting better at testing react apps. I understand how we render screens, do actions and assert the result during automated testing. I have made sure my components are easily testable and scalable

### Thanks for your time! The site is available [here](https://kwik-book.netlify.app)
