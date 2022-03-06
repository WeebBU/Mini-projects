const cups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

cups.forEach((cup, idx) => {
      cup.addEventListener('click' , () => highlightCups(idx))
})

function highlightCups(idx){
    cups.forEach((cup,idx2)=>{

       if(cups[idx].classList.contains('full')&& !cups[idx].nextElementSibling.classList.contains('full')) {
           idx--
       }

       if(idx2<=idx){
           cup.classList.add('full')
       }else{
           cup.classList.remove('full')
       }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = cups.length 

    if(fullCups === 0) {
        percentage.style.visibility= 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText= `${fullCups/totalCups*100}%`
    }

    if(fullCups===totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250 * fullCups/1000)}L`
    }
}