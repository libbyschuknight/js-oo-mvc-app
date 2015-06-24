
function items_view() {

}

items_view.prototype.list = function(callback) {
  console.log(callback());
  // callback().forEach(write_data);
}

function write_data(element, index, array) {
    $("#stuff").append(
      "<li>" + element + "</li>"
      );
}
