import axios from 'axios';
import {getChatResponse} from '../constant/ApiConstant';

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
          Authorization:
            'Bearer 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',
        },
      },
    )
    .then(res => {
      return Promise.resolve(res.data.choices[0].text);
    });
};
