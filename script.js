$(document).ready(function() {
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
    $("#quote-text").html('"' + json.quote + '"');
    $("#quote-author").html("- " + json.author);
  });


  $("#new-quote").on("click", function() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      var currentQuote = json.quote;
      var currentAuthor = json.author;
      $("#quote-text").html('"' + currentQuote + '"');
      $("#quote-author").html("- " + currentAuthor);

      $("#tweet-quote").on("click", function () {
        var url = "https://www.twitter.com/intent/tweet?text=" + encodeURIComponent(currentQuote + " - " + currentAuthor) + "&hastags=ScienceQuotes";
        window.open(url, "", 'width=500, height=400, statusbar=0, scrollbars=1')

      });
    });
  });
});
