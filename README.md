# A or Nay

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Create React Native App](https://github.com/react-community/create-react-native-app).

"A or Nay" aims to make NYC Department of Health records more easily accessible to the public. There are many apps that allow people to easily access restaurants with ratings and reviews, but "A or Nay" fills a gap in the space by creating opportunities to crowd-source reviews and ratings and get valuable information like the restaurants most recent health department grade and a history of violations. 

Another goal of "A or Nay" is to create more transparency between the businesses and their customers. Excluding a letter grade posted in front of the business, most customers are not aware of the infractions that a business can get and still recieve an "A". Therefore, this app can create a positive influence over businesses to continue to elevate their safety standards. As such, seeking business advertising can help offset the costs of the app and create a stronger sense of transparency to their guests. As a future feature, the app will also provide an opportunity to business owners to address anything in their history that might concern their guests.

By being available as a native app and a web app, "A or Nay" is positioned to be available to smartphone users and anyone with internet access. 

## User Experience 
When a user accesses "A or Nay", they are immediately brought a search page where they can look up any restaurant, cafe or coffee shop in New York City. 

Next, the user will see the results of that search and choose the location they would like to learn about. 

When a user makes a choice, that location's information will show the basic address information and map location. Also, the location's most recent letter grade will be shown along with the current crowd-sourced average and reviews.  

The user can then choose to see all violations which are organized by the most recent date. 

The user can also choose to personally review the location. A simple form appears where the user can rate the location from 1-5 stars and include their own personal experience about this location. 

## Future Features 

Dynamic mapping
User authentication 
Favoriting feature 
FAQ section to help users understand how grades are determined from DOH health inpections and other basic quesitons about the app

## About the App

"A or Nay" is built using React and React Native along with React Native Web. "Write once, render anywhere" is the driving force behind RNW. It renders React Native code for the browser which allows developers to more easily reuse components, increasing productivity and reducing time to deploy. 

## Installation 

git clone repository && cd into directory

### `npm install `
In the project directory, you can run:

### `npm run start-web`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

To access the microservices api to save reviews, git clone the [a-or-nay-spring-api repo](https://git.generalassemb.ly/noletubby77/a-or-nay-spring-api). 

[axios](https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format), [underscore](https://github.com/jashkenas/underscore), [react-router](https://github.com/ReactTraining/react-router) and [react-native-for-web](https://github.com/necolas/react-native-web) are the only installed dependencies. 

One of the goals of this project was to test the viability of RNW and to see if it would reduce bloat within the app. Because RNW is still in Beta, it doesn't support most plugins and is not yet 100% compatible with all RN components. Therefore, I was forced to recreate certain plugin components that I had previously relied on. This also allowed me to stretch my React wings and push myself as there is not a lot of support on the web yet for RNW.  

React Native provides a few styling hacks out of the box. Because it uses the StyleSheet api, styles can created on the same page or inline without having to flip back and forth between files to create and make edits. The layout is intrinsically controlled with Flexbox (however, the default is column and not row) so RNW is already mobile responsive without the need to add media queries. And because RN elements are more imperative than React's, accessibility becomes a big win when using RNW.  

My previously built version of "A or Nay" in React Native had a local file size of ~475 MB. The "A or Nay" built in React Native for Web had a file size of ~451 MB. This is not build or deploy size but seeing that I built a native app AND a web app from the same code and took up less computer storage was definitely a win! 

## Gotchas! 
As previously mentioned, RNW only supports most of RN components and few things else. So there was considerable time lost trying to get certain components to work before realizing that they weren't supposed to work. This included the new Flatlist. 

Some of the biggest obstacles happened because I wanted to create a web app and native app with the exact same code. Although this is possible, styling really becomes a challenge. One example was adding textDecoration={none} to a Link. Although it worked, the native app kept giving me warnings that I cannot add that to a View. If I added it to the text, the native app looks good but it isn't removed from the web app. Another issue with styling was that the web app has too much dead space and to get one looking great, the other must suffer. However, the code is identical for both so the reusability factor is a win. 


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  .babelrc
  .expo
  .flowconfig
  .vscode
  App.js
  app.json
  App.test.js
  node_modules/
  package.json
  public/
    index.html
  src/
    App.css
    App.js
    App.test.js
    components 
    images
    index.css
    index.js
    logo.svg
    Routing.native.js
    Routing.web.js
```




