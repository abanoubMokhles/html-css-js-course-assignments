(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var x = 0; x < names.length; x++) {
    var firstLetter = names[x].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[x]);
    } else {
      helloSpeaker.speak(names[x]);
    }
  }
})();
