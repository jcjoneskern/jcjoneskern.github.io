const portfolio = new Vue({
    el: "#portfolio",
    data: {
        items: [
            {
                viewUrl: "https://studybuddyapplication.herokuapp.com/",
                img: "images/studybuddy.png",
                srcUrl: "https://github.com/jcjoneskern/StudyBuddyApp",
                title: "Study Buddy",
                desc: "An app that helps you find the best places to study."
            },
            {
                viewUrl: "https://jcjoneskern.github.io/millennials/",
                img: "images/millennials.png",
                srcUrl: "https://github.com/jcjoneskern/millennials",
                title: "Millennial Headline Generator",
                desc: "Generates a random headline about millennials."
            },
            {
                viewUrl: "https://jcjoneskern.github.io/forEach/",
                img: "images/foreach.png",
                srcUrl: "https://github.com/jcjoneskern/forEach",
                title: "forEach Guide",
                desc: "A demo breaking down how to write a forEach loop in JavaScript."
            },
            {
                viewUrl: "https://jcjoneskern.github.io/group-one-midterm/",
                img: "images/seatingchart.png",
                srcUrl: "https://github.com/jcjoneskern/group-one-midterm",
                title: "Chick's Flicks Seating Chart",
                desc: "Midterm group project. A web app for reserving seats at a small theater."
            },
            {
                viewUrl: "https://jcjoneskern.github.io/mad-libs/#/",
                img: "images/madlibs1.png",
                srcUrl: "https://github.com/jcjoneskern/mad-libs",
                title: "Mad Libs",
                desc: "Uses Angular to fill in the blanks for a game of mad libs."
            },
            // {
            //     viewUrl: "https://github.com/jcjoneskern",
            //     img: "images/comingsoon.png",
            //     srcUrl: "https://github.com/jcjoneskern",
            //     title: "TBD",
            //     desc: "More to come!"
            // }
        ]
    }
});



function smoothScroll(scrollLoc) {
    document.querySelector('#' + scrollLoc).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    // window.location.hash = '#' + scrollLoc;
}