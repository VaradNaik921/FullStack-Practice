let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    
    event.preventDefault();

    console.log(form.elements);
    const email = form.elements.email;
    const pass = form.elements.password;
    console.log({email, pass})


    if(email.value.trim().length === 0){
        // email.parentElement.querySelector('.error').style.display = 'block';
        email.parentElement.querySelector('.error').classList.remove('hide');
    }
    else{
        email.parentElement.querySelector('.error').classList.add('hide');
    }
    if(pass.value.trim().length === 0){
        // pass.parentElement.querySelector('.error').style.display = 'block';
        pass.parentElement.querySelector('.error').classList.remove('hide');
    }
    else{
        pass.parentElement.querySelector('.error').classList.add('hide');
    }

    // console.log(form.querySelector('[name=email]'))
    // console.log(form.querySelector('[name=password]'))
    
    console.log('form submitted');
})


//setTimeout(called after delay) //runs only once
//setInterval(called after every delay) //runs infinitely
//clearInterval(interval) to stop interval
//where const interval=setInterval(function(){//code})interval in ms
