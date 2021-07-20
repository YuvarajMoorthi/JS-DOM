var body = document.body
//create div
var div=document.createElement("div");
div.setAttribute("id","div1");
div.setAttribute("style","text-align:center;")
body.appendChild(div);
//create label 
var lab=document.createElement("label");
lab.setAttribute('id', 'label1');
lab.setAttribute("style","font-size:30px;")
lab.innerHTML="<b>Name:</b>"+
  "<br>";
div.append(lab);
//create input tag
var inp=document.createElement("input");
inp.setAttribute('type', 'text');
inp.setAttribute('id', 'input1');
inp.setAttribute("placeholder","Enter the Name");
inp.setAttribute("style","width:200px;height:30px;")
div.append(inp);
var br=document.createElement("br");
div.appendChild(br);
var br=document.createElement("br");
div.appendChild(br);
//create button
//buttom for add list
var btn=document.createElement("button");
btn.setAttribute("id","button1");
btn.setAttribute("value","submit");
btn.setAttribute("style","font-size:20px;width:100px;border-radius:10px;border:1px solid MediumSeaGreen;background-color:MediumSeaGreen;color:white;")
btn.setAttribute("onclick","add();");
btn.innerHTML="Add";
div.append(btn);
//button for delete list
var btno=document.createElement("button");
btno.setAttribute("id","button20");
btno.setAttribute("value","submit");
btno.setAttribute("style","font-size:20px;width:100px;border-radius:10px;border:1px solid MediumSeaGreen;background-color:MediumSeaGreen;color:white;")
btno.setAttribute("onclick","del();");
btno.innerHTML="Delete";
div.append(btno);

var br=document.createElement("br");
div.appendChild(br);
var br=document.createElement("br");
div.appendChild(br);
//create label for name_list
 var node=document.createElement("div");
node.setAttribute("id","list1")
node.setAttribute("style","font-size:20px;")
  node.innerHTML="Name list";
  div.append(node);
var br=document.createElement("br");
div.appendChild(br);
var br=document.createElement("br");
div.appendChild(br);
//function for add list

function add(){
    var mylist=document.createElement("li");
    mylist.setAttribute("class","li1");
    mylist.setAttribute("style","list-style:none;");
    div.append(mylist);
    var checkbox = 
     document.createElement('input');
     checkbox.setAttribute("type","checkbox");
     checkbox.setAttribute("class","t1");
     //checkbox.setAttribute("name","test");
     mylist.appendChild(checkbox);
     var node=document.createElement("label");
     node.setAttribute("id","labelout")
     node.setAttribute("style","font-size:20px;padding-left:10px;");
     var val=
      document.getElementById("input1").value;
     
     var textnode=document.createTextNode(val);
     node.appendChild(textnode);
   mylist.appendChild(node);
     var btn=document.createElement("button");
   btn.setAttribute("id","button2");
     btn.setAttribute("style","margin-left:20px;color:white;background-color:MediumSeaGreen;border:1px solid;border-radius:10px;width:80px;font-size:15px;");
   btn.setAttribute("onclick","edit();");
   btn.innerHTML="Edit";
   mylist.append(btn);
     var br=document.createElement("br");
   mylist.appendChild(br);
}
   //function for edit the name_list
   function edit(){
     var inp=document.createElement("input");
     inp.setAttribute("id","input2");
     inp.setAttribute("type","text");
     inp.setAttribute("placeholder","Enter New Name");
     div.appendChild(inp);
     var btn=document.createElement("button");
   btn.setAttribute("id","button10");
   btn.setAttribute("style","font-size:15px;width:100px;border-radius:10px;border:1px solid MediumSeaGreen;background-color:MediumSeaGreen;color:white;")
   btn.setAttribute("onclick","addNew();");
   btn.innerHTML="Add New";
   div.append(btn);
   var bn=document.createElement("button");
   bn.setAttribute("id","bn1");
   bn.setAttribute("style","background-color:rgb(180,180,180);border:1px solid;border-radius:50px;color:white;");
   bn.setAttribute("onclick","hide();");
   bn.innerHTML="X";
   div.append(bn);
   // this is first remove value and add newname
   //addNew();
   }
//add new name 
   function addNew(){
       let edi=document.getElementById("labelout");
       let newn=document.getElementById("input2").value;
       edi.innerHTML=newn; 
   }
   
//hide edit value
function hide(){
    var num1=document.getElementById("bn1"); 
    var num2=document.getElementById("input2"); 
    var num3=document.getElementById("button10"); 
    num1.style.display = "none";
    num2.style.display = "none";
    num3.style.display = "none";
}
/* function show(){
    document.getElementById("bn1").style.display = " "; 
    document.getElementById("input2").style.display = " "; 
    document.getElementById("button10").style.display = " ";
}*/
//delete the selected name
function del(){
        var boxes = document.getElementsByClassName('t1');
        var texts = document.getElementsByClassName('li1');
        for(var i = 0; i<boxes.length; i++){
            box = boxes[i];
            txt = texts[i];
            if(box.checked){
                box.parentNode.removeChild(box);
                txt.parentNode.removeChild(txt);
            }
        }
    }
