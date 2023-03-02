export function Validate(name) {
    let errors = ""
    const regex = /^[a-zA-Z]{0,15}(?:\s+[a-zA-Z]{1,10})*$/;

    if (!regex.test(name)) {
        errors = "The name you search can only contain alphabetic characters and has a maximun of 30 characters allowed"
    }
    return errors
}