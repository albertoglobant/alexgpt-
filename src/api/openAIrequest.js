import axios from 'axios';

export async function getAnswer(role, content) {
  const client = axios.create({
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    }),
    params = {
      messages: [
        {
          content,
          role,
        },
      ],
      model: 'gpt-3.5-turbo',
      max_tokens: 2000,
      temperature: 0.3,
    };
  client
    .post('https://api.openai.com/v1/chat/completions', params)
    .then((result) => {
      console.log(result.data.choices[0].message.content);
      return result.data.choices[0].message.content;
    });
}
