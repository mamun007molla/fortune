const fortunesText=[
    "You will have a great day!",
    "True wisdom comes not from knowledge, but from understanding.",
    "Opportunities don't happen. You create them.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't wait for opportunity. Create it.",
    "Success doesn't just find you. You have to go out and get it.",
    "Great things never come from comfort zones."

]
//  generate a random fortune
function randomFortune(){
    const randomIndex=Math.floor(Math.random()*fortunesText.length);
    return fortunesText[randomIndex];
}
// show the fortune
function showFortune(){
    const fortuneContainer=document.getElementById('fortune-container');
    fortuneContainer.textContent=randomFortune();
}
// change font color
function changeFontColor(){
    const color=['red','blue','green','purple','orange','pink','black'];
    const randomIndex=Math.floor(Math.random()*color.length);
    const fortuneContainer=document.querySelector('#fortune-container');
    fortuneContainer.style.color=color[randomIndex];
    document.querySelector('#font-color-button').style.backgroundColor=color[randomIndex];

}

// change background color
function changeBackgroundColor(){
    const color=['red','blue','green','purple','orange','pink','black'];
    const randomIndex=Math.floor(Math.random()*color.length);
    const fortuneContainer=document.querySelector('#fortune-container');
    fortuneContainer.style.backgroundColor=color[randomIndex];
    document.querySelector('#background-color-button').style.backgroundColor=color[randomIndex];
}

// change border color  
function changeBorderColor(){
    const color=['red','blue','green','purple','orange','pink','black'];
    const randomIndex=Math.floor(Math.random()*color.length);
    const fortuneContainer=document.querySelector('#fortune-container');
    fortuneContainer.style.borderColor=color[randomIndex];
    document.querySelector('#border-color-button').style.backgroundColor=color[randomIndex];
}   

// change font size and family
function changeFontSizeAndFamily(){
    const fontSize=['12px','14px','16px','18px','20px'];
    const randomIndex=Math.floor(Math.random()*fontSize.length);
    const fortuneContainer=document.querySelector('#fortune-container');
    fortuneContainer.style.fontSize=fontSize[randomIndex];
    document.querySelector('#font-style-button').style.backgroundColor=fontSize[randomIndex];
}
window.onload=showFortune;
