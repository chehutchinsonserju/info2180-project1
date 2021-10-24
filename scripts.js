window.onload = () =>
{
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //Thanks stack overflow

    let subscribe = document.querySelector("button.btn");
    //assigning the subscribe button
    let input = document.querySelector("input[type=\"email\"]");
    //assigning the current text field input
    
    let result = document.querySelector("div.message");
    //assigning the response message area

    subscribe.onclick = (event) =>
    //listener attached to the subcribe button
    {
        event.preventDefault();

        if (regex.test(input.value.toLowerCase()))
        //regex determines if the input is a valid email
        {
            //in the event that it is valid
            result.innerHTML = `Thank you! Your email address ${input.value} has been added to our mailing list!`;
        }
        else
        {
            //in the event that it is not valid
            result.innerHTML = "Please enter a valid email address."
        }
    }
}