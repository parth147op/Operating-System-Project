var track = 0;

function pro()
{
    var s = document.getElementById('space').value;
    var p = document.getElementById('produced').value;
    var t = document.getElementById('added'); 
    s++;
    if(parseInt(track)+parseInt(p) >= s)
    {
         alert("no space");
    }
    else 
    {
        for(var i = 0; i < p; i++)
        {
            var o = '<button type="button" style="background-color: #273746;margin-left: 50px;margin-top:30px;padding: 7px;color:aliceblue;border-radius: 10px;border:solid 2px aliceblue;letter-spacing: 0.1em;" id = '+(track+1)+' onclick="add_entry(this.id)">'+'process'+(track+1)+'</button>';
            track++;
            t.innerHTML += o;
        }
    }
}

function con()
{
    var s = document.getElementById('space').value;
    var c = document.getElementById('consumed').value;
    var t = document.getElementById('added');
    s++; 
    if(track - c >= 0)
    {
        for(var i = track; i > track-c; i--)
        {
            var x = document.getElementById(i);
            x.remove();
        }
        track -= c;
    }
    else 
    {
        alert("not enough producers");
    }
    
}

function reset()
{
    track = 0;
}