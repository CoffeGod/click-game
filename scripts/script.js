let counter = 0;
let i = 1;

mainButton.onclick = function countClicks()
{
    counter++;
    clicks.innerHTML = counter;

    if (counter == i)
    {
        mainText.innerHTML = mainArr[i];
        i++;
        
    }
    
}

let mainArr = [
    "...","Zzzz...", "Starting...", "Upgrading...", "Hello!", "Привет!", "Ты, наверное, еще не понял", "Теперь я твой лучший друг"
]

