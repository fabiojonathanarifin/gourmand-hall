Developer Notes:

Client:
- make comment work on Story.jsx (showStory) page 
- fix Profile.jsx (social media)
- add a page to input additional information, such as birthday, location, etc



Server:
- continue passportJS integration for login
- setUp routing for addition user data (birthday location etc)

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
