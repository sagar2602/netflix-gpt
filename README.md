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
11. Store uses configStore and takes reducers and this reducer will have different reducers from different slices.
12. Created userSlice with the help of createSlice , while creating it we have name, initialState, and also add reducers: {}
13. Inside reducers add different type of reducer functions createUser and leaveUser ; export the reducer and reducer actions
14. Injected userReducer which was default exported from userSlice inside my appDataStore
15. Integrate my App with my store through using Provider
16. Now lets use the store to store data if any user sign up, sign in or logout; So for that either we have to use the whole logic of adding to store have to write after sign in or sign up and then after logout, but we can use firebase utility onAuthStateChanged() ; it is type of a event listener which always get fired at the time of any login or logout activity
17. And for using store we have to dispatches the action which we have exported from userSlice
18. Now its an api call right to add this utitlity of firebase - onAuthStateChanged() so I am adding it inside the useEffect to just call it at only once
19. I am trying to redirect user from my eventListener by using useNavigate() hook, but I am reciving this error - "useNavigate() may be used only in the context of a <Router> component" , this is becz I am trying to navigate from the Body component which also contains my RouteProvider and I can only navigate from the child components , the component having the RouteProvider, so I have two ways either I can move my routing to App level then I can use navigate hook in my event listener which lies in body component, or either I will use navigate hook inside my Login component, so I am going to use 2nd way
20. Added Header component over the Browse route and also added Signout firebase integration
21. So I have added signout api inside the Header component and also navigate it to the home page after sign out, actually we have to also clear our redux data store at the time of signout, but we have not written any logic for that bcz it gets handled through event listener through leaveuser action
22. Whole flow is coorectly visible inside redux extension that leaveuser action is firing coorectly
23. Now I have to hide USER_AVATAR and Signout in case if user is not signed in and show only if it is signed in; so this code should be written in Header component, so for getting user info lets subscribe to redux store and if I get the data in store that means user is signed up or logged in , then show otherwise hide
24. Subscribe store using useSelector() hook useSelector((store) => store.user)
25. Lets add display name in redux store as well, for it I have to update the user profile just after the signup, so I am going to use api - updateProfile() from firebase inside my Login component
26. It is going in redux store through the event listener as I have already mapped the name with display name in my redux store.
27. I have used the api inside Login component , I am getting name inside my redux after sign up, but not at first time, it is coming after doing the refresh, lets fix this bug
28. The issue is that currently my event listener updating the store , but it is not able to update name here, so lets update the store just after doing signup as well inside our Login component
29. Lets also update the photo url of the user, just to check everything works fine with the display name
30. I have tried it fixing the bug which I thought gets fixed but it is not, now what is happening I get to know through the photoUrl I have used , according to my observation what is happening is that, at first image logo and display name are null , but after few seconds store have data for them and they get update automatically this time, previously we have to refresh but now its updating but after few seconds, so this bug is visible through photo url, so lets try to fix this glitch as well.
31. Above glitch still remains as it is - because how the flow is working lets understand, As soon as SignUp get clicked > createUserWithEmailAndPassword api get called which created user with email and password > then onAuthStateChanged event listener called for updating the store with 2 values i.e. email and userId > Now updateProfile api gets called which now updates the displayName and photoUrl > which updates the store again with user id, email , displayName and photourl, so that is why we are seeing this glitch, so this issue remains open, but do not worry this is a rare requirement and it is just to understand the flow.
32. Now lets make our browse route only available for authentic user - so if the user is anonymous and try to access browse page then redirect the user to login route and if the user is authenticated and try to access login page then redirect user to browse page
33. For this bug we have to naviagte user to browse page it is loggedin and navigate to "/" if logged out user , so it can easily be achieved from event listener, but problem is event listener present in Body component and I cannot use navigate hook as I am not able to do earlier as well, so lets move this event listener over the Header component , this works well as it is also present over every page as well.
34. As a result I can also remove all other redirections which was added earlier , because now the event listener itself take cares of all the scenario
35. I have added the unsubscribe to the listener onAuthStateChanged() as it returns the unsubscribe function
36. Also fixes one bug that user avatar logo is not changing while signin

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
