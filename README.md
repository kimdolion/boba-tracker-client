# Boba Tracker
Keep track of your bubble tea purchases so you can remember what you liked and calculate what you've spent.

[Front-end Client](https://kimdolion.github.io/boba-tracker-client/#/)

[Front-end Repo](https://github.com/kimdolion/boba-tracker-client)

[Back-end Client](https://limitless-everglades-63033.herokuapp.com/)

[Back-end Repo](https://github.com/kimdolion/boba-tracker-backend)

## Technologies Used
HTML, CSS, JavaScript, Boostrap, AJAX, React

## Development Process
Planning the project

## Problem Solving
### Modal
I wasn't sure how modals interact with React. I was thankful for the React Bootstrap documentation so I could grab some code and play with it in the app.

Once I got a working modal filled with dummy data, I played around with making it display the forms I had created as separate links. I tried to make the modal pull in the form but I hit an issue with it not pulling in the user as well. As it turns out with help from peers and instructors, I wasn't passing the information right for it.

### Ownership
I wanted to make sure that users could only update and delete resources that they were the owner of. I used my backend to help return the owner in the Get requests and based on the owner data, I would then compare that to the currently signed in user on the front end and put in a conditional to check this relationship and display buttons based on that condition.

## Unsolved Problems
None so far?

## Wireframes and User Stories

[User Stories](https://docs.google.com/document/d/1rU0EMt1qlRVzYi5IN6PDTBv9FH-f241SB1buLiKU5VY/edit?usp=sharing)

[Wireframes](https://docs.google.com/document/d/1Bmr5gQ1BCXurel8O9UvznKwcHkwt-F_cnnR5uouSSXA/edit?usp=sharing)

[ERD](https://docs.google.com/document/d/1KAxKF9fMoZRf_MedIocuvrfn7yVN1JOpxzY0Z7Bnkl0/edit?usp=sharing)

## Stretch Goals
I have a number of stretch goals I'd love to implement in future iterations.

- Connect a map that lets users attach that to an order.
  - The map renders the location to be used in a map app so others can go there.
  - Would also like to have some amount of validation that it is in fact a bubble tea store
- Add a rating system to individual orders only controlled by owners
- Calculate how much spent on bubble tea: drink vs toppings?

## Additional Resources
