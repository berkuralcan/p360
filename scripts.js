window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: 'img/sample-img-3.jpg/',
    is_stereo: true,
    width: "100%",
    height: "700"
  });
}
