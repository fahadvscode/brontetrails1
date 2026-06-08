"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { PROJECT } from "@/lib/constants";

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
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
      name: data.name,
      email: data.email,
      phone: data.phone,
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
      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="form-input"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
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
