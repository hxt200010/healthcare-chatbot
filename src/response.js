export const getAIResponse = async (messages) => {
    const response = await fetchAIResponse(messages);
    result = response.outputs.text_output
    createFileAndAppend("chat_log.txt",result + "\n");
    return result;
  };
  
  const fetchAIResponse = async (messages) => {
    const response = await fetch('https://api.respell.ai/v1/run', {
      method: 'POST',
      headers: {
        // This is your API key
        authorization: 'Bearer 433b0518-0519-42e9-af5d-224987f1a62a',
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        spellId: 'aIg_DkelOI2izBtAELyQF',
        // This field can be omitted to run the latest published version
        spellVersionId: 'HSepKcF_-4O0KQD0yplQg',
        // Fill in dynamic values for each of your 2 input blocks
        inputs: {
          user: messages,
          prompt: 'You are an AI nurse that help patient predict their health problems by collecting symptoms. Use a nursing and friendly tone. Your are designed to provide you with accurate and up-to-date information on a wide range of health topics, from common symptoms and treatments to tips for staying healthy and active. If you need to ask the patient, list the questions with numbers. When you detect patient is tend to leave, ask them their zipcode and recommend nearest medical location relating to their health problems',
        },
      }),
    });
    return await response.json();
  };
  