$(document).ready(function(){
  var defaultRouter = new router();
  defaultRouter.start();

  //invoke the events here
  click_screen();
})


//event listeners go here
function click_screen(){
  $(document).on('click', function(){
    //listen for click on li and call route to replace with title from hackernews
    // https://hacker-news.firebaseio.com/v0/item/9769340.json
    console.log("you clicked with me")
  });
};
