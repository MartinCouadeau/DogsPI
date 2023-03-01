export function Validate(inputs) {
    const errors = {}
    const regexName = /^[a-zA-Z]{3,}$/i;
    const regexBreedGroup = /^[a-zA-Z]{3,}$/i;
    const regexImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

    if (!regexName.test(inputs.name)) {
      errors.name = 'A valid name must have 3 or more alphabetic characters';
    }
    else if (inputs.min_height < 0 && inputs.min_height > 3) {
      errors.min_height = "The minimum height cannot be less than 0 or greater than 3 meters";
    }
    else if (inputs.max_height > inputs.min_height  && inputs.max_height < 5) {
      errors.max_height = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (inputs.min_weight > 0) {
        errors.min_weight = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (inputs.max_weight > inputs.min_weight  && inputs.max_weight < 100) {
      errors.max_weight = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (inputs.life_span > 0) {
        errors.life_span = "Life span cannot be less tan 1";
    }
    else if (!regexBreedGroup.test(inputs.breed_group)) {
      errors.breed_group = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    return errors
  }


