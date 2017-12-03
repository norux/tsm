let takeHighResScreenshot = function(srcId) {
  let w = 850;
  let h = 1000;
  let testcanvas = document.createElement('canvas');
  testcanvas.width = w * 2;
  testcanvas.height = h * 2;
  testcanvas.style.width = w + 'px';
  testcanvas.style.height = h + 'px';
  let context = testcanvas.getContext('2d');
  context.scale(2, 2);

  // Trying new way
  html2canvas(document.getElementById(srcId), {
    canvas: testcanvas,
    onrendered: function(canvas) {
      document.body.appendChild(canvas);
      let a = document.createElement('a');

      a.href = canvas.toDataURL("image/png");
      a.download = 'something.png';
      a.click();

    },
//        width: 320,
//        height: 220
  });
};

$('document').ready(function() {

  $('#saveAsImange').click(function() {

//        html2canvas($('#wrapper'), {
//          onrendered: function (canvas) {
//            let a = document.createElement('a');
//            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
//            a.href = canvas.toDataURL("image/png");
//            a.download = 'somefilename.png';
//            a.click();
//          }
//        });
    let src = document.getElementById("mainCanvas");
    let img = document.getElementById("test")/
      takeHighResScreenshot('mainCanvas');

  });
});