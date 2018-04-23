var canvas, stage, exportRoot;
//function init() {
	// --- write your JS code here ---
	
//	canvas = document.getElementById("canvas");
//	images = images||{};
//
//	var loader = new createjs.LoadQueue(false);
//	loader.addEventListener("fileload", handleFileLoad);
//	loader.addEventListener("complete", handleComplete);
//	loader.loadManifest(lib.properties.manifest);
//	}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	exportRoot = new lib.Sintítulo2();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

$('#exampleModalCenter').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$(function() {
    $('.navbar-right li').click(function() {
        $('.navbar-right li.active').removeClass('active');
        $(this).addClass('active');
    });
});