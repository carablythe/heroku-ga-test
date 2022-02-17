# Full-stack Application

SEI Project 2, February 2022


APP URL: https://rewardplease.herokuapp.com/

OVERALL APPROACH TAKEN:
An app for kids to get rewarded for being helpful around the house and in general trying to be more independent each day. They log such activities/chores and accrue points based on the minutes they work.

TECHNOLOGIES USED:
express, ejs, mongoose, partials, flexbox, javascript... There is no seed file because the data is all user-generated.

UNSOLVED PROBLEMS:
Right now it is just an app for one child (my child). In order for others to use it, I need to get login capability set-up, as well as user-schema association so that each user (only) has access to their own data collection.

STRETCH/FUTURE GOALS:	It would be great if parents could login to customize the list items, points, possible rewards, etc.

NOTES/FINAL COMMENT:
My app is really simple, but for the most part accomplishes the goal I set out to achieve.  It is already being used and enjoyed by my daughter, and the physical whiteboard and paper being used for such a purpose in the past is no longer necessary, so that is a success in my book.

-----
-----

INITIAL PLAN outlined below (changes made):

“My Rewards” (changed to *Reward, please!*) App Purpose: for parents to encourage their children to be more independent in completing daily routines, chores and other helpful activities without the assistance of the parents.

The top page has four lists displayed.

The Morning Checklist:
With all of the usual morning routines listed like brushing teeth, getting dressed, etc.

The Before-Bed Checklist:
With all of the usual nighttime routines listed like finishing homework, taking a bath, etc.

(Buttons under each of these two checklists: the child clicks when all of the Morning Checklist activities are complete	the child clicks when the Before-Bed Checklist activities are complete. These two buttons redirect to a game/game site the kids can play as a reward.)

The Extra Activities List:
Some ideas of possible “extra” activities/chores  (e.g. vacuuming, folding laundry) the child can do and the exact # of points that can be earned for each activity are displayed.

The Rewards List:
Possible rewards (e.g. getting ice cream, going to a movie) a child could get for completing the Extra Activities and how many points are needed to get each reward…

Links to these two pages below:
	“Enter New Activity”:
Form the child fills out where they select from above list of chores or write in another activity they did.

“See list of  completed activities”
automatic date/time stamp on the “enter new activity” that displays in the “list of completed activities page”/ Also gives the option of deleting or editing each completed activity in the list
