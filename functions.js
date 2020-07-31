//Teammates names
let fbombTeammates = [
    'Adam',
    'Alex',
    'Kathleen',
    'Mattia',
    'Pablo',
    'Rainer',
    'Rui',
    'Scott',
    'Calum',
    'Tony'
  ];

//Funfacts
// const funFacts = [
//   'May the force be with you',
//   'You are the king of the World. <br> And it&apos;s your go',
//   'Carpe diem. Seize the day, y&apos;all. <br>It&apos;s all up to this one 👇',
//   'It&apos;s alive! It&apos;s alive!',
//   'You&apos;ll be back',
//   'My precious',
//   'Houston, you have a problem:',
//   'Phone home','Drinking a martini. Shaken, not stirred. You&apos;re up',
//   'I am your father', 'Hasta la vista, baby. <br>This one&apos;s up 👇',
//   'You talking to me?',
//   'I&apos;ll have what 👇 is having.', 'To infinity and beyond!',
//   'Frankly, my dear, I don&apos;t give a damn.<br>It&apos;s your go',
//   'I&apos;m going to make you an offer you can&apos;t refuse. How about you start?',
//   'You can&apos;t handle the truth!<br>It&apos;s your go',
//   'Yo, Adrian! This one&apos;s gotta speak',
//   '&apos;They may take our lives, but they&apos;ll never take our freedom!&apos; Ok, but it&apos;s still your go',
//   'Chewie, we&apos;re home.<br>And it&apos;s standup time for',
//   'They call it a Royale with cheese.<br>You can get one after standup',
//   'Magic Mirror on the wall, who is the fairest one of all?',
//   'Wax on, wax off.<br>But first it&apos;s your go',
//   'Elementary, my dear Watson.<br>It&apos;s your go',
//   'Gooooooood morning, Vietnam!<br>It&apos;s still your go though',
//   'Pay no attention to that man behind the curtain! You have to start!',
//   'I&apos;m also just a girl, standing in front of a boy, asking him to love her.<br>Let&apos;s get started',
//   'I&apos;m not bad. I&apos;m just drawn that way<br>Says 👇 before to get started',
//   'Mama says, &apos;Stupid is as stupid does.&apos;<br>Still you gotta start',
// ];
const funFacts =  [
  'May the force be with you',
  'You are the king of the World. <br> And it&apos;s your go',
  'Carpe diem. Seize the day, y&apos;all. <br>It&apos;s all up to this one 👇',
  'It&apos;s alive! It&apos;s alive!',
  'You&apos;ll be back',
  'My precious',
  'Houston, you have a problem:',
  'Phone home','Drinking a martini. Shaken, not stirred. You&apos;re up',
  'I am your father', 'Hasta la vista, baby. <br>This one&apos;s up 👇',
  'You talking to me?',
  'I&apos;ll have what 👇 is having.', 'To infinity and beyond!',
  'Frankly, my dear, I don&apos;t give a damn.<br>It&apos;s your go',
  'I&apos;m going to make you an offer you can&apos;t refuse. How about you start?',
  'You can&apos;t handle the truth!<br>It&apos;s your go',
  'Yo, Adrian! This one&apos;s gotta speak',
  '&apos;They may take our lives, but they&apos;ll never take our freedom!&apos; Ok, but it&apos;s still your go',
  'Chewie, we&apos;re home.<br>And it&apos;s standup time for',
  'They call it a Royale with cheese.<br>You can get one after standup',
  'Magic Mirror on the wall, who is the fairest one of all?',
  'Wax on, wax off.<br>But first it&apos;s your go',
  'Elementary, my dear Watson.<br>It&apos;s your go',
  'Gooooooood morning, Vietnam!<br>It&apos;s still your go though',
  'Pay no attention to that man behind the curtain! You have to start!',
  'I&apos;m also just a girl, standing in front of a boy, asking him to love her.<br>Let&apos;s get started',
  'I&apos;m not bad. I&apos;m just drawn that way<br>Says 👇 before to get started',
  'Mama says, &apos;Stupid is as stupid does.&apos;<br>Still you gotta start',
];

//Pick a random teammate and a phrase
function pickOne()
{
  const randomFunfact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const teammateIndexedToRemove = Math.floor( Math.random()*fbombTeammates.length);
  const randomTeammate = fbombTeammates.splice( teammateIndexedToRemove, 1 )[0];

  if(!randomTeammate)
  {
   const elem = document.getElementById("theDucked");
   elem.parentNode.removeChild(elem);
   document.getElementById("Heading").innerHTML="💣 Have an explosive day! 💣";
  }
  else
  {
   document.getElementById("theDucked").innerHTML=randomTeammate;
   document.getElementById("Heading").innerHTML=randomFunfact;
  }
}
