const boom = require("boom");
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
  description: "update Class",
  notes: "update Class",

  validate: {
    payload: Joi.object({
      id: Joi.any().required().description("the id for the Class"),
      lvel: Joi.number().integer().required().description("the name for the Class"),
      category: Joi.string().required().description("the name for the Class"),
      schoolId: Joi.string().required().description("school for the Class"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = request.payload;
      const query = { where: { id: payload.id } };
      delete payload.id;
      let data = await service.update("Teacher", query, payload);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
