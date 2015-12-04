

var validate = require('validate.js')
validate.validators.custom = function(value, options, key, attributes) {
  console.log(value);
  console.log(options);
  console.log(key);
  console.log(attributes);
  return "is totally wrong";
};

validate.validators.trim = function(value, options, key, attributes) {
  console.log(value);
  console.log(options);
  console.log(key);
  console.log(attributes);
  return null;
};


var GoogleSchema = {
  username: {
    validations:{
      presence: true,
      exclusion: {
        within: ["nicklas"],
        message: "'%{value}' is not allowed"
      }
    },
    sanitizations:{

    }
  },
  password: {
    presence: true,
    custom:true,
    length: {
      minimum: 6,
      message: "^must be at least 6 characters"
    }
  }
};

var trimWhiteSpace = function(value){

}

var cleanUpRules = {
  username:{

  }
}

console.log(validate({password: "bad",}, constraints));

sanitize({},rules)

var GoogleFeedSchema = {
  id :{
    validations:{
      presence: true,
      length: {
        maximum: 50 ,
        message: "must be '%{value}' characters at max"
      }
    },
    sanitizations:{
      trim:{},

    }
  },
  title:{
    presence: true,
    length: {
      maximum: 150 ,
      message: "must be '%{value}' characters at max"
    }
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

