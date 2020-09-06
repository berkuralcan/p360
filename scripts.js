window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  const vrView = new VRView.Player('#vrview', {
    image: 'https://storage.googleapis.com/vrview/examples/coral.jpg',
    is_stereo: true,
    width: "100%",
    height: "700"
  });
}
