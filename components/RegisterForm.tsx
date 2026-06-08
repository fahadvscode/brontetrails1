"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { PROJECT } from "@/lib/constants";

export type BrokerAnswer = "yes" | "no";

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isBroker: BrokerAnswer;
}

interface RegisterFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function RegisterForm({
  className = "",
  onSuccess,
}: RegisterFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError("");
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      isBroker: data.isBroker,
      projectTag: PROJECT.tag,
      source: PROJECT.source,
    };

    try {
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      setSubmitted(true);
      reset();
      onSuccess?.();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className={`py-6 text-center ${className}`}>
        <p className="font-display text-2xl text-forest-dark">Thank you!</p>
        <p className="mt-2 font-body text-sm text-forest-mid">
          You&apos;re registered. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className="form-input"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className="form-input"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className="form-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="647-xxx-xxxx"
          className="form-input"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <fieldset>
        <legend className="form-label mb-2">Are you a broker?</legend>
        <div className="flex gap-4">
          <label className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded border border-forest-mid/20 bg-white px-4 py-2 text-sm">
            <input
              type="radio"
              value="yes"
              className="h-4 w-4 accent-forest-green"
              {...register("isBroker", { required: "Please select an option" })}
            />
            <span>Yes</span>
          </label>
          <label className="flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded border border-forest-mid/20 bg-white px-4 py-2 text-sm">
            <input
              type="radio"
              value="no"
              className="h-4 w-4 accent-forest-green"
              {...register("isBroker", { required: "Please select an option" })}
            />
            <span>No</span>
          </label>
        </div>
        {errors.isBroker && (
          <p className="mt-1 text-xs text-red-600">{errors.isBroker.message}</p>
        )}
      </fieldset>

      {submitError && (
        <p className="text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>

      <p className="text-center text-[10px] leading-relaxed text-gray-500">
        By registering, you agree to receive updates about Bronte Trails.
      </p>
    </form>
  );
}
