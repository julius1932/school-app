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
  description: "update School",
  notes: "update School",

  validate: {
    payload: Joi.object({
      id: Joi.any().required().description("the id for the School"),
      name: Joi.string().required().description("the name for the School"),
      email: Joi.string().required().description("email for the School"),
      mobile1: Joi.string().required().description("mobile for the School"),
      mobile2: Joi.string().required().description("mobile for the School"),
      phone1: Joi.string().required().description("phone for the School"),
      phone2: Joi.string().required().description("phone for the School"),
      district: Joi.any().required().description("district of the School"),
      province: Joi.string().required().description("province of the School"),
      address: Joi.any().required().description("address of the School"),
      country: Joi.string().required().description("country of the School"),
      website: Joi.string().required().description("School website"),
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
      let data = await service.update("School", query, payload);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
