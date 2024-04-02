import { getRandomWord } from "./randomword";


export async function getDictionaryData(){
    try{
        const randomWord = await getRandomWord()
        const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
        if (!response.ok) throw new Error(`Failed to fetch the dictionary API for word: ${randomWord}`)
        const data = await response.json();
        if (!data[0] || !data[0].phonetics || !data[0].phonetics.length) {              //<=assess if all 'if' parameters are required
            throw new Error("Phonetic data is missing or empty...");
        }
        //Find phonetic
        const phonetic = data[0].phonetic.find(p => p.text)?.text;          //Possibility to change to map later
        if (!phonetic) {
            throw new Error ("Phonetic not found...")
        }

        //Find definition - iterates over all keys called "meanings" to find meanings.definitions and then maps over meanings.definitions to find and create an array of all meanings.definitions.definition. 
        const definitions = data[0].meanings.map(meaning => meaning.definitions.map(def.def.definition)).flat();

          const dictionaryData = {            // destructure in future
            word: randomWord,
            phonetic: phonetic,
            definition: definitions,
       }

       return dictionaryData;

    }
    catch (error) {
        console.error("Error:", error.message);
        getRandomWord();
    }
}