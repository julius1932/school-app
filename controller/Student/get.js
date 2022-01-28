const boom = require("@hapi/boom");
const Joi = require("joi");
const service = require("../../services/dbServices");
const {isEmpty}= require("../../helpers/common");

module.exports = {
  plugins: {
    "hapi-swagger": {
      payloadType: "form",
    },
  },
  auth: false,
  tags: ["api"],
  description: "get Teacher",
  notes: "get Teacher",
  validate: {
    params: Joi.object({
      schoolId: Joi.number().integer().required().description("school for the Teacher"),
    }),
    query: Joi.object({
      id: Joi.any().optional().description("the id for the Teacher"),
      name: Joi.string().optional().description("the name for the Teacher"),
      surname: Joi.string().optional().description("the name for the Teacher"),
      email: Joi.string().optional().description("email for the Teacher"),
      mobile: Joi.string().optional().description("mobile for the Teacher"),
      })
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = {...request.params,...request.query};
      const query = {};
      if (payload) {
        query.where = {};
        Object.keys(payload).forEach((key) => {
          if(!isEmpty(payload[key])){
            query.where[key] = payload[key];
          }
        });
        console.log(query);
      }
      let data = await service.get("Teacher", query);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
