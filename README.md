# Random Skateboard Generator

## Language: JavaScript

### What does it do?

- This project will create a sentence or a list of items that generate randomly each time we call the random skateboard generator.

### Breakdown of the project / step-by-step

- First, I had to make a random number picker. I/we will use that number picker later on to help us select from a list of items in an array.

```
function randomNumber(num) {
    return Math.floor(Math.random() * num)
}
```

- I then made an object list with a skateboards boards, trucks, bearings, and wheels. (I could have done grip tape, board size, and other items...but I decided to leave them off for now.)

```
const skateboardingParts = {
    boards: ['Birdhouse', 'Plan B', 'Element', 'Enjoi', 'Santa Cruz', 'Baker', 'Powell Peralta'],
    trucks: ['Origin', 'Venture', 'Thunder', 'Ace', 'Independent'],
    bearings: ['Bones Reds', 'Bones Super Reds, Spitfire Cheapshots', 'Bronson Speed'],
    wheels: ['Ricta', 'OJ', 'Powell Peralta', 'Bones', 'Spitfire']
}
```

- Now that we have the object array list down, next up was to loop through the object items. I used a **(for...in)** loop to help me loop through each object item, count the number of elements in the arrays for each item, and then put that _(.length)_ number inside of the random number function we previously made.

- The random number from the function would then be put inside of an index variable. (You can use any name for your variable and functions)

`let optionIdx = randomNumber(skateboardingParts[parts].length);`

- I used a switch/case to push the skateboardingParts that were randomly selected into our empty completeSkateboardDeck array variable.

```
switch (parts) {
    case 'boards':
        completeSkateboardDeck.push(`Your board is a "${skateboardingParts[parts][optionIdx]}".`)
        break
    case 'trucks':
        completeSkateboardDeck.push(`Your trucks are "${skateboardingParts[parts][optionIdx]}".`)
        break
    case 'bearings':
        completeSkateboardDeck.push(`Your bearings are "${skateboardingParts[parts][optionIdx]}".`)
        break
    case 'wheels':
        completeSkateboardDeck.push(`Your wheels are "${skateboardingParts[parts][optionIdx]}".`)
        break
    default:
        completeSkateboardDeck.push('There is not enough info.')
}
```

- Here is what I/we should have so far:

```
let completeSkateboardDeck = [];

for (let parts in skateboardingParts) {
    let optionIdx = randomNumber(skateboardingParts[parts].length);

    switch (parts) {
        case 'boards':
            completeSkateboardDeck.push(`Your board is a "${skateboardingParts[parts][optionIdx]}".`)
            break
        case 'trucks':
            completeSkateboardDeck.push(`Your trucks are "${skateboardingParts[parts][optionIdx]}".`)
            break
        case 'bearings':
            completeSkateboardDeck.push(`Your bearings are "${skateboardingParts[parts][optionIdx]}".`)
            break
        case 'wheels':
            completeSkateboardDeck.push(`Your wheels are "${skateboardingParts[parts][optionIdx]}".`)
            break
        default:
            completeSkateboardDeck.push('There is not enough info.')
    }
}
```

- The empty array will have the message and random skateboardParts that were selected inside of it.

- A function called formatSkateboardDeck will be created so that we can properly formate our messages to look nicely stacked on top of each other.

```

function formatSkateboardDeck(deck) {
const formatted = completeSkateboardDeck.join('\n')
console.log(formatted)
}

```

- At the end, we should call our random skateboard generator

`formatSkateboardDeck(completeSkateboardDeck)`

- This is what the outcome should look like in the terminal/bash/node

![outcome](/randomPracticeJS/photos/outcome.png)
