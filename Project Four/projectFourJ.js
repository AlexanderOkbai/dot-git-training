var text = [{
    testimonial: "I love it! Highly recommended.",
    name: "- Jane Doe"
}, 
{
    testimonial: "A must-have for everyone.",
    name: "- James Smith"
}, {
    testimonial: "This is the best service ever!",
    name: "- John Doe"
}];

var index = 0;

function changeText() {
    if (index < text.length) {
        var idOfTexts1 = document.getElementById("child1");
        var idOfTexts2 = document.getElementById("child2");

        idOfTexts1.textContent = text[index].testimonial;
        idOfTexts2.textContent = text[index].name;

        index++;
    }
    else{
        index=0;
    }
    
}
setInterval(changeText, 2600);


