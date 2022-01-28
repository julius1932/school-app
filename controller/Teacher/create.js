const boom = require("@hapi/boom");
const Joi = require("joi");
const service = require("../../services/dbServices");

module.exports = {
  plugins: {
    "hapi-swagger": {
      payloadType: "form",
    },
  },
  auth: false,
  tags: ["api"],
  description: "create Teacher",
  notes: "create Teacher",

  validate: {
    payload: Joi.object({
      id: Joi.any().optional().description("the id for the Teacher"),
      name: Joi.string().required().description("the name for the Teacher"),
      surname: Joi.string().required().description("the name for the Teacher"),
      email: Joi.string().required().description("email for the Teacher"),
      mobile: Joi.string().required().description("mobile for the Teacher"),
      schoolId: Joi.number().integer().required().description("school for the Teacher"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = request.payload;
      let data = await service.create("Teacher", payload);
      return reply.response(data);
    } catch (err) {
      console.log(err);
      return onError(err);
    }
  },
};
