window.addEventListener('scroll', function(){

    function fade(direction){
        var Scroleable = document.querySelectorAll('.fade_'+direction);
        for (let i = 0; i < Scroleable.length; i++) {
            var altura = window.innerHeight/1.3;
            var distancia = Scroleable[i].getBoundingClientRect().top;
            Scroleable[i].classList.add('transform'+direction);
            if (distancia<=altura) {
                Scroleable[i].classList.add('aparece');
            }else{
                Scroleable[i].classList.remove('aparece');
            }
            
        }
    }
    fade('down')
    fade('right')
    fade('up')
    fade('up')
    fade('right')
    fade('up')
})