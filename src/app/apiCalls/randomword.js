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
        return randomWord;
    } catch (error) {
        console.error("Error:", error.message)
    }
}
//export default dataFetch
