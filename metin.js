
// Metinleri ve ses dosyalarını içeren JSON dosyasını yükle


function satirlaraAyir(metin) {
  const satirlar = [];
  let satir = '';
  for (let i = 0; i < metin.length; i++) {
    if (metin[i] === '\n' || satir.length === 100) {
      satirlar.push(satir);
      satir = '';
    }
    satir += metin[i];
  }
  satirlar.push(satir);
  return satirlar;
}


 fetch("hikaye.json").then(response=>response.json())
.then(data => { 

  var result = Object.keys(data).map((key) => [Number(key), data[key]]);
  
/*   console.log(result[0][1].turkce); */

  const hikayeMetni =result[0][1].turkce; 
  const satirlar= satirlaraAyir(hikayeMetni);
  let pEtiketleri = '';
    for (let i = 0; i < satirlar.length; i++) {
      pEtiketleri += '<p id="p'+i+'" class="arkaplan-renkli">' + satirlar[i] + '</p>';
    }
  var tamMetinDiv= document.getElementById('hikaye-metni');
  tamMetinDiv.innerHTML = pEtiketleri;
/* document.body.appendChild(div); */
  
 // synth.speak(utterance);
}).catch(error => console.error(error));



const translations = [
  "Red Riding Hood set out to go back to her home to bring bread and milk to her old mother.",
  "On the way, she met a wolf who asked her, 'Where are you going, pretty girl?'",
  "Red Riding Hood replied, 'I'm bringing bread and milk to my old mother.'",
  "The wolf asked, 'Where does she live?'",
  "Red Riding Hood cleverly answered the wolf's questions and continued on her way home."
];

const audio = document.getElementById("audio");
let currentSentence = 0;
let intervalId;



const playAudio = () => {
  audio.play();
  intervalId = setInterval(highlightCurrentSentence, 1000);
  audio.addEventListener("ended", () => {
    clearInterval(intervalId);
  });

audio.addEventListener('play', () => {
let currentPosition = 0;

const satirlar = document.querySelectorAll('#hikaye-metni p');

    for (let i = 0; i < satirlar.length; i++) {

    var id = document.getElementsByTagName("p")[i].id;
     
    if(id=='p'+i){

      var classs= document.getElementById(id);
      
    setTimeout(
     
      classs.classList.add('animasyon'),100     


    );
  }
}

});

}
 

var highlightCurrentSentence = () => {
  
  
  

  if (currentSentence < translations.length) {
    document.querySelectorAll("p").forEach((p, index) => {

      
      if (index === currentSentence) {

        setTimeout(p.classList.add("highlight"), 5000);
        
      } else {

        p.classList.remove("highlight");

      }
    });
    currentSentence++;
  } else {
    clearInterval(intervalId);
  }
}

document.getElementById("play-button").addEventListener("click", () => {
  playAudio();
});

document.querySelectorAll("p").forEach((p, index) => {
  p.addEventListener("click", () => {
    currentSentence = index;
    highlightCurrentSentence();
  });
});


document.getElementById("stop-button").addEventListener("click",function(){

audio.pause();

});

document.getElementById("p1").addEventListener("click", function() {
  this.innerHTML = translations[0];
});

document.getElementById("p2").addEventListener("click", function() {
  this.innerHTML = translations[1];
});

document.getElementById("p3").addEventListener("click", function() {
  this.innerHTML = translations[2];
});

document.getElementById("p4").addEventListener("click", function() {
  this.innerHTML = translations[3];
});

document.getElementById("p5").addEventListener("click", function() {
  this.innerHTML = translations[4];
});

