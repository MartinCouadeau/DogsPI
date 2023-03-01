export function Validate(inputs) {
    const errors = {}
    const regexName = /^[a-zA-Z]{3,20}(?:\s+[a-zA-Z]{1,10})*$/;
    const regexBreedGroup = /^[a-zA-Z]{3,30}$/i;
    const regexImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

    if (!regexName.test(inputs.name)) {
      errors.name = 'A valid name must have more than 3 and less than 30 alphabetic characters';
    }
    if (inputs.min_height < 10 || inputs.min_height > 150) {
      errors.min_height = "The minimum height cannot be less than 10 or greater than 150 CM";
    }
    if (parseInt(inputs.max_height) < parseInt(inputs.min_height) || inputs.max_height > 300) {
      errors.max_height = "The maximun height cannot be less than the minimun height or greater than 300 CM";
    }
    if (parseInt(inputs.min_weight) < 1 || parseInt(inputs.min_weight) > 80) {
        errors.min_weight = "The minimum weight cannot be less than 1 or greater than 80 kilograms";
    }
    if (parseInt(inputs.max_weight) < parseInt(inputs.min_weight) || inputs.max_weight > 90) {
      errors.max_weight = "The maximun weight cannot be less than minimun weight or greater than 90 kilograms";
    }
    if (inputs.life_span < 1 || inputs.life_span > 20) {
        errors.life_span = "Life span cannot be less than 1 or greater than 20 years";
    }
    if (!regexBreedGroup.test(inputs.breed_group)) {
      errors.breed_group = 'A valid name must have more than 3 and less than 30 alphabetic characters';
    }
    if (!regexImage.test(inputs.image)) {
      errors.image = "the Image must be a imagen url that beggins with 'https' and ends with png, gif, webp, jpeg or jpg"
    }
    return errors
  }


