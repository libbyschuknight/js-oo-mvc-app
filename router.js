function router(event){

}

router.prototype.start = function(){
  var controller = new items_controller();
  controller.load();
}
