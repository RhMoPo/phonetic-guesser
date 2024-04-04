
// //F: random word api call 
// //F: use random word in dictionary API call
// // return Word, Phonetic and definition inside obejct
// export async function getRandomWord() {
//     try {
//         const randomWordResponse = await fetch("https://random-word-api.herokuapp.com/word")
//         if (!randomWordResponse.ok) {
//             throw new Error(`HTTP error! status: ${randomWordResponse.status}`);
//         }
//         let data = await randomWordResponse.json();
//         console.log("🚀 ~ getRandomWord ~ data:", data)
//         let randomWord = data[0]
//         console.log("🚀 ~ getRandomWord ~ randomWord:", randomWord)
//         await getDictionaryData(randomWord)
//     } catch (error) {
//         console.error("Error:", error.message)
//     }
// }
// //export default dataFetch

// export default async function getDictionaryData(){
//     try {
//         const randomWord = await getRandomWord()
//         const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
//         if (!response.ok) throw new Error(`Failed to fetch the dictionary API for word: ${randomWord}`)
//         const data = await response.json();
//         if (!data[0] || !data[0].phonetics || !data[0].phonetics.length) {
//             getDictionaryData()//<=assess if all 'if' parameters are required
//             throw new Error("Phonetic data is missing or empty...");
//         }
//         //Find phonetic
//         const phonetic = data[0].phonetic.find(p => p.text)?.text;          //Possibility to change to map later
//         if (!phonetic) {
//             getDictionaryData()
//             throw new Error ("Phonetic not found...")
//         }

//         //Find definition - iterates over all keys called "meanings" to find meanings.definitions and then maps over meanings.definitions to find and create an array of all meanings.definitions.definition. 
//         const definitions = data[0].meanings.map(meaning => meaning.definitions.map(def.def.definition)).flat();

//           const dictionaryData = {            // destructure in future
//             word: randomWord,

//             phonetic: phonetic,
//             definition: definitions,
//        }

//        return dictionaryData;

//     }
//     catch (error) {
//         console.error("Error:", error.message);
//         getDictionaryData()
//     }
// }

// Fetches a random word from the API
async function fetchRandomWord() {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0]; // Returns the first word in the response
    } catch (error) {
        console.error("fetchRandomWord error:", error.message); 
    }
}
// Fetches dictionary data for a given word
async function fetchDictionaryData() {
    try {
        const randomWord = await fetchRandomWord();
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        );
        if (!response.ok) {
            throw new Error(
              `Failed to fetch the dictionary API for word: ${randomWord}`
            );
        }
        const data = await response.json();
        // Ensure the data includes phonetics and meanings
        if (!data[0] || !data[0].phonetics || !data[0].phonetics.length || !data[0].meanings) {
            throw new Error("Required data is missing from the dictionary response");
        }
        const phonetic = data[0].phonetics.find(p => p.text)?.text || "";
            const definitions = data[0].meanings.map(meaning =>
            meaning.definitions.map(def => def.definition)
        ).flat();
        console.log(definitions);
        return { randomWord, phonetic, definitions };
    } catch (error) {
        console.error("fetchDictionaryData error:", error.message);
        // Retry fetching dictionary data for the same word
        // return fetchDictionaryData();
    }
}
// Function to initiate the process
// async function getDictionaryData() {
//     const randomWord = await fetchRandomWord(); // This will keep retrying until successful
//     return await fetchDictionaryData(randomWord); // This will keep retrying until successful
// }
// Example usage
// getDictionaryData().then(data => console.log(data)).catch(error => console.error(error));