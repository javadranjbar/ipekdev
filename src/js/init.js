const swup = new Swup({
    plugins: [new SwupFadeTheme()]
  });
  
  var mainHeader = document.getElementById("mainHeader");
  var headroom  = new Headroom(mainHeader);
  headroom.init();
  