function randomNumber(num) {
    return Math.floor(Math.random() * num)
}

const skateboardingParts = {
    boards: ['Birdhouse', 'Plan B', 'Element', 'Enjoi', 'Santa Cruz', 'Baker', 'Powell Peralta'],
    trucks: ['Origin', 'Venture', 'Thunder', 'Ace', 'Independent'],
    bearings: ['Bones Reds', 'Bones Super Reds, Spitfire Cheapshots', 'Bronson Speed'],
    wheels: ['Ricta', 'OJ', 'Powell Peralta', 'Bones', 'Spitfire']
}

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

function formatSkateboardDeck(deck) {
    const formatted = completeSkateboardDeck.join('\n')
    console.log(formatted)
}

formatSkateboardDeck(completeSkateboardDeck)