import { celebrate, Joi } from 'celebrate';
import { messages } from 'joi-translation-pt-br';

export const urlBodyValidation = celebrate(
    {
        body: Joi.object().keys({
            url: Joi.string().uri(),
        }),
    },
    {
        abortEarly: false,
        messages: messages,
    }
);
