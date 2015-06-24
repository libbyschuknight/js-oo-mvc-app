function items_controller(){

}

items_controller.prototype.load = function() {
  var model = new items_model();
  var view = new items_view();
  model.get(view.list);
}
