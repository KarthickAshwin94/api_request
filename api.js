var prompt=require("prompt-sync")();
var title1=prompt(" Enter the title ");
// now pass the title as input to the function
fetchapi(title1);
function fetchapi(title1)
{

    var f=0;
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((msg)=>{
        for(var i=0;i<msg.length;i++)
        {
            if(msg[i].title==title1)
            {
                console.log(msg[i]);
                f=1;
                break;
            }
        }
        if(f==0)
        {
            console.log("The title entered by you is not found");
        }
    })
    
}



// so we are having 100 titles in the array of objects returned by the api



