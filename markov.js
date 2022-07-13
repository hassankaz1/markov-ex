/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chain = {}
    this.words[this.words.length] = null;
    for(let i=0; i <this.words.length-2; i++){
      if(chain.hasOwnProperty(this.words[i])){
        chain[this.words[i]] = [...chain[this.words[i]], this.words[i+1]]
      } else {
        chain[this.words[i]] = [this.words[i+1]]
      }
    }
    this.wordChain = chain
  }

  randWord(arr){
    // console.log(arr)
    let randNum = Math.floor(Math.random()*arr.length)
    return arr[randNum]
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    const text = [];
    let next_word = this.words[0];
    let num = 0;
    while(num<numWords && next_word != null){
      text.push(next_word);
      next_word = this.randWord(this.wordChain[next_word]);
      num++;
    }

    const str = text.join(" ");
    return str;
  }
}


let mm = new MarkovMachine("the cat in the hat");

mm.makeChains()

mm.makeText()