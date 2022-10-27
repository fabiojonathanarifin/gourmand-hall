Developer Notes:

General: 
- add Validation
- add Authorization
- add popup notification

Client:
- make comment work on Story.jsx (showStory) page
- fix Profile.jsx styling
- finish tags styling
- add Complete profile (Addinfo)
- turn complete profile to Edit Profile
- finish styling loginform (Center everything)

Server:
- setUp routing for addition user data (birthday location etc)
- fix catchAsync for controllers
- BE for Additional Infomration
- create notification

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
