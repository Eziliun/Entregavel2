<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algoritmos</title>
</head>
<body>
    <h1>Algoritmos JS</h1>
    <button onclick="getElementById('p1').innerHTML=Primo()">Número primo</button>
    <p id="p1"></p> 
    <button onclick="getElementById('p2').innerHTML=Somatorio()">Somatório</button>
    <p id ='p2'></p>
    <button onclick="getElementById('p3').innerHTML=Fibonacci()">Fibonacci</button>
    <p id="p3"></p>
    <button onclick="getElementById('p4').innerHTML=MDC()">MDC</button>
    <p id="p4"></p>
    <button onclick="getElementById('p5').innerHTML=Ordenacao()">Ordenação</button>
    <p id="p5"></p>
    <button onclick="getElementById('p6').innerHTML=Contagem()">Contagem</button>
    <p id="p6"></p>
</body>
<script>
    function Primo(){
        let n = prompt("Informe um número: ");
        let m = 0;
        for (i=n; i>0; i--){
            if (n%i == 0){
                m++;
            }
        }
        if (m > 2){
            return "não é primo";
        }    
        else{
            return "é primo";
        }  
    }

    function Somatorio(){
        let n = prompt("Informe a quantidade de números:");
        let numero;
        let somato = 0;
        let i = 0;
  
        while (i < n) {
            numero = parseInt(prompt("Informe um número"));
            somato = somato + numero;
            i = i + 1;
        }
  
        return "A soma dos " + n + " números é " + somato;
    }

    function Fibonacci(){
        let termos = prompt('Quantos termos da sequencia de Fibonacci você deseja exibir?')
        let a = 0
        let b = 1
        let c = 0
        let resultadoFib = '';
        for(let i = 0; i < termos; i++){
            if(i!=termos-1){
                resultadoFib = resultadoFib + a + " ";
            }
            else{
                resultadoFib = resultadoFib + a;
            }
            c = a + b
            a = b
            b = c
        }
        return resultadoFib;
    }

    function MDC(){
        let a = prompt('Digite o primeiro número');
        let b = prompt('Digite o segundo numero');
        let valor_MDC = 0;

        for(let i = a; i>0; i--){
            if(a%i == 0 && b%i == 0){
                valor_MDC = i;
                break;
            }
        }
        return 'O MDC de ' + a + ' e de ' + b + ' é ' + valor_MDC;
    }

    function Ordenacao(){
        let qtd_valores = prompt("Digite a quantidade de valores que voce deseja ordenar");
        let valor_recebido;
        let vetor = [];
        for(let i = 1; i <= qtd_valores; i++){
            valor_recebido = parseInt(prompt("Digite o " + i + "º valor:"));
            vetor.push(valor_recebido);
        }

        let resultado = quickSort(vetor, 0, vetor.length - 1);

        function quickSort(vetor, esquerda, direita){
        let i = esquerda;
        let x = direita;
        let meio = Math.floor((i + x)/2);
        
        while(i <= x){
            while(vetor[i] < vetor[meio]){
            i++;
            }
            
            while(vetor[x] > vetor[meio]){
            x--;
            }
            
            if(i <= x){
            let temp = vetor[i];
            vetor[i] = vetor[x];
            vetor[x] = temp;
            i++;
            x--;
            }
        }
        
        let index = i;
        
        if(index-1 > esquerda){
            quickSort(vetor, esquerda, index-1);    
        }
        
        if(index < direita){
            quickSort(vetor, index, direita);
        }
        return vetor;
        }

        vetor = [];
        return resultado;

    }

    function Contagem(){
        let n = prompt("informe o valor de N");
    contador = 0;
    i = 0;

    while (i < n) {
        contador = contador + 1
        i++
    }

    return `A quantidade de valores inteiros existentes entre 1 e ${n} é ${contador}`
    }
</script>
</html>
