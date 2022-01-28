const boom = require("@hapi/boom");
const Joi = require("joi");
const service = require("../../services/dbServices");

module.exports = {
  plugins: {
    "hapi-swagger": {
      payloadType: "form",
    },
  },
  plugins: {
    "hapi-swagger": {
      payloadType: "form",
    },
  },
  auth: false,
  tags: ["api"],
  description: "delete School",
  notes: "delete School",

  validate: {
    params: Joi.object({
      id: Joi.number().required().description("the id for the School"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const query = { where: { id: request.params.id } };
      let data = await service.delete("School", query);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
