function compChoose(){
 const comp = Math.random()
 if(comp < 0.34) return 'gajah';
 if(comp >= 0.34 && comp > 0.67) return 'orang';
   return 'semut'
}

function rules(comp, player){
 if( player == comp) return 'seri';
 if( player == 'gajah') return (comp == 'semut') ? 'KALAH!':'MENANG!';
 if( player == 'semut') return (comp == 'orang') ? 'KALAH!':'MENANG!';
 if( player == 'orang') return (comp == 'gajah') ? 'KALAH!':'MENANG!';
}

function acak(){
  const gambar = ['gajah', 'semut', 'orang']
  const imgAcak = document.querySelector('.img-computer')
  let i = 0
  const waktuMulai = new Date().getTime()
  setInterval(function(){
    if(new Date().getTime() - waktuMulai > 1000){
      clearInterval
      return;
    }

    imgAcak.setAttribute('src', `img/${gambar[i++]}.png`)
    if(i == gambar.length){
      i = 0
    }
  }, 100)
}


const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(img){
  img.addEventListener('click', function(){
    const pilihanComputer = compChoose()
    const pilihanPlayer = img.className
    const hasil = rules(pilihanComputer, pilihanPlayer)

    acak()

    setTimeout( function(){
      const imgComputer = document.querySelector('.img-computer')
      imgComputer.setAttribute('src', `img/${pilihanComputer}.png`)
  
      const info = document.querySelector('.info')
      info.innerHTML = hasil
    },1000)
  })
})


// const gajah = document.querySelector('.gajah');

// gajah.addEventListener('click', function(){
//   const pilihanComputer = compChoose();
//   const pilihanPlayer = gajah.className;
//   const hasil = rules(pilihanComputer, pilihanPlayer)

//   const imgComp = document.querySelector('.img-computer')
//   imgComp.setAttribute('src', `img/${pilihanComputer}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil
// });

// const semut = document.querySelector('.semut');

// semut.addEventListener('click', function(){
//   const pilihanComputer = compChoose();
//   const pilihanPlayer = semut.className;
//   const hasil = rules(pilihanComputer, pilihanPlayer)

//   const imgComp = document.querySelector('.img-computer')
//   imgComp.setAttribute('src', `img/${pilihanComputer}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil
// });
// const orang = document.querySelector('.orang');

// orang.addEventListener('click', function(){
//   const pilihanComputer = compChoose();
//   const pilihanPlayer = orang.className;
//   const hasil = rules(pilihanComputer, pilihanPlayer)

//   const imgComp = document.querySelector('.img-computer')
//   imgComp.setAttribute('src', `img/${pilihanComputer}.png`)

//   const info = document.querySelector('.info')
//   info.innerHTML = hasil
// });

