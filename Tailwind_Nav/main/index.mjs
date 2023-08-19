let navList = document.getElementById('navList')
let bar = document.getElementById('bar')

bar.addEventListener('click', (event) => {

    bar.classList.contains('fa-bars') ? (() => {
        console.log("Condition is true.");
        bar.classList.toggle('fa-bars') 
        bar.classList.toggle('fa-times')
        navList.classList.toggle('-translate-y-full')
        navList.classList.toggle('-translate-y-0')
      })() : (() => {
        console.log("Condition is true.");
        bar.classList.toggle('fa-times')
        bar.classList.toggle('fa-bars') 
        navList.classList.toggle('-translate-y-0')
        navList.classList.toggle('-translate-y-full')
      })()
  
})
