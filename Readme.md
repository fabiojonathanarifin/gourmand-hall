Developer Notes:

Client:
- do react login authentication
- work on profile based on login
- make comment work on Story.jsx (showStory) page 

Server:
- isLoggedIn middleware created
- continue passportJS integration for login
- work on confirmed password for validation


TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios

NOTE:
cookie-parser installed yet unused
connect-flash installed yet unused
