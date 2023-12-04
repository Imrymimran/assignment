var mt = prompt("Enter the marks of Math out of 100");
var bio = prompt("Enter the marks of Biology out of 100");
var chem = prompt("Enter the marks of Chemistry out of 100");
var eng = prompt("Enter the marks of English out of 100");
var phy = prompt("Enter the marks of Physics out of 100");
var total = Number(mt)+Number(bio)+Number(chem)+Number(eng)+Number(phy)
var avg = Number(total)/5
var per =Number(total)*100/500
document.write("total marks of subjects="+total)
document.write("<br> Average ="+avg)
document.write("<br> Percentage ="+per)


