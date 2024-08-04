const openChatBot = document.querySelector("#chatButton");
const chatBanner = document.querySelector(".chat-banner");
const chatBot = document.querySelector("#chatbot");
const closeChatBot = document.querySelector(".btn");

openChatBot.addEventListener("click", () => {
    chatBanner.style.display = "none";
    chatBot.style.display = "flex";
})

closeChatBot.addEventListener("click", () => {
    chatBanner.style.display = "flex";
    chatBot.style.display = "none";
})

let keywords = [
    ["hi", "hey", "hello"],
    ["how are you", "how is life", "whats happening"],
    ["what are you doing", "what is going on"],
    ["who are you", "are you human", "are you a bot"],
    ["i love you", "love", "love you"],
    ["how old are you", "what is your age"],
    ["happy", "thankful", "great", "cool", "good", "that's great"],
    ["bad", "hate", "angry"],
    ["who created you", "who made you"],
    ["your name please", "your name", "may i know your name", "what is your name"],
    ["help me", "tell a story", "tell a joke"],
    ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["where do you live", "where do you stay"],
    ["i miss you", "miss you"],
    ["are you a male or female", "are you a female", "are you a male"],
    ["what are your hobbies", "hobbies"],
    ["are you real"],
    ["what language do you speak"],
];

let response = [
    ["Hi", "Hey!", "Hello", "Sup?"],
    ["Fine", "Pretty well", "Fantastic"],
    ["Lets change the topic", "Nothing much", "About to sleep", "Can you guess?", "I don't know actually", "I am somewhere in Los Angeles"],
    ["I am just a bot", "I am a bot", "What are you?"],
    ["I love you too", "Me too", "I love you"],
    ["I am 12 days old", "I'm still a baby bot"],
    ["Good to know", "Glad to hear it", "cool stuff"],
    ["Why?", "Cheer up?", "Don't be hateful"],
    ["Ryan Tyler", "Ryan Tyler"],
    ["Ryan ChatBot", "I have a name", "Yes, It is Ryan ChatBot", "guess"],
    ["I will", "I do not know any stories 🤔", "Teacher: What is a bay lizard called?... Tom: A baby lizard is called a lizzybaby 🤣🤣🤣"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome", "Ok", "That's nice"],
    ["Bye", "Goodbye", "See you later"],
    ["In Los Angeles, California", "In the Internet"],
    ["Me too", "I miss you too"],
    ["It doesn't matter"],
    ["chatting"],
    ["Yes I am"],
    ["Javascript and English for now"],
];

let defaultResponse = ["Come again...", "Hmmm...", "I like chatting", "Ask me anything", "Okay", "I'm having fun are you?"];

let totalChat = document.querySelector("#submit").addEventListener("click", (e) => {
    let input = document.getElementById("input").value;
    if (input === "") {
        alert("Say something");
        return false;
    }
    let mainChat = document.querySelector(".main-user");
    let newUser = document.createElement("p");
    newUser.className = "user";
    newUser.innerHTML = input;
    mainChat.appendChild(newUser)
    document.querySelector(".headline").innerHTML = "Chat Bot is typing";
    setTimeout(() => {
        reply(input);
    }, 500);
    document.getElementById("input").value = "";
})

const reply = (input) => {
    let inputFromUser = (input.toLowerCase()).replace(/[^\w\s]/gi, ""); // Remove special characters
    inputFromUser = inputFromUser.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/please/g, "");

    let responseText = converge(keywords, response, inputFromUser);

    if (!responseText) {
        responseText = defaultResponse[Math.floor(Math.random() * defaultResponse.length)];
    }

    let mainChat = document.querySelector(".main-user");
    let newBot = document.createElement("p");
    newBot.className = "newbot";
    newBot.innerHTML = responseText;
    mainChat.appendChild(newBot)
    document.querySelector(".headline").innerHTML = "";
}

const converge = (arrayKeywords, arrayResponse, text) => {
    for (let i = 0; i < arrayKeywords.length; i++) {
        for (let j = 0; j < arrayKeywords[i].length; j++) {
            if (arrayKeywords[i][j] === text) {
                return arrayResponse[i][Math.floor(Math.random() * arrayResponse[i].length)];
            }
        }
    }
    return null;
}
