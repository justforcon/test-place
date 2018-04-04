
var arr='';
var eles=$('.markdown-body table')[0].children[1].children ;
for(let x of eles){
  console.log(x.children[0].innerHTML);
 arr= arr.concat('list.add(new String[]{"'+x.children[0].innerHTML.trim()+'","'+x.children[1].innerHTML.trim()+'('+x.children[2].innerHTML.trim()+')"});\n')
}
