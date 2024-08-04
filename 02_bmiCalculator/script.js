const form = document.querySelector('form')
//this code will give you empty values
// const height = parseInt(document.querySelector('#height').value)
 
form.addEventListener('submit',function(e){
    e.preventDefault() //to stop previous action

    const height = parseInt(document.querySelector('#height').value) //.value=> to get the input height value
    const weight = parseInt(document.querySelector('#weight').value) //.value=> to get the input weight value
    const results = document.querySelector('#results')

    if(height === ' ' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }else if(weight === ' ' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    } else{ 
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show results
        results.innerHTML = `<span>${bmi}</span>`;    
    }
    
})