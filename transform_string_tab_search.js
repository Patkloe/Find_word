
   // ver 0.0
function transform_string_tab_search(s, v){
  var tab = s.split(", ");   // criteria pour creer le tableau
  var nbre = 0;
 for(var i = 0; i < tab.length; i++){
     if (tab[i] === v)
         nbre++;
 }
  alert( v + 'found'  +  " " +  nbre  +  " "  +  'times');
  return nbre;
}
var ex = 'aa, bb, cc, dd, aa';
transform_string_tab_search('aa, bb, cc, dd, aa','aa');
