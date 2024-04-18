// DOM target
const jokeDisplay = document.getElementById('jokes-text')
const moreJokesBtn = document.querySelector('.btn-generate')

// Store Variable
const joke1 = ['How can you tell if a plant is good at math? It has square roots.']
const joke2 = [`I'd tell you a pizza joke, but it's a bit too cheesy.`]
const joke3 = ['What do you call a moose with no name? Anony-moose.']
const joke4 = [`I don't like artists. They tend to be sketchy.`]
const joke5 = ['What kind of tree fits in your hand? A palm tree.']
const joke6 = ['Two artists had an art contest. It ended in a draw.']
const joke7 = [`How can you tell it's a dogwood tree? From the bark.`]

// Nest Variable
const jokes = [joke1, joke2, joke3, joke4, joke5, joke6, joke7]

// Function generate random array
const genRand = param => {
  return jokeDisplay.innerText = param[Math.floor(Math.random() * param.length)];
}

// Button Function
moreJokesBtn.addEventListener('click', () => {
  genRand(jokes)
})