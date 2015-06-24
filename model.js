
function items_model(){

}

items_model.prototype.get = function() {
  $.get( "https://hacker-news.firebaseio.com/v0/newstories.json", function(data) {
    return data;
  })
}

