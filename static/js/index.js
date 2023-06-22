const elementFilter = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');
const resultMessage = document.querySelector('.no-results-message');
elementFilter.addEventListener('input', filtterElement);


console.log(elementFilter);
function filtterElement(){
	let resultMsg = false;

	if (elementFilter.value != ''){
			
		for (let card of cards){
			let titleCard = card.querySelector('span');
			titleCard = titleCard.textContent.toLowerCase();	
			let fillterText = elementFilter.value.toLowerCase();

			if(!titleCard.includes(fillterText)){
				card.style.display = 'none';
				
			} else {
				card.style.display = 'block';
				resultMsg = true;
			}
		}
		if (!resultMsg) {
			resultMessage.style.display = 'block';
			} else {
			resultMessage.style.display = 'none';
		}
	} else{
		for (let card of cards){
			card.style.display= 'block';
		}
		resultMessage.style.display = 'none';
	}
}
