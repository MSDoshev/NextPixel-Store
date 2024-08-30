"use server";
import validator from "validator";

function validatePassword(password) {
  const minLength = 8;

  if (password.length < minLength) {
    throw new Error(`Password must be at least ${minLength} characters long.`);
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error("Password must contain at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    throw new Error("Password must contain at least one lowercase letter.");
  }

  if (!/[0-9]/.test(password)) {
    throw new Error("Password must contain at least one digit.");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    throw new Error("Password must contain at least one special character.");
  }

  if (/\s/.test(password)) {
    throw new Error("Password must not contain any whitespace.");
  }

  return true;
}

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("confirm-password");
  console.log(`Password: ${password}`);
  console.log(`Repeat-Password: ${repeatPassword}`);

  let errors = {};
  if (!validator.isEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  try {
    validatePassword(password);
  } catch (error) {
    errors.password = error.message;
  }

  if (password !== repeatPassword) {
    errors.repeatPassword = "The passwords do not match.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  //next store it in DB
}
