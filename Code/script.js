$(document).ready(
    function(){
        /*Parte do Codificar*/
         let $aleatorio = $('.nbr');
         let $tempo = 50;
         let $i;
         let $dados = 0;
         let index;
         let mudanca;
         let letras = ["c","o","d","i","f","i","c","a","r"];

         $aleatorio.each(
             function(){
               mudanca = Math.round(Math.random()*50);  

               $(this).attr('dados-mudanca', mudanca);
             }
         );

         function numeroAleatorio(){
            return Math.round(Math.random()*6);
         };

         function selecionar(){
             return Math.round(Math.random() * $aleatorio.length+1);
         };

         function valor(){
             $('.nbr:nth-child('+selecionar()+')').html(''+numeroAleatorio()+ '');
             $('.nbr:nth-child('+selecionar()+')').attr('dados-number',$dados);
             $dados++;


             $aleatorio.each(
                 function(){
                     if(parseInt($(this).attr('dados-number')) > parseInt($(this).attr('dados-mudanca'))){

                        index= $('.ltr').index(this);
                        $(this).html(letras[index]);
                        $(this).removeClass('nbr');

                     }
                 }
             );
         };


         $i = setInterval(valor, $tempo);
}); 