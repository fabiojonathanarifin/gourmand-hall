Developer Notes:

URGENT: 
- connect comment reference to story


General: 
- add Validation
- add Authorization
- add popup notification
- add unit testing(jest, testing library)

Client:
- display comment on FE (for each user's post)
- fix Profile.jsx styling
- finish tags styling
- add Complete profile (Addinfo)
- turn complete profile to Edit Profile
- finish styling loginform (Center everything)
- fix login form styling
- add author to PostStory.jsx
- move POST axios from pages to API

Server:
- connect comment ref to story (after connecting it to author)
- setUp routing for addition user data (birthday location etc)
- fix catchAsync for controllers
- BE for Additional Infomration
- create notification

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
