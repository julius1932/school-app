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
  description: "get Class",
  notes: "get Class",
  validate: {
    params: Joi.object({
      schoolId: Joi.number().integer().required().description("the name for the Class"),
    }),
    query: Joi.object({
      id: Joi.string().optional().description("the id for the Class"),
      lvel: Joi.number().integer().optional().description("the name for the Class"),
      category: Joi.string().optional().description("the name for the Class"),
    }),
  },
  handler: async (request, reply) => {
    const onError = (err) => {
      console.log(err);
      return reply.response(boom.badRequest(err));
    };

    try {
      const payload = {...request.params,...request.query};
      const query = {};
      if(payload){
        query.where = {};
        Object.keys(payload).forEach((key, i) => {
           if(!isEmpty(payload[key])){
               query.where[key] = payload[key];
           }
           console.log(query)
        });
      }
      let data = await service.get("Klass", query);
      return reply.response(data);
    } catch (err) {
      return onError(err);
    }
  },
};
