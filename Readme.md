Developer Notes:

Client:
- make comment work on Story.jsx (showStory) page 
- fix Profile.jsx (social media)
- Add tags to FE from BE


Server:
- setUp routing for addition user data (birthday location etc)
- fix catchAsync for controllers
- BE for Additional Infomration
- create notification

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
