

//Primeira Função monta os campos carregando a query
//Segunda monta o XMl com base nos preenchimentos
//A terceira função irá gerar a SQL de Insert ou Update


function montar1() { 
 var queryRecebe = window.document.getElementById('txquery');
 queryglobal = (queryRecebe.value);
 queryglobalUpper = (queryglobal.toUpperCase());
 var query = (queryRecebe.value);
 var queryUpper = (query.toUpperCase());
 var querylimite = queryUpper.indexOf("FROM"); 
 var querylimitetradado = (queryUpper.substring(0, querylimite)); 
 var queryselect = querylimitetradado.replace(/select/gi,""); 
 var queryespacos = queryselect.replace(/ /gi,"");
 var queryfrom = queryespacos.replace(/from/gi,"");
 var querytabela = queryfrom.replace(/tabela/gi,"");
 var querycolcheteesq = querytabela.replace(/\[/gi,"");
 var querycolchetedir = querycolcheteesq.replace(/\]/gi,"");
 var querypronta = querycolchetedir.split(',');

 
 if ( querypronta[0] == 0 || typeof querypronta[0] == 'undefined' ){
 (campo1 = "");// mostra 1
 } else {
 (campo1 = querypronta[0]),(res1.innerHTML = `${campo1}`)};

 if ( querypronta[1] == 0  || typeof querypronta[1] == 'undefined' ){
 (campo2 = "");// mostra 1
 } else {
 (campo2 = querypronta[1]),(res2.innerHTML = `${campo2}`)};
 
 if ( querypronta[2] == 0 || typeof querypronta[2] == 'undefined' ) {
 (campo3 = "");// mostra 1
 } else {
 (campo3 = querypronta[2]),(res3.innerHTML = `${campo3}`)};
 
 if ( querypronta[3] == 0 || typeof querypronta[3] == 'undefined' ){
 (campo4 = "");// mostra 1
 } else {
 (campo4 = querypronta[3]),(res4.innerHTML = `${campo4}`)};
 

 if ( querypronta[4] == 0 || typeof querypronta[4] == 'undefined'){
 (campo5 = "");// mostra 1
 } else {
 (campo5 = querypronta[4]),(res5.innerHTML = `${campo5}`)};
 
 if ( querypronta[5] == 0 || typeof querypronta[5] == 'undefined'){
 (campo6 = "");// mostra 1
 } else {
 (campo6 = querypronta[5]),(res6.innerHTML = `${campo6}`)};

 if ( querypronta[6] == 0 || typeof querypronta[6] == 'undefined' ){
 (campo7 = "");// mostra 1
 } else {
 (campo7 = querypronta[6]),(res7.innerHTML = `${campo7}`)};

 if ( querypronta[7] == 0 || typeof querypronta[7] == 'undefined' ){
 (campo8 = "");// mostra 1
 } else {
 (campo8 = querypronta[7]),(res8.innerHTML = `${campo8}`)};

 if ( querypronta[8] == 0 || typeof querypronta[8] == 'undefined' ){
 (campo9 = "");// mostra 1
 } else {
 (campo9 = querypronta[8]),(res9.innerHTML = `${campo9}`)};

 if ( querypronta[9] == 0 || typeof querypronta[9] == 'undefined' ){
 (campo10 = "");// mostra 1
 } else {
 (campo10 = querypronta[9]),(res10.innerHTML = `${campo10}`)};

 if ( querypronta[10] == 0 || typeof querypronta[10] == 'undefined' ){
 (campo11 = "");// mostra 1
 } else {
 (campo11 = querypronta[10]),(res11.innerHTML = `${campo11}`)};

 if ( querypronta[11] == 0 || typeof querypronta[11] == 'undefined'){
 (campo12 = "");// mostra 1
 } else {
 (campo12 = querypronta[11]),(res12.innerHTML = `${campo12}`)};

 if ( querypronta[12] == 0  || typeof querypronta[12] == 'undefined'){
 (campo13 = "");// mostra 1
 } else {
 (campo13 = querypronta[12]),(res13.innerHTML = `${campo13}`)};

 if ( querypronta[13] == 0  || typeof querypronta[13] == 'undefined' ){
 (campo14 = "");// mostra 1
 } else {
 (campo14 = querypronta[13]),(res14.innerHTML = `${campo14}`)};

 if ( querypronta[14] == 0  || typeof querypronta[14] == 'undefined'  ){
 (campo15 = "");// mostra 1
 } else {
 (campo15 = querypronta[14]),(res15.innerHTML = `${campo15}`)};

 if ( querypronta[15] == 0  || typeof querypronta[15] == 'undefined'  ){
 (campo16 = "");// mostra 1
 } else {
 (campo16 = querypronta[15]),(res16.innerHTML = `${campo16}`)};

 if ( querypronta[16] == 0  || typeof querypronta[16] == 'undefined'  ){
 (campo17 = "");// mostra 1
 } else {
 (campo17 = querypronta[16]),(res17.innerHTML = `${campo17}`)};

 if ( querypronta[17] == 0  || typeof querypronta[17] == 'undefined'  ){
 (campo18 = "");// mostra 1
 } else {
 (campo18 = querypronta[17]),(res18.innerHTML = `${campo18}`)};

 if ( querypronta[18] == 0  || typeof querypronta[18] == 'undefined' ){
 (campo19 = "");// mostra 1
 } else {
 (campo19 = querypronta[18]),(res19.innerHTML = `${campo19}`)};

 if ( querypronta[19] == 0  || typeof querypronta[19] == 'undefined'  ){
 (campo20 = "");// mostra 1
 } else {
 (campo20 = querypronta[19]),(res20.innerHTML = `${campo20}`)};

 if ( querypronta[20] == 0  || typeof querypronta[20] == 'undefined' ){
 (campo21 = "");// mostra 1
 } else {
 (campo21 = querypronta[20]),(res21.innerHTML = `${campo21}`)};

 if ( querypronta[21] == 0  || typeof querypronta[21] == 'undefined'  ){
 (campo22 = "");// mostra 1
 } else {
 (campo22 = querypronta[21]),(res22.innerHTML = `${campo22}`)};

 if ( querypronta[22] == 0  || typeof querypronta[22] == 'undefined'  ){
 (campo23 = "");// mostra 1
 } else {
 (campo23 = querypronta[22]),(res23.innerHTML = `${campo23}`)};

 if ( querypronta[23] == 0  || typeof querypronta[23] == 'undefined'  ){
 (campo24 = "");// mostra 1
 } else {
 (campo24 = querypronta[23]),(res24.innerHTML = `${campo24}`)};

 if ( querypronta[24] == 0  || typeof querypronta[24] == 'undefined'  ){
 (campo25 = "");// mostra 1
 } else {
 (campo25 = querypronta[24]),(res25.innerHTML = `${campo25}`)};

 if ( querypronta[25] == 0  || typeof querypronta[25] == 'undefined'  ){
 (campo26 = "");// mostra 1
 } else {
 (campo26 = querypronta[25]),(res26.innerHTML = `${campo26}`)};

 if ( querypronta[26] == 0  || typeof querypronta[26] == 'undefined'  ){
 (campo27 = "");// mostra 1
 } else {
 (campo27 = querypronta[26]),(res27.innerHTML = `${campo27}`)};

 if ( querypronta[27] == 0  || typeof querypronta[27] == 'undefined'  ){
 (campo28 = "");// mostra 1
 } else {
 (campo28 = querypronta[27]),(res28.innerHTML = `${campo28}`)};

 if ( querypronta[28] == 0  || typeof querypronta[28] == 'undefined' ){
 (campo29 = "");// mostra 1
 } else {
 (campo29 = querypronta[28]),(res29.innerHTML = `${campo29}`)};

 if ( querypronta[29] == 0  || typeof querypronta[29] == 'undefined' ){
 (campo30 = "");// mostra 1
 } else {
 (campo30 = querypronta[29]),(res30.innerHTML = `${campo30}`)};

 if ( querypronta[30] == 0  || typeof querypronta[30] == 'undefined'  ){
 (campo31 = "");// mostra 1
 } else {
 (campo31 = querypronta[30]),(res31.innerHTML = `${campo31}`)};

 if ( querypronta[31] == 0  || typeof querypronta[31] == 'undefined'  ){
 (campo32 = "");// mostra 1
 } else {
 (campo32 = querypronta[31]),(res32.innerHTML = `${campo32}`)};

 if ( querypronta[32] == 0  || typeof querypronta[32] == 'undefined'  ){
 (campo33 = "");// mostra 1
 } else {
 (campo33 = querypronta[32]),(res33.innerHTML = `${campo33}`)};

 if ( querypronta[33] == 0  || typeof querypronta[33] == 'undefined'  ){
 (campo34 = "");// mostra 1
 } else {
 (campo34 = querypronta[33]),(res34.innerHTML = `${campo34}`)};

 if ( querypronta[34] == 0  || typeof querypronta[34] == 'undefined' ){
 (campo35 = "");// mostra 1
 } else {
 (campo35 = querypronta[34]),(res35.innerHTML = `${campo35}`)};

 if ( querypronta[35] == 0  || typeof querypronta[35] == 'undefined'  ){
 (campo36 = "");// mostra 1
 } else {
 (campo36 = querypronta[35]),(res36.innerHTML = `${campo36}`)};

 if ( querypronta[36] == 0  || typeof querypronta[36] == 'undefined' ){
 (campo37 = "");// mostra 1
 } else {
 (campo37 = querypronta[36]),(res37.innerHTML = `${campo37}`)};

 if ( querypronta[37] == 0  || typeof querypronta[37] == 'undefined'  ){
 (campo38 = "");// mostra 1
 } else {
 (campo38 = querypronta[37]),(res38.innerHTML = `${campo37}`)};

 if ( querypronta[38] == 0  || typeof querypronta[38] == 'undefined'  ){
 (campo39 = "");// mostra 1
 } else {
 (campo39 = querypronta[38]),(res39.innerHTML = `${campo39}`)};

 if ( querypronta[39] == 0  || typeof querypronta[39] == 'undefined'  ){
 (campo40 = "");// mostra 1
 } else {
 (campo40 = querypronta[39]),(res40.innerHTML = `${campo40}`)};
         
 // Avisa que a query não foi colocada
 if ( query == 0  || typeof query == 'undefined' || query == null){
 (carregar = "Opa!! Você Não colocou a query acima");// mostra 1
 } else {
 (carregar= "Query foi carregada")};
 resCarregou.innerHTML = `${carregar}`;



campo1global = campo1
campo2global = campo2
campo3global = campo3
campo4global = campo4
campo5global = campo5
campo6global = campo6
campo7global = campo7
campo8global = campo8 
campo9global = campo9 
campo10global = campo10 
campo11global = campo11 
campo12global = campo12 
campo13global = campo13 
campo14global = campo14 
campo15global = campo15 
campo16global = campo16 
campo17global = campo17 
campo18global = campo18 
campo19global = campo19 
campo20global = campo20 
campo21global = campo21 
campo22global = campo22 
campo23global = campo23 
campo24global = campo24 
campo25global = campo25 
campo26global = campo26 
campo27global = campo27 
campo28global = campo28 
campo29global = campo29 
campo30global = campo30 
campo31global = campo31 
campo32global = campo32 
campo33global = campo33 
campo34global = campo34 
campo35global = campo35 
campo36global = campo36 
campo37global = campo37 
campo38global = campo38 
campo39global = campo39 
campo40global = campo40

                  }


