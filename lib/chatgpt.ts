import Configuration from "openai";
import OpenAIApi from "openai";


// const configuration = new Configuration({
//     organization:"org-UAPij8a0wQMcsyzsJG6ucMMP",
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default openai;


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});
 export { chatCompletion};