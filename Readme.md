Developer Notes:

Client:
- make comment work on Story.jsx (showStory) page 
- fix Profile.jsx (social media)
- add a page to input additional information, such as birthday, location, etc
- add Local fav feature
-continue localRestaurant.jsx (check if create Restaurant is working) & add getRestaurant



Server:
- continue passportJS integration for login
- setUp routing for addition user data (birthday location etc)
- add local favorite feature
- fix catchAsync for controllers
- create getRestaurant

TIP:
req.user(passportJS) can only be accessed from the FE if withCredentials: true is used on fetch/axios
