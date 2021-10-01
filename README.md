# NodeJs

> I had created this repository while I was learning NodeJs

>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

```
HTMLboilerplate
```
> I have learnt how to use module in NodeJs, how to export custom module, how to access file system etc.

```
NumberGuessingGame
``` 
+ Phase 1: 
    + Start by taking input from user in console
    + check it's a number or not
    + if number check it with pre-defined integer
    + otherwise throw an error
    + if the user input is equal to the pre-defined number
        + close readline stream and display winning message
    + if user input less than pre-defined number
        + display 'too low' message
    + if user input greater than pre-defined number
        + display 'too high' message         

+ Phase 2:
    +  find a suitable random number generator package from NPM
    +  replace pre-defined integer with this generated random number

+ Learnings:  
    + How to take user input from console 
    + How to install/uninstall npm packages
    + How to use implement npm packages in project
    + What is Package.json
    + What is node_modules

```
Measure Me
``` 
> I am trying to build a timesheet like application where user have to fill the time allocation for there day to day activity. Each activity have some amount of time allocated. Application will hold the activities and time allocation for every activity. It will display all the activities with seperate container.

+ Phase 1:
   + create a button to open modal
   + collect user activity and time spend

+ Phase 2
   + store data into local storage

+ Phase 3:
    + fetch data from local storage
    + display it with a UI container