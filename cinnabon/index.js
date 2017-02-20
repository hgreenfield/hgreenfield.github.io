// ---------------------
// Request Data
// ---------------------
var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=cinnabon&format=json&sort=cd&token=00OSj01n6kHsDrzS1SMmDb0ejzJnVmqS',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#states").text(jqXHR.statusText);
          return $("#state").text('Sorry!  There was an error requesting your data.')
        }
    });

    return json
})();

// ---------------------
// Manipulate Response Data
// ---------------------
// Print addresses
for(var i = 0; i < json.length; i++) {
  $('#address').append("<tr> <td class='address' id='" + json[i].loc + json[i].add + json[i].ct + json[i].cd + json[i].pc + "'>" + json[i].loc + '<br>' + json[i].add + '<br>' + json[i].ct + ', ' + json[i].cd + ' ' + json[i].pc + "</td></tr>");
//Search bar compatability
var $rows =  $('#address tr');
$('#search').keyup(function() {

    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
  })
};
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
