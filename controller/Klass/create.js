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
  description: "create Class",
  notes: "create Class",

  validate: {
    payload: Joi.object({
      id: Joi.any().optional().description("the id for the Class"),
      level: Joi.number().integer().required().description("the level for the Class eg 1 for 1A"),
      category: Joi.string().required().description("the category for the Class eg A for 1A"),
      schoolId: Joi.number().integer().required().description("school for the Class"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = request.payload;
      let data = await service.create("Klass", payload);
      return reply.response(data);
    } catch (err) {
      console.log(err);
      return onError(err);
    }
  },
};
