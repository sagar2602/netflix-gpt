# Netflix GPT

1. Basic structure with firebase and tailwind integration
2. Creating Components - Header/Body/Login/Browse
3. Inside Body Component - Login/Browse
4. Now lets make Header for now I am analysing lets give it a background image and link components
5. For now I have just created the Login page having Netflix logo coming from Header component and inside Login component I have added BG-IMG and my login form while adding some css, layout of login page is almost ready.
6. SIGN-IN and SIGN-UP Form toggle
7. Prevented the default form submit and used the useRef hook to get the input values and added the logic of validation on submitting the form submit whether it is Signin or Signup , formed a validation where added logic for validation and on the basis of these validations written the logic for dynamic error occuring below each field.
8. I have fixes an error coming after submitting signup form, then I have setup the firebase and integrated it inside the app for signing up the user.
9. While signing up there are 2 api calls can be observed inside the network tab which injecting the users inside the firebase - 
POST - "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWFqJRhNznuGHzJFgCY_70qWjsJ2okT3o"
POST - "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBWFqJRhNznuGHzJFgCY_70qWjsJ2okT3o"
10. Adding firebase at signin as well

# Features
- Browse
  - Header
    - Logo
    - Links of Various routes
    - Search icon
    - Children Switcher
    - Notification icon
    - Profile switcher
  - Login
    - Sign In
    - Email/Mobile No
    - Password
    - Signin button / Use a sign-in-code
    - Forgot Password
    - Remember Me
    - New to Netflix? Sign up Now
  - Signup
    - Full Name
    - Email
    - Password
  - Main Movie
    - Trailer in Background
    - Movie Logo, Title and Description
    - Continue Watching
    - Movie Suggestions
      - Movie Listings * N
