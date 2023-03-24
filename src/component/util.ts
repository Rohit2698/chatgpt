import axios from 'axios';
import {getChatResponse} from '../constant/ApiConstant';
import {API_TOKEN} from '@env';

export const getMesageReply = (message: string) => {
  return axios
    .post(
      getChatResponse,
      {
        max_tokens: 100,
        prompt: message,
      },
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    )
    .then(res => {
      return Promise.resolve(res.data.choices[0].text);
    });
};
