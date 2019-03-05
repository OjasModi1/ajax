var database=[{name:"Ojas",author="Ajitej Sir"},{name:"Pappu",author="Kartik Sir"},{name:"Raman",author="Shashank Sir"},{name:"Kunika",author="Satpal Sir"},{name:"Megha",author="Pulkit Sir"},
{name:"Deepak",author="Swapnil Sir"},{name:"Champu",author="Sadiq Sir"},{name:"Bunty",author="Suyash Sir"},{name:"Raunaq",author="Karanjit.Sir"},{name:"Himvan",author="Sanjay.Sir"}];
var table=document.createElement('table');
for (var i=0;i<=9;i++)
{
var tr=document.createElement('tr');
var td1=document.createElement('td');
var td2=document.createElement('td');
var td3=document.createElement('td');
var text1=document.createTextNode('database[i].name');
var text2=document.createTextNode('database[i].author');
var btn=document.createElement('input');
btn.type="button";
td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(btn);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
}//created table
database.sort(function(a,b)
{
if (a.name<b.name)
{
return -1;    
}
else if(a.name>b.name)
{
return 1;    
}
else
{
return 0;    
}    

})
database.sort(function(c,d)
{
if (a.author<b.author)
{
return -1;
}
else if (a.author>b.author)
{
return 1;    
}
else
{
return 0;    
}
})
