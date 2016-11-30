var app = angular.module("portfolioMod", []);

app.controller("portfolioCtrl", function($scope) {
  $scope.folioContent = [
    //row 1
    {
      viewUrl: "https://jcjoneskern.github.io/rainy-night/",
      img: "images/rainynight.png",
      srcUrl: "https://github.com/jcjoneskern/rainy-night",
      title: "Rainy Night",
      desc: "An experiment with CSS animations."
    },
    {
      viewUrl: "https://jcjoneskern.github.io/J-CLab8/",
      img: "images/shoppinglist.png",
      srcUrl: "https://github.com/jcjoneskern/J-CLab8",
      title: "Shopping List",
      desc: "Takes in user input to generate a shopping list and calculate the total cost."
    },
    {
      viewUrl: "https://jcjoneskern.github.io/group-one-midterm/",
      img: "images/seatingchart.png",
      srcUrl: "https://github.com/jcjoneskern/group-one-midterm",
      title: "Chick's Flicks Seating Chart",
      desc: "Midterm group project. A web app for reserving seats at a small theater."
    },
    //row 2
    {
      viewUrl: "https://jcjoneskern.github.io/todo-list/",
      img: "images/todolist.png",
      srcUrl: "https://github.com/jcjoneskern/todo-list",
      title: "To Do List",
      desc: "Add new items to a to do list, delete completed items, and filter through the list to find a specific task."
    },
    {
      viewUrl: "https://jcjoneskern.github.io/reddit-minus-reddit/",
      img: "images/redditjson.png",
      srcUrl: "https://github.com/jcjoneskern/reddit-minus-reddit",
      title: "Reddit Minus Reddit",
      desc: "Displays the front page of the chosen subreddit."
    },
    {
      viewUrl: "https://jcjoneskern.github.io/mad-libs/#/",
      img: "images/madlibs1.png",
      srcUrl: "https://github.com/jcjoneskern/mad-libs",
      title: "Mad Libs",
      desc: "Uses Angular to fill in the blanks for a game of mad libs."
    },
    //row 3
    {
      viewUrl: "https://github.com/jcjoneskern",
      img: "images/comingsoon.png",
      srcUrl: "https://github.com/jcjoneskern",
      title: "TBD",
      desc: "More to come!"
    } //,
    // {
    //   viewUrl: "https://github.com/jcjoneskern",
    //   img: "images/comingsoon.png",
    //   srcUrl: "https://github.com/jcjoneskern",
    //   title: "TBD",
    //   desc: "More to come!"
    // },
    // {
    //   viewUrl: "https://github.com/jcjoneskern",
    //   img: "images/comingsoon.png",
    //   srcUrl: "https://github.com/jcjoneskern",
    //   title: "TBD",
    //   desc: "More to come!"
    // }
  ];
});

app.directive ("portfolioItem", function() {
  return {
    restrict: "C",
    templateUrl: "partialportfolio.html",
    replace: false
  };
});
