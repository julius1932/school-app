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
  description: "get School",
  notes: "get School",
  validate: {
    query: Joi.object({
      id: Joi.string().optional().description("the id for the School"),
      name: Joi.string().optional().description("the name for the School"),
      email: Joi.string().optional().description("email for the School"),
      mobile1: Joi.string().optional().description("mobile for the School"),
      mobile2: Joi.string().optional().description("mobile for the School"),
      phone1: Joi.string().optional().description("phone for the School"),
      phone2: Joi.string().optional().description("phone for the School"),
      district: Joi.string().optional().description("district of the School"),
      province: Joi.string().optional().description("province of the School"),
      address: Joi.string().optional().description("address of the School"),
      country: Joi.string().optional().description("country of the School"),
      website: Joi.string().optional().description("School website"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = request.query;
      const query = {};
      if (payload) {
        query.where = {};
        Object.keys(payload).forEach((key) => {
          if (payload[key] && payload[key] != "undifined")
            query.where[key] = payload[key];
        });
        console.log(query);
      }
      let data = await service.get("School", query);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
