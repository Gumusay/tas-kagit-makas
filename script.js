//DOM İŞLEMLERİ
let bilgisayarSecimi=document.getElementById('bilgisayar-secimi');
let oyuncuSecimi=document.getElementById('oyuncu-secimi');
let sonuc=document.getElementById('sonuc');


const buttonlar=document.querySelectorAll('button');

///Foreach döngüsü: her öğe için bir işlem yapmak için bir 'arrow function =>' kullanılıyor.

let Osecim;
let Bsecim;
let sonuctutucu;
let bilgisayarSkor= 0;
let oyuncuSkor=0;


buttonlar.forEach (button=> button.addEventListener('click', function(event){
Osecim = event.target.id; //tıkladığım ifadenin id'sini secim değişkeninin içine saklıyorum.
// Target özelliği: olay dinleyicileri veya olay işleyicileri tarafından kullanılan bir özelliktir.BU özellik olayın hangi HTML ögesinde gerçekleştiğini belirtir. "Target" özelliği genellikle olay işeyicileri içinde kullanılır ve olayın hedef ögesini temsil eden bir referansı içerir.
oyuncuSecimi.innerHTML=Osecim;
tumBilgisayarSecimleri();
tumSonuclar();
}));

function tumBilgisayarSecimleri(){
    let sayilar=Math.floor(Math.random() * 3 )+1; //1 ile 3 arasında tam sayı alması için math.floor ve math.random kullanıyorum. 
    if (sayilar==1) {
        Bsecim='tas'
    }
    else if (sayilar==2) {
        Bsecim='kagit'
    }
    else if(sayilar==3){
        Bsecim='makas'
    }
    bilgisayarSecimi.innerHTML=Bsecim
}

   

function tumSonuclar(){
    if (Osecim==Bsecim) 
    {
        sonuctutucu='Berabere!'
    }
    else if(Osecim=='tas' && Bsecim=='kagit')
    {
        sonuctutucu='Bilgisayar Kazandı. Oyuncu Kaybetti.'
        bilgisayarSkor += 1;
    }
    else if(Osecim=='tas' && Bsecim=='makas')
    {
        sonuctutucu='Oyuncu Kazandı. Bilgisayar Kaybetti.'
        oyuncuSkor += 1;
    }
    else if(Osecim=='kagit' && Bsecim=='makas')
    {
        sonuctutucu='Bilgisayar Kazandı. Oyuncu Kaybetti.'
        bilgisayarSkor += 1;
    }
    else if(Osecim=='kagit' && Bsecim=='tas')
    {
        sonuctutucu='Oyuncu Kazandı. Bilgisayar Kaybetti.'
        oyuncuSkor += 1;
    }
    else if(Osecim=='makas' && Bsecim=='tas')
    {
        sonuctutucu='Bilgisayar Kazandı. Oyuncu Kaybetti.'
        bilgisayarSkor += 1;
    }
    else if(Osecim=='makas' && Bsecim=='kagit')
    {
        sonuctutucu='Oyuncu Kazandı. Bilgisayar Kaybetti.'
        oyuncuSkor += 1;
    }
     sonuc.innerHTML=sonuctutucu;


     //skorları local storage'a kaydetme
     localStorage.setItem('bilgisayarSkor', bilgisayarSkor.toString());
     localStorage.setItem('oyuncuSkor',oyuncuSkor.toString());
}