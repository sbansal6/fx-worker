var inspector = require('schema-inspector');

var GoogleFeedSchema = {
    id :{
        sanitization:{
            type: 'string',
            rules: ['trim']

        },
        validation:{
            type: 'string',
            minLength:1,
            maxLength:2
        },
    },
    title:{
        sanitization:{
            type: 'string',
            rules: ['trim']

        },
        validation:{
            type: 'string',
            minLength:1,
            maxLength:5
        },

    },
    description:{
        presence: true
    },
    google_product_category:{
        presence: true
    },
    product_type:{

    },
    link:{
        presence: true
    },
    image_link:{
        presence: true
    },
    price:{
        presence: true
    },
    condition:{
        presence: true
    },
    availability:{
        presence: true
    },
    brand:{
        presence: true
    },
    gtin:{

    },
    mpn:{

    },
    item_group_id:{

    },
    google_product_category:{

    },
    additional_image_link:{

    },
    sale_price:{

    },
    sale_price_effective_date:{

    },
    gender:{

    },
    age_group:{

    },
    color:{

    },
    size:{

    },
    material:{

    },
    pattern:{

    },
    shipping_weight:{

    },
    adwords_grouping:{

    },
    adwords_labels:{

    },
    excluded_destination:{

    },
    online_only:{

    },
    expiration_date:{

    },
    adwords_redirect:{

    },
    adult:{

    },
    multipack:{

    }

}

var getSanitizeSchema = function(connectorSchema){
    var sanitization = {type:"object",properties:{}}
    if (!connectorSchema){
        throw new Error("missing connector schema")
    }
    for (var field in connectorSchema){
        if (connectorSchema[field].sanitization){
            sanitization.properties[field] = connectorSchema[field].sanitization;
        }

    }
    return sanitization
}
var getValidationSchema = function(connectorSchema){
    var validation = {type:"object",properties:{}}
    if (!connectorSchema){
        throw new Error("missing connector schema")
    }
    for (var field in connectorSchema){
        if (connectorSchema[field].validation){
            validation.properties[field] = connectorSchema[field].validation;
        }

    }
    return validation
}

var sanitization  = getSanitizeSchema(GoogleFeedSchema)
var validation = getValidationSchema(GoogleFeedSchema)

var data = {
    id: "qwdqwdqwdqwdqwd",
    title:"asxasxasxasxasxasxas"

}

console.log(inspector.sanitize(sanitization, data).data)
console.log(inspector.validate(validation,data))