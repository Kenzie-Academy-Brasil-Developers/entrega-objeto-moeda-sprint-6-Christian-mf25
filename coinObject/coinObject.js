const body = document.body
const h1 = document.createElement("h1")
h1.innerText = "Objeto Moeda"
body.appendChild(h1)

const coin = {
	state: 0,
  
	flip: function () {
		let coinFlip = this.state = Math.floor(Math.random() * 2)
		return coinFlip
	},
  
	toString: function () {
		let result = ""
		let coinToss = this.state === 1 ? result += "Heads" : result += "Tails"
		return result
	},
	
	toHTML: function () {
		const image = document.createElement("img")

		if(this.state === 1){
			image.src = "./images/cara.png" 
			image.alt = "Heads" 
		}
		if(this.state === 0){
			image.src = "./images/coroa.png" 
			image.alt = "Tails"
		}

		return image
	}
}

function display20Flips() {
	const text = document.createElement("div")
	const results = []

	for(let i = 0; i < 20; i++){
		coin.flip()
		results.push(coin.toString())
	}

	for(let i = 0; i < results.length; i++){
		text.innerText += results[i] + " "
	}
	
	body.appendChild(text)
	return results
}

display20Flips()

function display20Images() {
	const images = document.createElement("div")
	const results = []

	for(let i = 0; i < 20; i++){
		coin.flip()
		results.push(coin.toHTML())
	}

	for(let i = 0; i < results.length; i++){
		body.appendChild(results[i])
	}
	return results
}
display20Images()