function montar() { 
/*Cabeçalho input*/
var nomeRelatorio = window.document.getElementById('txname')
var categoriaRecebe = window.document.getElementById('txcategoria')
//var nomedoExcelRecebe = window.document.getElementById('txanamefile')
/*Filtros input*/
var filtroTextoRecebe1 = window.document.getElementById('txfiltrotexto1')
var filtroTextoRecebe1print = window.document.getElementById('txfiltrotexto1print')
var filtroTextoRecebe2 = window.document.getElementById('txfiltrotexto2')
var filtroTextoRecebe2print = window.document.getElementById('txfiltrotexto2print')
var filtroTextoRecebe3 = window.document.getElementById('txfiltrotexto3')
var filtroTextoRecebe3print = window.document.getElementById('txfiltrotexto3print')
var filtroTextoRecebe4 = window.document.getElementById('txfiltrotexto4')
var filtroTextoRecebe4print = window.document.getElementById('txfiltrotexto4print')
var filtroTextoRecebe5 = window.document.getElementById('txfiltrotexto5')
var filtroTextoRecebe5print = window.document.getElementById('txfiltrotexto5print')
var filtroTextoRecebe6 = window.document.getElementById('txfiltrotexto6')
var filtroTextoRecebe6print = window.document.getElementById('txfiltrotexto6print')
var filtroTextoRecebe7 = window.document.getElementById('txfiltrotexto7')
var filtroTextoRecebe7print = window.document.getElementById('txfiltrotexto7print')
var filtroTextoRecebe8 = window.document.getElementById('txfiltrotexto8')
var filtroTextoRecebe8print = window.document.getElementById('txfiltrotexto8print')

var filtrofixoRecebe = window.document.getElementById('txfiltropartes')


/*Filtros Fixos*/


/*Filtros montados*/           

var filtrofixomontado1cabecalho =  '&lt;parametro tipo="EntreDatas" titulo="Data" id="@CREATEDDATE" default="" obrigatorio="" multiplo="nao" /&gt; </br>'; 
var filtrofixomontado1rodape = '&lt;parametro coluna="CAST(CONVERT(VARCHAR(8), CREATEDDATE, 112) AS DATETIME)" operador="BETWEEN" parametro="@CREATEDDATE" /&gt; </br>';

// Filtro OrderStatusID - não está Montando por completo
var filtrofixomontado2cabecalho1 = '&lt;parametro tipo="OpcoesDataSource" titulo="Status" id="@ORDERSTATUSID" default="" obrigatorio="" multiplo="sim"&gt'; 
var filtrofixomontado2cabecalho2 = '</br> &lt;query&gt; </br>select Status As Titulo, ORDERSTATUSID As Valor from sales.order_statuses where IsDeleted = 0 </br>&lt;/query&gt; </br> &lt;/parametro&gt; </br>' ;

var filtrofixomontado2rodape = '&lt;parametro coluna="ORDERSTATUSID" operador="IN" parametro="@ORDERSTATUSID" /&gt; </br>' ;

var filtrofixomontado3cabecalho = '&lt;parametro tipo="OpcoesDataSource" titulo="Canal" id="@WEBSITEID" default="" obrigatorio="" multiplo="sim"&gt; </br> &lt;query&gt; </br> SELECT NAME As TITULO, WEBSITEID As VALOR FROM websites WHERE IsDeleted = 0 </br> &lt;/query&gt; </br> &lt;/parametro&gt; </br>';
var filtrofixomontado3rodape =  '&lt;parametro coluna="WEBSITEID" operador="IN" parametro="@WEBSITEID" /&gt; </br';
var filtrofixomontado4cabecalho = '&lt;parametro tipo="OpcoesDataSource" titulo="Depósitos" id="@WAREHOUSEID" default="" obrigatorio="" multiplo="sim"&gt; </br> &lt;query&gt; </br>select NAME As TITULO, WAREHOUSEID As VALOR from WAREHOUSES where IsDeleted = 0 </br>&lt;/query&gt; </br> &lt;/parametro&gt; </br>';
var filtrofixomontado4rodape =  '&lt;parametro coluna="WAREHOUSEID" operador="IN" parametro="@WAREHOUSEID" /&gt; </br';
var filtrofixomontado5cabecalho = '&lt;parametro tipo="OpcoesDataSource" titulo="Marcas" id="@BRANDID" default="" obrigatorio="" multiplo="sim"&gt; </br> &lt;query&gt; </br>select NAME AS TITULO, BRANDID As VALOR from BRANDS where IsDeleted = 0 </br>&lt;/query&gt; </br> &lt;/parametro&gt; </br>';
var filtrofixomontado5rodape =  '&lt;parametro coluna="BRANDID" operador="IN" parametro="@BRANDID" /&gt; </br>';
var filtrofixonaogeranada = ''

/*  Filtro Por Parte, é preciso mexer na query -talvez não de certo 0 maior complexidade
// tags do xml - partes -- 
var filtrofixomontadopartessql =  filtrofixoRecebe
var filtrofixomontado6cabecalho =  '&lt;parametro tipo="OpcoesFixas" titulo="PARTES" id="@PARTES" default="" obrigatorio="nao" multiplo="sim"&gt; </br> &lt;opcao titulo="Parte 1" valor="1" /&gt;</br> &lt;opcao titulo="Parte 2" valor="2" /&gt;</br> &lt;opcao titulo="Parte 3" valor="3" /&gt;</br> &lt;opcao titulo="Parte 4" valor="4" /&gt;</br> &lt;opcao titulo="Parte 5" valor="5" /&gt;</br> &lt;opcao titulo="Parte 6" valor="6" /&gt;</br> &lt;opcao titulo="Parte 7" valor="7" /&gt;</br> &lt;opcao titulo="Parte 8" valor="8" /&gt;</br> &lt;opcao titulo="Parte 9" valor="9" /&gt;</br> &lt;opcao titulo="Parte 10" valor="10" /&gt;</br> &lt;/parametro&gt;</br>'
// Int para colocar as - partes
var filtrofixomontado6rodape = '&lt;parametro coluna="PARTES" operador="IN" parametro="@PARTES" /&gt; </br>';
var camposqlfiltrosql =  'NTILE(10)OVER(order by '+ filtrofixoRecebe + ' ASC) as [partes],';
*/

var checkbox1 = document.getElementById('filtrofixo1');
if(checkbox1.checked) {
   (filtrofixo1 = filtrofixomontado1cabecalho, filtrofixo1_ = filtrofixomontado1rodape) ;
   } else {
   filtrofixo1 = filtrofixonaogeranada,filtrofixo1_ = filtrofixonaogeranada ; };                                 

    // Filtro OrderStatusID - não está Montando por completo

var checkbox2 = document.getElementById('filtrofixo2');
if(checkbox2.checked) {
   (filtrofixo2 = filtrofixomontado2cabecalho1 + filtrofixomontado2cabecalho2,filtrofixo2_ = filtrofixomontado2rodape) ;
   } else {
   filtrofixo2 = filtrofixonaogeranada,filtrofixo2_ = filtrofixonaogeranada ; }; 


var checkbox3 = document.getElementById('filtrofixo3');
if(checkbox3.checked) {
   (filtrofixo3 = filtrofixomontado3cabecalho,filtrofixo3_ = filtrofixomontado3rodape) ;
   } else {
   filtrofixo3 = filtrofixonaogeranada,filtrofixo3_ = filtrofixonaogeranada ; }; 

var checkbox4 = document.getElementById('filtrofixo4');
if(checkbox4.checked) {
   (filtrofixo4 = filtrofixomontado4cabecalho,filtrofixo4_ = filtrofixomontado4rodape) ;
   } else {
   filtrofixo4 = filtrofixonaogeranada,filtrofixo4_ = filtrofixonaogeranada ; }; 

   
var checkbox5 = document.getElementById('filtrofixo5');
if(checkbox5.checked) {
   (filtrofixo5 = filtrofixomontado5cabecalho,filtrofixo5_ = filtrofixomontado5rodape) ;
   } else {
   filtrofixo5 = filtrofixonaogeranada,filtrofixo5_ = filtrofixonaogeranada ; }; 

 /* Filtro Por Partes - Mexe na query - Maior complexidade
var checkbox6 = document.getElementById('filtrofixo6');
 if(checkbox6.checked) {
      (filtrofixo6 = filtrofixomontado6cabecalho,filtrofixo6_ = filtrofixomontado6rodape) ;
      } else {
      filtrofixo6 = filtrofixonaogeranada,filtrofixo6_ = filtrofixonaogeranada ; };    
  */      
/*Colunas input*/


var coluna1Recebe = campo1global
var coluna1PrintRecebe = window.document.getElementById('txcoluna1print')
var coluna2Recebe = campo2global
var coluna2PrintRecebe = window.document.getElementById('txcoluna2print')
var coluna3Recebe = campo3global
var coluna3PrintRecebe = window.document.getElementById('txcoluna3print')
var coluna4Recebe = campo4global
var coluna4PrintRecebe = window.document.getElementById('txcoluna4print')
var coluna5Recebe = campo5global
var coluna5PrintRecebe = window.document.getElementById('txcoluna5print');
var coluna6Recebe = campo6global
var coluna6PrintRecebe = window.document.getElementById('txcoluna6print')
var coluna7Recebe = campo7global
var coluna7PrintRecebe = window.document.getElementById('txcoluna7print')
var coluna8Recebe = campo8global
var coluna8PrintRecebe = window.document.getElementById('txcoluna8print')
var coluna9Recebe = campo9global
var coluna9PrintRecebe = window.document.getElementById('txcoluna9print')
var coluna10Recebe = campo10global
var coluna10PrintRecebe = window.document.getElementById('txcoluna10print')
var coluna11Recebe = campo11global
var coluna11PrintRecebe = window.document.getElementById('txcoluna11print')
var coluna12Recebe = campo12global
var coluna12PrintRecebe = window.document.getElementById('txcoluna12print')
var coluna13Recebe = campo13global
var coluna13PrintRecebe = window.document.getElementById('txcoluna13print')
var coluna14Recebe = campo14global
var coluna14PrintRecebe = window.document.getElementById('txcoluna14print')
var coluna15Recebe = campo15global
var coluna15PrintRecebe = window.document.getElementById('txcoluna15print')
var coluna16Recebe = campo16global
var coluna16PrintRecebe = window.document.getElementById('txcoluna16print')
var coluna17Recebe = campo17global
var coluna17PrintRecebe = window.document.getElementById('txcoluna17print')
var coluna18Recebe = campo18global
var coluna18PrintRecebe = window.document.getElementById('txcoluna18print')
var coluna19Recebe = campo19global
var coluna19PrintRecebe = window.document.getElementById('txcoluna19print')
var coluna20Recebe = campo20global
var coluna20PrintRecebe = window.document.getElementById('txcoluna20print')
var coluna21Recebe = campo21global
var coluna21PrintRecebe = window.document.getElementById('txcoluna21print')
var coluna22Recebe = campo22global
var coluna22PrintRecebe = window.document.getElementById('txcoluna22print')
var coluna23Recebe = campo23global
var coluna23PrintRecebe = window.document.getElementById('txcoluna23print')
var coluna24Recebe = campo24global
var coluna24PrintRecebe = window.document.getElementById('txcoluna24print')
var coluna25Recebe = campo25global
var coluna25PrintRecebe = window.document.getElementById('txcoluna25print')
var coluna26Recebe = campo26global
var coluna26PrintRecebe = window.document.getElementById('txcoluna26print')
var coluna27Recebe = campo27global
var coluna27PrintRecebe = window.document.getElementById('txcoluna27print')
var coluna28Recebe = campo28global
var coluna28PrintRecebe = window.document.getElementById('txcoluna28print')
var coluna29Recebe = campo29global
var coluna29PrintRecebe = window.document.getElementById('txcoluna29print')
var coluna30Recebe = campo30global
var coluna30PrintRecebe = window.document.getElementById('txcoluna30print')
var coluna31Recebe = campo31global
var coluna31PrintRecebe = window.document.getElementById('txcoluna31print')
var coluna32Recebe = campo32global
var coluna32PrintRecebe = window.document.getElementById('txcoluna32print')
var coluna33Recebe = campo33global
var coluna33PrintRecebe = window.document.getElementById('txcoluna33print')
var coluna34Recebe = campo34global
var coluna34PrintRecebe = window.document.getElementById('txcoluna34print')
var coluna35Recebe = campo35global
var coluna35PrintRecebe = window.document.getElementById('txcoluna35print')
var coluna36Recebe = campo36global
var coluna36PrintRecebe = window.document.getElementById('txcoluna36print')
var coluna37Recebe = campo37global
var coluna37PrintRecebe = window.document.getElementById('txcoluna37print')
var coluna38Recebe = campo38global
var coluna38PrintRecebe = window.document.getElementById('txcoluna38print')
var coluna39Recebe = campo39global
var coluna39PrintRecebe = window.document.getElementById('txcoluna39print')
var coluna40Recebe = campo40global
var coluna40PrintRecebe = window.document.getElementById('txcoluna40print')


/*Query input*/
/*var queryRecebe = window.document.getElementById('txquery')*/
/*OrderBy input*/
var orderByRecebe = window.document.getElementById('txorderby')
var orderByTipoRecebe = window.document.getElementById('txorderbytipo')

/*Cabeçalho tratamento*/
var name = (nomeRelatorio.value)
var categoria = (categoriaRecebe.value)
//var filename = (nomedoExcelRecebe.value)
var filename = (name.replace(/ /gi,"_"))

/*Filtros tratamento*/
var filtroTexto1 = (filtroTextoRecebe1.value)
var filtroTexto1print = (filtroTextoRecebe1print.value)
var filtroTexto2 = (filtroTextoRecebe2.value)
var filtroTexto2print = (filtroTextoRecebe2print.value)
var filtroTexto3 = (filtroTextoRecebe3.value)
var filtroTexto3print = (filtroTextoRecebe3print.value)
var filtroTexto4 = (filtroTextoRecebe4.value)
var filtroTexto4print = (filtroTextoRecebe4print.value)
var filtroTexto5 = (filtroTextoRecebe5.value)
var filtroTexto5print = (filtroTextoRecebe5print.value)
var filtroTexto6 = (filtroTextoRecebe6.value)
var filtroTexto6print = (filtroTextoRecebe6print.value)
var filtroTexto7 = (filtroTextoRecebe7.value)
var filtroTexto7print = (filtroTextoRecebe7print.value)                
var filtroTexto8 = (filtroTextoRecebe8.value)
var filtroTexto8print = (filtroTextoRecebe8print.value)


/*montagem dos Filtros*/

/*Filtro CAbeçalho*/		

var parte1filtro = '&lt;parametro tipo="Texto" titulo="'
var parte2filtro = '" id="@'
var parte3filtro = '" tamanho="100" alinhamento="center"'
var parte4filtro = ' default="" obrigatorio="nao" /&gt; </br>'
var semnadafiltro = ''

var filtromontado1 = parte1filtro + filtroTexto1print  + parte2filtro + filtroTexto1 + parte3filtro + parte4filtro
var filtromontado2 = parte1filtro + filtroTexto2print  + parte2filtro + filtroTexto2 + parte3filtro + parte4filtro
var filtromontado3 = parte1filtro + filtroTexto3print  + parte2filtro + filtroTexto3 + parte3filtro + parte4filtro
var filtromontado4 = parte1filtro + filtroTexto4print  + parte2filtro + filtroTexto4 + parte3filtro + parte4filtro
var filtromontado5 = parte1filtro + filtroTexto5print  + parte2filtro + filtroTexto5 + parte3filtro + parte4filtro
var filtromontado6 = parte1filtro + filtroTexto6print  + parte2filtro + filtroTexto6 + parte3filtro + parte4filtro
var filtromontado7 = parte1filtro + filtroTexto7print  + parte2filtro + filtroTexto7 + parte3filtro + parte4filtro
var filtromontado8 = parte1filtro + filtroTexto8print  + parte2filtro + filtroTexto8 + parte3filtro + parte4filtro



var parte1filtroRodape = '&lt;parametro coluna="'
var parte2filtroRodape = '" operador="'
var parte3filtroRodape = '" parametro="@'
var parte4filtroRodape = '"/&gt;</br>'
var operador = 'LIKE'

var filtromontado1rodape = parte1filtroRodape + filtroTexto1 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto1 + parte4filtroRodape
var filtromontado2rodape = parte1filtroRodape + filtroTexto2 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto2 + parte4filtroRodape
var filtromontado3rodape = parte1filtroRodape + filtroTexto3 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto3 + parte4filtroRodape
var filtromontado4rodape = parte1filtroRodape + filtroTexto4 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto4 + parte4filtroRodape
var filtromontado5rodape = parte1filtroRodape + filtroTexto5 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto5 + parte4filtroRodape
var filtromontado6rodape = parte1filtroRodape + filtroTexto6 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto6 + parte4filtroRodape
var filtromontado7rodape = parte1filtroRodape + filtroTexto7 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto7 + parte4filtroRodape
var filtromontado8rodape = parte1filtroRodape + filtroTexto8 + parte2filtroRodape + operador + parte3filtroRodape + filtroTexto8 + parte4filtroRodape 



/*Montar os filtros*/
if ( filtroTexto1.length == 0 || filtroTexto1print ==0) {
(filtro1 = semnadafiltro),(filtro1rodape = semnadafiltro); // Não será mostrado
} else {
(filtro1 = filtromontado1),(filtro1rodape =filtromontado1rodape)}; 


if ( filtroTexto2.length == 0 || filtroTexto2print ==0) {
(filtro2 = semnadafiltro),(filtro2rodape = semnadafiltro); // Não será mostrado
} else {
(filtro2 = filtromontado2),(filtro2rodape = filtromontado2rodape)};

if ( filtroTexto3.length == 0 || filtroTexto3print ==0) {
(filtro3 = semnadafiltro),(filtro3rodape = semnadafiltro); // Não será mostrado
} else {
(filtro3 = filtromontado3),(filtro3rodape =filtromontado3rodape)};


if ( filtroTexto4.length == 0 || filtroTexto4print ==0) {
(filtro4 = semnadafiltro),(filtro4rodape = semnadafiltro); // Não será mostrado
} else {
(filtro4 = filtromontado4),(filtro4rodape =filtromontado4rodape)};


if ( filtroTexto5.length == 0 || filtroTexto5print ==0) {
(filtro5 = semnadafiltro),(filtro5rodape = semnadafiltro); // Não será mostrado
} else {
(filtro5 = filtromontado5),(filtro5rodape =filtromontado5rodape)};


if ( filtroTexto6.length == 0 || filtroTexto6print ==0) {
(filtro6 = semnadafiltro),(filtro6rodape = semnadafiltro); // Não será mostrado
} else {
(filtro6 = filtromontado6),(filtro6rodape =filtromontado6rodape)};


if ( filtroTexto7.length == 0 || filtroTexto7print ==0) {
(filtro7 = semnadafiltro),(filtro7rodape = semnadafiltro); // Não será mostrado
} else {
(filtro7 = filtromontado7),(filtro7rodape =filtromontado7rodape)};


if ( filtroTexto8.length == 0 || filtroTexto8print ==0) {
(filtro8 = semnadafiltro),(filtro8rodape = semnadafiltro); // Não será mostrado
} else {
(filtro8 = filtromontado8),(filtro8rodape =filtromontado8rodape)};



/*Filtro Rodape*/


       
/*Filtro Fixos*/

/*Colunas tratamento*/
var coluna1 = coluna1Recebe
var coluna1print = (coluna1PrintRecebe.value)
var coluna2 = coluna2Recebe
var coluna2print = (coluna2PrintRecebe.value)
var coluna3 = coluna3Recebe
var coluna3print = (coluna3PrintRecebe.value)
var coluna4 = coluna4Recebe
var coluna4print = (coluna4PrintRecebe.value)
var coluna5 = coluna5Recebe
var coluna5print = (coluna5PrintRecebe.value)
var coluna6 = coluna6Recebe
var coluna6print = (coluna6PrintRecebe.value)
var coluna7 = coluna7Recebe
var coluna7print = (coluna7PrintRecebe.value)
var coluna8 = coluna8Recebe
var coluna8print = (coluna8PrintRecebe.value)
var coluna9 = coluna9Recebe
var coluna9print = (coluna9PrintRecebe.value)
var coluna10 = coluna10Recebe
var coluna10print = (coluna10PrintRecebe.value)
var coluna11 = coluna11Recebe
var coluna11print = (coluna11PrintRecebe.value)
var coluna12 = coluna12Recebe
var coluna12print = (coluna12PrintRecebe.value)
var coluna13 = coluna13Recebe
var coluna13print = (coluna13PrintRecebe.value)
var coluna14 = coluna14Recebe
var coluna14print = (coluna14PrintRecebe.value)
var coluna15 = coluna15Recebe
var coluna15print = (coluna15PrintRecebe.value)
var coluna16 = coluna16Recebe
var coluna16print = (coluna16PrintRecebe.value)
var coluna17 = coluna17Recebe
var coluna17print = (coluna17PrintRecebe.value)
var coluna18 = coluna18Recebe
var coluna18print = (coluna18PrintRecebe.value)
var coluna19 = coluna19Recebe
var coluna19print = (coluna19PrintRecebe.value)
var coluna20 = coluna20Recebe
var coluna20print = (coluna20PrintRecebe.value)
var coluna21 = coluna21Recebe
var coluna21print = (coluna21PrintRecebe.value)
var coluna22 = coluna22Recebe
var coluna22print = (coluna22PrintRecebe.value)
var coluna23 = coluna23Recebe
var coluna23print = (coluna23PrintRecebe.value)
var coluna24 = coluna24Recebe
var coluna24print = (coluna24PrintRecebe.value)
var coluna25 = coluna25Recebe
var coluna25print = (coluna25PrintRecebe.value)
var coluna26 = coluna26Recebe
var coluna26print = (coluna26PrintRecebe.value)
var coluna27 = coluna27Recebe
var coluna27print = (coluna27PrintRecebe.value)
var coluna28 = coluna28Recebe
var coluna28print = (coluna28PrintRecebe.value)
var coluna29 = coluna29Recebe
var coluna29print = (coluna29PrintRecebe.value)
var coluna30 = coluna30Recebe
var coluna30print = (coluna30PrintRecebe.value)
var coluna31 = coluna31Recebe
var coluna31print = (coluna31PrintRecebe.value)
var coluna32 = coluna32Recebe
var coluna32print = (coluna32PrintRecebe.value)
var coluna33 = coluna33Recebe
var coluna33print = (coluna33PrintRecebe.value)
var coluna34 = coluna34Recebe
var coluna34print = (coluna34PrintRecebe.value)
var coluna35 = coluna35Recebe
var coluna35print = (coluna35PrintRecebe.value)
var coluna36 = coluna36Recebe
var coluna36print = (coluna36PrintRecebe.value)
var coluna37 = coluna37Recebe
var coluna37print = (coluna37PrintRecebe.value)
var coluna38 = coluna38Recebe
var coluna38print = (coluna38PrintRecebe.value)
var coluna39 = coluna39Recebe
var coluna39print = (coluna39PrintRecebe.value)
var coluna40 = coluna40Recebe
var coluna40print = (coluna40PrintRecebe.value)                
/*query tratamento*/
/*var query = (queryRecebe.value)*/
/*OrderBy tratamento*/
var orderby = (orderByRecebe.value)
var tipo = (orderByTipoRecebe.value)
/*Montagem do Texto*/
var parte1 = '&lt;coluna titulo="'
var parte2 = '" coluna="'
var parte3 = '" tamanho="100" alinhamento="center" /&gt;</br>'
var semNada = ''

var linha1Recebe = parte1 + coluna1print + parte2 + coluna1 + parte3
var linha2Recebe = parte1 + coluna2print + parte2 + coluna2 + parte3
var linha3Recebe = parte1 + coluna3print + parte2 + coluna3 + parte3
var linha4Recebe = parte1 + coluna4print + parte2 + coluna4 + parte3
var linha5Recebe = parte1 + coluna5print + parte2 + coluna5 + parte3
var linha6Recebe = parte1 + coluna6print + parte2 + coluna6 + parte3
var linha7Recebe = parte1 + coluna7print + parte2 + coluna7 + parte3
var linha8Recebe = parte1 + coluna8print + parte2 + coluna8 + parte3
var linha9Recebe = parte1 + coluna9print + parte2 + coluna9 + parte3
var linha10Recebe = parte1 + coluna10print + parte2 + coluna10 + parte3
var linha11Recebe = parte1 + coluna11print + parte2 + coluna11 + parte3
var linha12Recebe = parte1 + coluna11print + parte2 + coluna12+ parte3
var linha13Recebe = parte1 + coluna13print + parte2 + coluna13 + parte3
var linha14Recebe = parte1 + coluna14print + parte2 + coluna14 + parte3
var linha15Recebe = parte1 + coluna15print + parte2 + coluna15 + parte3
var linha16Recebe = parte1 + coluna16print + parte2 + coluna16 + parte3
var linha17Recebe = parte1 + coluna17print + parte2 + coluna17 + parte3
var linha18Recebe = parte1 + coluna18print + parte2 + coluna18 + parte3
var linha19Recebe = parte1 + coluna19print + parte2 + coluna19 + parte3
var linha20Recebe = parte1 + coluna20print + parte2 + coluna20 + parte3
var linha21Recebe = parte1 + coluna21print + parte2 + coluna21 + parte3
var linha22Recebe = parte1 + coluna22print + parte2 + coluna22 + parte3
var linha23Recebe = parte1 + coluna23print + parte2 + coluna23 + parte3
var linha24Recebe = parte1 + coluna24print + parte2 + coluna24 + parte3
var linha25Recebe = parte1 + coluna25print + parte2 + coluna25 + parte3
var linha26Recebe = parte1 + coluna26print + parte2 + coluna26 + parte3
var linha27Recebe = parte1 + coluna27print + parte2 + coluna27 + parte3
var linha28Recebe = parte1 + coluna28print + parte2 + coluna28 + parte3
var linha29Recebe = parte1 + coluna29print + parte2 + coluna29 + parte3
var linha30Recebe = parte1 + coluna30print + parte2 + coluna30 + parte3
var linha31Recebe = parte1 + coluna31print + parte2 + coluna31 + parte3
var linha32Recebe = parte1 + coluna32print + parte2 + coluna32 + parte3
var linha33Recebe = parte1 + coluna33print + parte2 + coluna33 + parte3
var linha34Recebe = parte1 + coluna34print + parte2 + coluna34 + parte3
var linha35Recebe = parte1 + coluna35print + parte2 + coluna35 + parte3
var linha36Recebe = parte1 + coluna36print + parte2 + coluna36 + parte3
var linha37Recebe = parte1 + coluna37print + parte2 + coluna37 + parte3
var linha38Recebe = parte1 + coluna38print + parte2 + coluna38 + parte3
var linha39Recebe = parte1 + coluna39print + parte2 + coluna39 + parte3
var linha40Recebe = parte1 + coluna40print + parte2 + coluna40 + parte3


if ( coluna1.length == 0 || coluna1print ==0) {
(linha1 = semNada); // Não será mostrado
} else {
(linha1 = linha1Recebe)};

if ( coluna2.length == 0 || coluna2print ==0) {
(linha2 = semNada); // Não será mostrado
} else {
(linha2 = linha2Recebe)};

if ( coluna3.length == 0 || coluna3print ==0) {
(linha3 = semNada); // Não será mostrado
} else {
(linha3 = linha3Recebe)};

if ( coluna4.length == 0 || coluna4print ==0) {
(linha4 = semNada); // Não será mostrado
} else {
(linha4 = linha4Recebe)};

if ( coluna5.length == 0 || coluna5print ==0) {
(linha5 = semNada); // Não será mostrado
} else {
(linha5 = linha5Recebe)};

if ( coluna6.length == 0 || coluna6print ==0) {
(linha6 = semNada); // Não será mostrado
} else {
(linha6 = linha6Recebe)};

if ( coluna7.length == 0 || coluna7print ==0) {
(linha7 = semNada); // Não será mostrado
} else {
(linha7 = linha7Recebe)};

if ( coluna8.length == 0 || coluna8print ==0) {
(linha8 = semNada); // Não será mostrado
} else {
(linha8 = linha8Recebe)};

if ( coluna9.length == 0 || coluna9print ==0) {
(linha9 = semNada); // Não será mostrado
} else {
(linha9 = linha9Recebe)};

if ( coluna10.length == 0 || coluna10print ==0) {
(linha10 = semNada); // Não será mostrado
} else {
(linha10 = linha10Recebe)};

if ( coluna11.length == 0 || coluna11print ==0) {
(linha11 = semNada); // Não será mostrado
} else {
(linha11 = linha11Recebe)};

if ( coluna12.length == 0 || coluna12print ==0) {
(linha12 = semNada); // Não será mostrado
} else {
(linha12 = linha12Recebe)};

if ( coluna13.length == 0 || coluna13print ==0) {
(linha13 = semNada); // Não será mostrado
} else {
(linha13 = linha13Recebe)};

if ( coluna14.length == 0 || coluna14print ==0) {
(linha14 = semNada); // Não será mostrado
} else {
(linha14 = linha14Recebe)};

if ( coluna15.length == 0 || coluna15print ==0) {
(linha15 = semNada); // Não será mostrado
} else {
(linha15 = linha15Recebe)};

if ( coluna16.length == 0 || coluna16print ==0) {
(linha16 = semNada); // Não será mostrado
} else {
(linha16 = linha16Recebe)};

if ( coluna17.length == 0 || coluna17print ==0) {
(linha17 = semNada); // Não será mostrado
} else {
(linha17 = linha17Recebe)};

if ( coluna18.length == 0 || coluna18print ==0) {
(linha18 = semNada); // Não será mostrado
} else {
(linha18 = linha18Recebe)};

if ( coluna19.length == 0 || coluna19print ==0) {
(linha19 = semNada); // Não será mostrado
} else {
(linha19 = linha19Recebe)};

if ( coluna20.length == 0 || coluna20print ==0) {
(linha20 = semNada); // Não será mostrado
} else {
(linha20 = linha20Recebe)};

if ( coluna21.length == 0 || coluna21print ==0) {
(linha21 = semNada); // Não será mostrado
} else {
(linha21 = linha21Recebe)};

if ( coluna22.length == 0 || coluna22print ==0) {
(linha22 = semNada); // Não será mostrado
} else {
(linha22 = linha22Recebe)};

if ( coluna23.length == 0 || coluna23print ==0) {
(linha23 = semNada); // Não será mostrado
} else {
(linha23 = linha23Recebe)};

if ( coluna24.length == 0 || coluna24print ==0) {
(linha24 = semNada); // Não será mostrado
} else {
(linha24 = linha24Recebe)};

if ( coluna25.length == 0 || coluna25print ==0) {
(linha25 = semNada); // Não será mostrado
} else {
(linha25 = linha25Recebe)};

if ( coluna26.length == 0 || coluna26print ==0) {
(linha26 = semNada); // Não será mostrado
} else {
(linha26 = linha26Recebe)};

if ( coluna27.length == 0 || coluna27print ==0) {
(linha27 = semNada); // Não será mostrado
} else {
(linha27 = linha27Recebe)};

if ( coluna28.length == 0 || coluna28print ==0) {
(linha28 = semNada); // Não será mostrado
} else {
(linha28 = linha28Recebe)};

if ( coluna29.length == 0 || coluna29print ==0) {
(linha29 = semNada); // Não será mostrado
} else {
(linha29 = linha29Recebe)};

if ( coluna30.length == 0 || coluna30print ==0) {
(linha30 = semNada); // Não será mostrado
} else {
(linha30 = linha30Recebe)};

if ( coluna31.length == 0 || coluna31print ==0) {
(linha31 = semNada); // Não será mostrado
} else {
(linha31 = linha31Recebe)};

if ( coluna32.length == 0 || coluna32print ==0) {
(linha32 = semNada); // Não será mostrado
} else {
(linha32 = linha32Recebe)};

if ( coluna33.length == 0 || coluna33print ==0) {
(linha33 = semNada); // Não será mostrado
} else {
(linha33 = linha33Recebe)};

if ( coluna34.length == 0 || coluna34print ==0) {
(linha34 = semNada); // Não será mostrado
} else {
(linha34 = linha34Recebe)};

if ( coluna35.length == 0 || coluna35print ==0) {
(linha35 = semNada); // Não será mostrado
} else {
(linha35 = linha35Recebe)};

if ( coluna36.length == 0 || coluna36print ==0) {
(linha36 = semNada); // Não será mostrado
} else {
(linha36 = linha36Recebe)};

if ( coluna37.length == 0 || coluna37print ==0) {
(linha37 = semNada); // Não será mostrado
} else {
(linha37 = linha37Recebe)};

if ( coluna38.length == 0 || coluna38print ==0) {
(linha38 = semNada); // Não será mostrado
} else {
(linha38 = linha38Recebe)};

if ( coluna39.length == 0 || coluna39print ==0) {
(linha39 = semNada); // Não será mostrado
} else {
(linha39 = linha39Recebe)};

if ( coluna40.length == 0 || coluna40print ==0) {
(linha40 = semNada); // Não será mostrado
} else {
(linha40 = linha40Recebe)};

// Avisar se o Nome Do Relatório Foi Preenchido

if ( name == 0  || typeof name == 'undefined' || name == null){
 (ColocarNomeNoRelatorio = `<div class="nok">1 - Opa!! Você <strong>Não colocou</strong> Nome no Relatório! Preencha e Clique em Gerar Novamente - Verificar!</div>`);
 } else {
 (ColocarNomeNoRelatorio= `<div class="ok">1 - O Nome do Relatório Gerado é: <strong> ${name} </strong></div> `)};

 resNomeRelatorio.innerHTML  = `${ColocarNomeNoRelatorio}`

 valida1.innerHTML = ColocarNomeNoRelatorio

// Avisar se tem ao menos 1 Filtro
 if (( filtrofixo1 == 0  || typeof filtrofixo1 == 'undefined' || filtrofixo1 == null)&&
       (filtrofixo2 == 0  || typeof filtrofixo2 == 'undefined' || filtrofixo2 == null)&&
         (filtrofixo3 == 0  || typeof filtrofixo3 == 'undefined' || filtrofixo3 == null)&&
         (filtrofixo4 == 0  || typeof filtrofixo4 == 'undefined' || filtrofixo4 == null)&&
         (filtrofixo5 == 0  || typeof filtrofixo5 == 'undefined' || filtrofixo5 == null)&&
         (filtro1 == 0  || typeof filtro1 == 'undefined' || filtro1 == null)&&
         (filtro2 == 0  || typeof filtro2 == 'undefined' || filtro3 == null)&&
         (filtro3 == 0  || typeof filtro3 == 'undefined' || filtro3 == null)&&
         (filtro4 == 0  || typeof filtro4 == 'undefined' || filtro4 == null)&&
         (filtro5 == 0  || typeof filtro5 == 'undefined' || filtro5 == null)&&
         (filtro6 == 0  || typeof filtro6 == 'undefined' || filtro6 == null)&&
         (filtro7 == 0  || typeof filtro7 == 'undefined' || filtro7 == null)&&
         (filtro8 == 0  || typeof filtro8 == 'undefined' || filtro8 == null )){
   (ColocarAlgumFilto = `<div class="nok">2 - Você <strong>Não</strong> Colocou Nenhum Filtro - Para Otimizar o Rel Coloque Ao Menos 1 Filtro e Gere Novamente! - Verificar!</div>`);
   } else {
   (ColocarAlgumFilto= `<div class="ok">2 - O relatório Possui Ao Menos 1 Filtro - OK</div> `)};


   valida2.innerHTML = ColocarAlgumFilto

   //Avisar se tem ao menos 1 campo

   if (
      (linha1 == 0  || typeof linha1 == 'undefined' || linha1 == null)&& 
      (  linha2 == 0  || typeof linha2 == 'undefined' || linha2 == null)&& 
      (  linha3 == 0  || typeof linha3 == 'undefined' || linha3 == null)&& 
      (  linha4 == 0  || typeof linha4 == 'undefined' || linha4 == null)&& 
      (  linha5 == 0  || typeof linha5 == 'undefined' || linha5 == null)&& 
      (  linha6 == 0  || typeof linha6 == 'undefined' || linha6 == null)&&  
      (  linha7 == 0  || typeof linha7 == 'undefined' || linha7 == null)&& 
      (  linha8 == 0  || typeof linha8 == 'undefined' || linha8 == null)&& 
      (  linha9 == 0  || typeof linha9 == 'undefined' || linha9 == null)&& 
      (  linha10 == 0  || typeof linha10 == 'undefined' || linha10 == null)&& 
      (  linha11 == 0  || typeof linha11 == 'undefined' || linha11 == null)&& 
      (  linha12 == 0  || typeof linha12 == 'undefined' || linha12 == null)&& 
      (  linha13 == 0  || typeof linha13 == 'undefined' || linha13 == null)&& 
      (  linha14 == 0  || typeof linha14 == 'undefined' || linha14 == null)&& 
      (  linha15 == 0  || typeof linha15 == 'undefined' || linha15 == null)&& 
      (  linha16 == 0  || typeof linha16 == 'undefined' || linha16 == null)&& 
      (  linha17 == 0  || typeof linha17 == 'undefined' || linha17 == null)&& 
      (  linha18 == 0  || typeof linha18 == 'undefined' || linha18 == null)&& 
      (  linha19 == 0  || typeof linha19 == 'undefined' || linha19 == null)&& 
      (  linha20 == 0  || typeof linha20 == 'undefined' || linha20 == null)&& 
      (  linha21 == 0  || typeof linha21 == 'undefined' || linha21 == null)&& 
      (  linha22 == 0  || typeof linha22 == 'undefined' || linha22 == null)&& 
      (  linha23 == 0  || typeof linha23 == 'undefined' || linha23 == null)&& 
      (  linha24 == 0  || typeof linha24 == 'undefined' || linha24 == null)&& 
      (  linha25 == 0  || typeof linha25 == 'undefined' || linha25 == null)&& 
      (  linha26 == 0  || typeof linha26 == 'undefined' || linha26 == null)&& 
      (  linha27 == 0  || typeof linha27 == 'undefined' || linha27 == null)&& 
      (  linha28 == 0  || typeof linha28 == 'undefined' || linha28 == null)&& 
      (  linha29 == 0  || typeof linha29 == 'undefined' || linha29 == null)&& 
      (  linha30 == 0  || typeof linha30 == 'undefined' || linha30 == null)&& 
      (  linha31 == 0  || typeof linha31 == 'undefined' || linha31 == null)&& 
      (  linha32 == 0  || typeof linha32 == 'undefined' || linha32 == null)&& 
      (  linha33 == 0  || typeof linha33 == 'undefined' || linha33 == null)&& 
      (  linha34 == 0  || typeof linha34 == 'undefined' || linha34 == null)&& 
      (  linha35 == 0  || typeof linha35 == 'undefined' || linha35 == null)&& 
      (  linha36 == 0  || typeof linha36 == 'undefined' || linha36 == null)&& 
      (  linha37 == 0  || typeof linha37 == 'undefined' || linha37 == null)&& 
      (  linha38 == 0  || typeof linha38 == 'undefined' || linha38 == null)&& 
      (  linha39 == 0  || typeof linha39 == 'undefined' || linha39 == null)&& 
      (  linha40 == 0  || typeof linha40 == 'undefined' || linha40 == null)
               
          ){
(ColocarAlgumaColuna = `<div class="nok">3 - Você Não Colocou Ao Menos 1 Coluna - Verifique E Gere Novamente - Verificar!</div>`);
} else {
(ColocarAlgumaColuna= `<div class="ok">3 - Você Colocou Ao Menos 1 Coluna - OK</div>` )};


valida3.innerHTML = ColocarAlgumaColuna

// verificar se tem a palavra where
if ( queryglobalUpper.indexOf('WHERE') >= 0){
   (verificarWhere = `<div class="nok">4 - Você Colocou Where na query - A Ferramenta Não Permite Essa Clausula - Verifique a Query e Monte Novamente - Verificar!</div>`);
   } else {
   (verificarWhere= `<div class="ok">4 - A Query Não Possui Where, Portanto Neste Ponto Está Correta - OK`)};


valida4.innerHTML = verificarWhere

// Verificar se o campo orderby Foi preenchido
if ( orderby == 0  || typeof orderby == 'undefined' || orderby == null){
   (verificarOrderBy = `<div class="nok">5 - Você Esqueceu de Preencher o Campo de OrderBy! Não Esqueça de Verificar o Tipo da Ordenação ASC ou DESC - Verificar!</div>`);
   } else {
   (verificarOrderBy= `<div class="ok">5 - Você Colocou o Campo de OrderBy - OK</div>`)};


valida5.innerHTML = verificarOrderBy

//Verificar se foi colocada a query
if ( queryglobalUpper == 0  || typeof queryglobalUpper == 'undefined' || queryglobalUpper == null){
   (verificarQuery = `<div class="nok">6 - Você Não Colocou a Query - Siga os Passos, Preenchendo de Cima Para Baixo, Após Carregar a Consulta! - Verificar! </div>`);
   } else {
   (verificarQuery= `<div class="ok">6 - Query Foi Carregada Com Sucesso - OK </div>`)};


valida6.innerHTML = verificarQuery

//xml.innerHTML = 'Montou o XML'
console.log('Montou o XML')

//Aspas duplas

var queryComAspasSimplesDuplas = queryglobalUpper.replace(/'/gi,"''");

// Insert e Update
var InsertMontadoCabecalhoMontado = `begin tran </br>Insert Into reports.customs </br>([name],[xml],[Category],[CreatedDate],[CreatedBy], [XmlFile]) </br> values</br> ('${name}','${filename}', '${categoria}',GETDATE(), user,'`
var InsertMontadoRodapeMontado = `')`

var checkbox10 = document.getElementById('txinsert');
if(checkbox10.checked) {
   (insertCabecalho = InsertMontadoCabecalhoMontado),
   (insertRodape = InsertMontadoRodapeMontado) ;
   } else {
      (insertCabecalho = semNada);
      (insertRodape = semNada);
       }; 

var UpdateCabecalhoMontado = `begin tran </br>update reports.customs set xmlfile = '`;
var UpdateRodapeMontado = `' where customid =`;
var customIdRecebe = window.document.getElementById('txwhere');
var customid = (customIdRecebe.value);


var checkbox11 = document.getElementById('txupdate');
if(checkbox11.checked) {
   (updateCabecalho = UpdateCabecalhoMontado),
   (updateRodape = UpdateRodapeMontado),
   (customid = `'${customid}'`);
   } else {
      (updateCabecalho = semNada),
      (updateRodape = semNada),
      (customid = semNada);
       };

    
   
  
//XML ABAIXO
res.innerHTML = 


`
${insertCabecalho}
${updateCabecalho}
</br>

&lt;relatorio nome="${name}"&gt; </br>
&lt;layout colunas="10" /&gt; </br>
&lt;comportamento iniciarlistando="nao" timeout="100" linhasporpagina="20" /&gt; </br>
&lt;parametros&gt; </br></br>

${filtrofixo1}
${filtro1}
${filtro2}
${filtro3}
${filtro4}
${filtro5}
${filtro6}
${filtro7}
${filtro8}

${filtrofixo2}
${filtrofixo3}
${filtrofixo4}
${filtrofixo5}


</br>
&lt;/parametros&gt; </br></br>
&lt;visualizar&gt; </br></br>
&lt;colunas&gt;</br></br>


${linha1}
${linha2}
${linha3}
${linha4}
${linha5}
${linha6}
${linha7}
${linha8}
${linha9}
${linha10}
${linha11}
${linha12}
${linha13}
${linha14}
${linha15}
${linha16}
${linha17}
${linha18}
${linha19}
${linha20}
${linha21}
${linha22}
${linha23}
${linha24}
${linha25}
${linha26}
${linha27}
${linha28}
${linha29}
${linha30}
${linha31}
${linha32}
${linha33}
${linha34}
${linha35}
${linha36}
${linha37}
${linha38}
${linha39}
${linha40}

</br>
&lt;/colunas&gt;</br></br>
&lt;/visualizar&gt;</br></br>
&lt;exportar borda="1" corfundotitulo="#FFFF33" arquivo="${filename}.xls"&gt;</br>
&lt;colunas&gt;</br></br>

${linha1}
${linha2}
${linha3}
${linha4}
${linha5}
${linha6}
${linha7}
${linha8}
${linha9}
${linha10}
${linha11}
${linha12}
${linha13}
${linha14}
${linha15}
${linha16}
${linha17}
${linha18}
${linha19}
${linha20}
${linha21}
${linha22}
${linha23}
${linha24}
${linha25}
${linha26}
${linha27}
${linha28}
${linha29}
${linha30}
${linha31}
${linha32}
${linha33}
${linha34}
${linha35}
${linha36}
${linha37}
${linha38}
${linha39}
${linha40}

</br>
&lt;/colunas&gt;</br></br>
&lt;/exportar&gt;</br></br>
&lt;query&gt;</br></br>
&lt;select&gt;</br></br>
${queryComAspasSimplesDuplas}</br></br>
&lt;/select&gt;</br></br>
&lt;selectExportar&gt;</br></br>
${queryComAspasSimplesDuplas}</br></br>
&lt;/selectExportar&gt;</br></br>
&lt;where&gt;</br></br>
&lt;parametros&gt;</br></br>

${filtro1rodape}                
${filtro2rodape}                
${filtro3rodape}                
${filtro4rodape}                
${filtro5rodape}                
${filtro6rodape}                
${filtro7rodape}                
${filtro8rodape}                

${filtrofixo1_}
${filtrofixo2_}
${filtrofixo3_}
${filtrofixo4_}
${filtrofixo5_}


</br>
&lt;/parametros&gt;</br></br>
&lt;/where&gt;</br>
&lt;outros /&gt;</br>
&lt;groupby /&gt;</br>
&lt;orderby&gt;</br></br>
&lt;coluna coluna="${orderby}" tipo="${tipo}" parametro="@ordernar" /&gt;</br>
&lt;/orderby&gt;</br></br>
&lt;overOrderBy&gt;</br>
&lt;coluna coluna="${orderby}" tipo="${tipo}" parametro="@ordernar" /&gt;</br>
&lt;/overOrderBy&gt;</br></br>
&lt;/query&gt;</br></br>
&lt;/relatorio&gt;</br>
${insertRodape}
${updateRodape} ${customid}

`


} 