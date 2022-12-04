const gifts = ['shirt', 'cellphone', 'socks'];

function wrapping(gifts) {
    const wrappedGifts = [];
  
    for(let i = 0; i < gifts.length ; i++){
      let character = '*'.repeat(gifts[i].length + 2);
      wrappedGifts.push(character +'\n *' + gifts[i].toString() + '* \n' + character);
    }
  
    return wrappedGifts;
  }
  
  const wrapped = wrapping(gifts);
  console.log(wrapped);