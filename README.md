# Backend for CampusPals

The campuspals-db repo contains an API and access to our MongoDB cluster. The following routes can be accessed via:

## GET
- https://campuspalsdb.herokuapp.com/clubs
- https://campuspalsdb.herokuapp.com/uni
- https://campuspalsdb.herokuapp.com/tutors



## POST
- https://campuspalsdb.herokuapp.com/clubs/add
- https://campuspalsdb.herokuapp.com/tutors/add

Example POST req queries:
```
{
    "title": "UBC Math Tutoring MATH200/221",
    "name": "UltimateTutor123",
    "description": "Available to tutor all MATH2XX level courses for UBC.",
    "website": "example.com",
    "rate": "30/hr CAD",
    "photoURL": "https://i.imgur.com/Tk6jIxy.jpg"
    
}

{
    "clubName": "SuperStonk",
    "imgURL": "https://i.imgur.com/kFxFyYa.png",
    "website": "https://www.reddit.com/r/wallstreetbets/",
    "description": "Club to make stonks go up @UBC.",
    "university": 0
}

```
