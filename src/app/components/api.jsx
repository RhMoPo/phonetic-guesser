
//F: random word api call 
//F: use random word in dictionary API call
// return Word, Phonetic and definition inside obejct
export default async function getRandomWord() {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("🚀 ~ getRandomWord ~ data:", data)
        let randomWord = data[0]
        console.log("🚀 ~ getRandomWord ~ randomWord:", randomWord)
        await getDeictionaryData(randomWord)
    } catch (error) {
        console.error("Error:", error.message)
    }
}
//export default dataFetch