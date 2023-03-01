export function Validate(inputs) {
    const errors = {}
    const regexName = /^[a-zA-Z]{3,}$/i;
    const regexBreedGroup = /^[a-zA-Z]{3,}$/i;
    const regexImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

    if (!regexName.test(inputs.name)) {
      errors.name = 'A valid name must have 3 or more alphabetic characters';
    }
    if (inputs.min_height < 1 || inputs.min_height > 2) {
      errors.min_height = "The minimum height cannot be less than 1 or greater than 2 meters";
    }
    if (inputs.max_height < inputs.min_height  || inputs.max_height > 3) {
      errors.max_height = "The maximun height cannot be less than the minimun height or greater than 3 meters";
    }
    if (inputs.min_weight < 1 || inputs.min_weight > 80) {
        errors.min_weight = "The minimum weight cannot be less than 1 or greater than 80 kilograms";
    }
    if (inputs.max_weight < inputs.min_weight  || inputs.max_weight > 90) {
      errors.max_weight = "The maximun weight cannot be less than minimun weight or greater than 90 kilograms";
    }
    if (inputs.life_span < 1) {
        errors.life_span = "Life span cannot be less than 1";
    }
    if (!regexBreedGroup.test(inputs.breed_group)) {
      errors.breed_group = 'A valid name must have 3 or more alphabetic characters';
    }
    if (!regexImage.test(inputs.image)) {
      errors.image = "the Image must be a imagen url"
    }
    return errors
  }


