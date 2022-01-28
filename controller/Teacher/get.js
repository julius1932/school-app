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
  description: "get Teacher",
  notes: "get Teacher",
  validate: {
    params: Joi.object({
      id: Joi.string().optional().description("the id for the Teacher"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const params = request.params;
      const query = {};
      if (params && params.id.trim()) {
        query.where = {};
        query.where.id = params.id;
      }
      let data = await service.get("Teacher", query);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
