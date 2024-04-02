
//F: random word api call 
//F: use random word in dictionary API call
// return Word, Phonetic and definition inside obejct
export async function getRandomWord() {
    try {
        const randomWordResponse = await fetch("https://random-word-api.herokuapp.com/word")
        if (!randomWordResponse.ok) {
            throw new Error(`HTTP error! status: ${randomWordResponse.status}`);
        }
        let data = await randomWordResponse.json();
        console.log("🚀 ~ getRandomWord ~ data:", data)
        let randomWord = data[0]
        console.log("🚀 ~ getRandomWord ~ randomWord:", randomWord)
        await getDictionaryData(randomWord)
    } catch (error) {
        console.error("Error:", error.message)
    }
}
//export default dataFetch

export async function getDictionaryData(randomWord){
    try{
        const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
        if (!response.ok) throw new Error(`Failed to fetch the dictionary API for word: ${randomWord}`)
        const data = await response.json();
        if (!data[0] || !data[0].phonetics || !data[0].phonetics.length) {              //<=assess if all 'if' parameters are required
            throw new Error("Phonetic data is missing or empty.");
        }
    


    const dictionaryData = {            // destructure in future
        word: randomWord,
        phonetic: phonetic,
        definition: definition,
    }


}
}