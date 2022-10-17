Developer Notes:

Client:
- make comment work on Story.jsx (showStory) page 
- fix Profile.jsx (social media)


Server:
- setUp routing for addition user data (birthday location etc)
- fix catchAsync for controllers
- BE for Additional Infomration
- make Post(Tags) work, and put the most recent post on top instead of the bottom
- create notification

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
