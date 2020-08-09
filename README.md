# Problem Statement: Hard to track COVID contact tracing.

## Solution: COVID PATH => An application that tracks all the registered users to keep you informed about your vicinity.

### Assumptions:

    > We have a good amount of traffic
    > We have valid information about users, whether they have COVID or not

### Features:

    > Notifying users when they crossed path with a COVID suspected person(or COVID confirmed person)
    > If a User gets COVID+ve then our platform will inform all the other Users
      who have crossed paths with that person in the last 15 days.

### How are we going to do it?:

    > we are going to track Users location in the Back-End using REDIS and it's
      tools.
    > we should maintain a record of all the other users a user has
      crossed-paths with.
    > Each and every user has his own risk factor which lies between 0-10.
       0 is not likely to have COVID & 10 is most likely to have COVID.
    > If a User 'A' has crossed-paths with another user 'B' then on both of
       their records both of the users get registered.
    > Both the users also have their own risks 'Ar' & 'Br'.
    > We made a model which would tweak the risk factors of both the Users
       depending on many factors proximity(distance between infected and user
       their age, their comorbidities(like diabetes,bp etc.) and more.
    > In case a User who is using the app is tested out to be COVID+ve.
        the app informs all other users with whom this user has crossed paths
        with in the last 15 days.

### Where we are now?:

    > We have implemented User authentication.
    > We have made a chatbot for COVID Info.
    > We made a ML model which will tweak the riskFactor in Users profile.
    > we are tracking the Users location in the backend.
       and we have an algorithm which gives us the list of people next to a user
       in a particular radius.
    > We have put salt encryption over Users sensitive data.

### what we need to do?:

    > We need to connect the REDIS backend to the front-end and have
        location comunicated.
    > We need to integrate the RiskFactor ML model in the back-end.
    > And a few bugs to be resolved.

### Team: Sociologic

      1. Jaideep C, Harshita Marupaka: Backend
      2. Shruti Srivastava, Mallika Patil: Frontend
      3. Shruti Srivatsan: Machine Learning
