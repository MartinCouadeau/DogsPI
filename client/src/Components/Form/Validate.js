export function Validate(inputs) {
    const errors = {}
    const regexName = /^[a-zA-Z]{3,}$/i;
    const regexHeight = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
    const regexWeight = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
    const regexLifeSpan = /^[1-9][0-9]*$/;
    const regexBreedGroup = /^[a-zA-Z]{3,}$/i;
    const regexImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

    if (!regexName.test(inputs.name)) {
      errors.name = 'Please enter a valid name';
    }
    else if (!regexHeight.test(inputs.min_height)) {
      errors.min_height = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (!regexHeight.test(inputs.max_height)) {
      errors.max_height = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (!regexWeight.test(inputs.min_weight)) {
        errors.min_weight = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (!regexHeight.test(inputs.max_weight)) {
      errors.max_weight = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (!regexLifeSpan.test(inputs.life_span)) {
        errors.life_span = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    else if (!regexBreedGroup.test(inputs.breed_group)) {
      errors.breed_group = "tiene que tener al menos un número, una mayuscula, una minuscula y entre 6 y 10 caracteres";
    }
    return errors
  }


