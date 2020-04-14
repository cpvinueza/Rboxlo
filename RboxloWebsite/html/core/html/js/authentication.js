function register(form, _callback)
{  
    var details = JSON.stringify(form)
    
    $.post("/endpoints/authentication/register.php", {
        information: details
    })
    .done(function(data)
    {
        _callback(JSON.parse(data))
    })
}

function login(form, _callback)
{  
    var details = JSON.stringify(form)
    
    $.post("/endpoints/authentication/login.php", {
        information: details
    })
    .done(function(data)
    {
        _callback(JSON.parse(data))
    })
}