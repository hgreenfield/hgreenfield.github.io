// display date
// var moment = require('moment')
// var today = new Date();
// var formattedToday = moment(today).format('dddd, MMMM Do YYYY');
//
// $('#date').html(formattedToday)

var data = [
  {
    "Date": "",
    "aut": "waitaMinette",
    "note": "Happiest of birthdays to the love of my (fangirl) life Continue being everyone’s ball of sunshine, forever gonna root for you, pretty boy! "
  },
  {
    "Date": "",
    "aut": "aaronmelloul",
    "note": "Weston is so unique and original and different from people on social media. He makes people laugh and has a different vibe that I love!"
  },
  {
    "Date": "",
    "aut": "MWBarentra",
    "note": "From where does love come from and where does love go? Why does the earth love the rain and the falling snow? #MTWIMayWard"
  },
  {
    "Date": "",
    "aut": "sope_world",
    "note": "Goodnight, ya'll. I love BTS and I love you."
  },
  {
    "Date": "",
    "aut": "Immarygracee",
    "note": "Matteo: “I swear I fall in love with this love team. The way they look at each other…” #CHFILMediaLaunch"
  },
  {
    "Date": "",
    "aut": "jminsgf",
    "note": "IM GONNA CRY THE REST OF MY LIFE NOW I CANT BELIEVE I WAS THIS BLESSED I LOVE TAEHYUNG"
  },
  {
    "Date": "",
    "aut": "NivedithaBHRK",
    "note": "Good night Hamari Bengal ki Sherni Surili @actorpallavi Love you a lot miss you mam… Come on TV soon… Yearning to meet you…"
  },
  {
    "Date": "",
    "aut": "Aking_Poreber24",
    "note": "I Have Loved You with an Everlasting Love -Jeremiah 31:3 @aldennrichardson02 @mainedcm #ALDUB89thWeeksary"
  },
  {
    "Date": "",
    "aut": "Machukah",
    "note": "Respect your own private life without sharing everything with anyone but with a single close one in order to grow in love with them. "
  },
  {
    "Date": "",
    "aut": "biticonjustine",
    "note": "happy birthday to the love of my life ~ cheers to 20 years baby"
  },
  {
    "Date": "",
    "aut": "PhunLawlar",
    "note": "My love for debie is unconditional… Even if she messes up back2back… She’s still my fave hm… #teamDebie-Rise #bbnaija.. Pls Kip voting",
  },
  {
    "Date": "",
    "aut": "H8UHOES",
    "note": "Goodnight faithful men. I love you guys. Get some rest for a long day of rest & respecting women tomorrow."
  },
  {
    "Date": "",
    "aut": "ABSCBNStore",
    "note": "Can’t Help Falling In Love Media PresCon! Watch the full trailer here: goo.gl/NDGsj7 #CHFILMediaLaunch"
  },
  {
    "Date": "",
    "aut": "u8alyssa",
    "note": "giving > receiving I love to see other people happy"
  },
  {
    "Date": "",
    "aut": "itsOTHquotes",
    "note": "“We spend our lives searching for answers we don’t know, and loving people who don’t love us back.” #onetreehill"
  },
  {
    "Date": "",
    "aut": "oluocheli",
    "note": "RT if you love agriculture @AgribusinessTalk254 @Chero_Sharon @pierrajecy @SK_bundotich @rodgers_kirwa @OgetoAlex @mish_leah"
  },
  {
    "Date": "",
    "aut": "Tingling",
    "note": "I apologize for being such a difficult person to love"
  },
  {
    "Date": "",
    "aut": "springxsongs",
    "note": "Who tryna love and support me but also understand that I have personal problems that need work"
  },
  {
    "Date": "",
    "aut": "grimeydan",
    "note": "hey are you in love with me yet"
  }
]


// // ---------------------
// // Manipulate Response Data
// // ---------------------

var template = letters.innerHTML;
target.innerHTML = _.template(template,{letters:data});


// Functions

//0

$('#letter-0').mouseenter(
  function() {
    $('#letter-0').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-0').mouseleave(
  function() {
    $('#letter-0').removeClass("letter-open").addClass("letter-closed");
  }
);
///not working//

//on click, switch class to letter-text//
$('letter-0').click(
  function(){
    $('letter-0').removeClass("letter-open").addClass("letter-text");
  }
);

//hide text until class = letter-text

// $("#note").addClass('hide');
//
// $("#letter-0").click(function(){
//     $("#note").addClass('show');
//     $("#note").removeClass('hide');
// });

// $('#letter-0').click(
//   function() {
//     $('#letter-0').removeClass("letter-open").addclass("letter-text");
//   }
// );

// 1

$('#letter-1').mouseenter(
  function() {
    $('#letter-1').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-1').mouseleave(
  function() {
    $('#letter-1').removeClass("letter-open").addClass("letter-closed");
  }
);

// 2

$('#letter-2').mouseenter(
  function() {
    $('#letter-2').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-2').mouseleave(
  function() {
    $('#letter-2').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-3').mouseenter(
  function() {
    $('#letter-3').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-3').mouseleave(
  function() {
    $('#letter-3').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-4').mouseenter(
  function() {
    $('#letter-4').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-4').mouseleave(
  function() {
    $('#letter-4').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-5').mouseenter(
  function() {
    $('#letter-5').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-5').mouseleave(
  function() {
    $('#letter-5').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-6').mouseenter(
  function() {
    $('#letter-6').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-6').mouseleave(
  function() {
    $('#letter-6').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-7').mouseenter(
  function() {
    $('#letter-7').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-7').mouseleave(
  function() {
    $('#letter-7').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-8').mouseenter(
  function() {
    $('#letter-8').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-8').mouseleave(
  function() {
    $('#letter-8').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-9').mouseenter(
  function() {
    $('#letter-9').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-9').mouseleave(
  function() {
    $('#letter-9').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-10').mouseenter(
  function() {
    $('#letter-10').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-10').mouseleave(
  function() {
    $('#letter-10').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-11').mouseenter(
  function() {
    $('#letter-11').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-11').mouseleave(
  function() {
    $('#letter-11').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-12').mouseenter(
  function() {
    $('#letter-12').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-12').mouseleave(
  function() {
    $('#letter-12').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-13').mouseenter(
  function() {
    $('#letter-13').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-13').mouseleave(
  function() {
    $('#letter-13').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-14').mouseenter(
  function() {
    $('#letter-14').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-14').mouseleave(
  function() {
    $('#letter-14').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-15').mouseenter(
  function() {
    $('#letter-15').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-15').mouseleave(
  function() {
    $('#letter-15').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-16').mouseenter(
  function() {
    $('#letter-16').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-16').mouseleave(
  function() {
    $('#letter-16').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-17').mouseenter(
  function() {
    $('#letter-17').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-17').mouseleave(
  function() {
    $('#letter-17').removeClass("letter-open").addClass("letter-closed");
  }
);
$('#letter-18').mouseenter(
  function() {
    $('#letter-18').removeClass("letter-closed").addClass("letter-open");
  }
);

$('#letter-18').mouseleave(
  function() {
    $('#letter-18').removeClass("letter-open").addClass("letter-closed");
  }
);
