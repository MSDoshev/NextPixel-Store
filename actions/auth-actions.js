"use server";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";
import validator from "validator";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
  if (!passwordRegex.test(password)) {
    throw new Error(
      "Password must be at least 8 characters and include uppercase, lowercase, digit, and special character."
    );
  }
  return true;
}

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const repeatPassword = formData.get("confirm-password");

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
  const hashedPassword = hashUserPassword(password);
  try {
    await createUser(email, hashedPassword);
  } catch (error) {
    if (error.message === "DUPLICATE_EMAIL") {
      return {
        errors: {
          email:
            "An account with this email already exists. Please try another email or log in.",
        },
      };
    }
    throw error;
  }

  redirect("/");
}
