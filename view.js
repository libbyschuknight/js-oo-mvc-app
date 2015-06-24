function items_view() {

}

items_view.prototype.list = function write_data(list_data) {
  var parent = $("#stuff");
  list_data.forEach(function(list_item) {
    parent.append("<li>" + list_item + "</li>");
  });
}
