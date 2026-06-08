"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { PROJECT } from "@/lib/constants";

export type BuyerType =
  | "first-time"
  | "investor"
  | "upgrader"
  | "exploring";

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  buyerType: BuyerType;
  consent: boolean;
}

interface RegisterFormProps {
  variant?: "full" | "compact";
  className?: string;
  onSuccess?: () => void;
}

const buyerOptions: { value: BuyerType; label: string }[] = [
  { value: "first-time", label: "First-time buyer" },
  { value: "investor", label: "Investor" },
  { value: "upgrader", label: "Upgrader" },
  { value: "exploring", label: "Just exploring" },
];

export default function RegisterForm({
  variant = "full",
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
  } = useForm<RegisterFormData>({
    defaultValues: {
      buyerType: "exploring",
      consent: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError("");
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city || "",
      buyerType: data.buyerType || "exploring",
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
      setSubmitError(
        "Something went wrong. Please try again in a moment."
      );
    }
  };

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest-green">
          <svg
            className="h-8 w-8 text-cream"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-display text-2xl text-forest-dark">
          Thank you!
        </p>
        <p className="mt-2 font-body text-sm text-forest-mid">
          You&apos;re registered. We&apos;ll be in touch with your VIP package
          soon.
        </p>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
      noValidate
    >
      <div className={isCompact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
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
        {!isCompact && (
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
        )}
      </div>

      {isCompact && (
        <div>
          <label htmlFor="lastName-compact" className="form-label">
            Last Name
          </label>
          <input
            id="lastName-compact"
            type="text"
            autoComplete="family-name"
            className="form-input"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      )}

      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
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
          Phone Number
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
              message: "Enter a valid Canadian phone number",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {!isCompact && (
        <>
          <div>
            <label htmlFor="city" className="form-label">
              City / Postal Code
            </label>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              className="form-input"
              {...register("city", { required: "City or postal code is required" })}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>
            )}
          </div>

          <fieldset>
            <legend className="form-label mb-2">Are you a:</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {buyerOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex min-h-12 cursor-pointer items-center gap-2 rounded border border-forest-mid/20 bg-white px-4 py-2 text-sm"
                >
                  <input
                    type="radio"
                    value={opt.value}
                    className="h-4 w-4 accent-forest-green"
                    {...register("buyerType", { required: true })}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex min-h-12 cursor-pointer items-start gap-3 text-sm">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-forest-green"
              {...register("consent", {
                required: "Please accept to receive VIP updates",
              })}
            />
            <span>
              Yes, I&apos;d like to receive VIP updates about Bronte Trails
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600">{errors.consent.message}</p>
          )}
        </>
      )}

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
        {isSubmitting ? "Submitting..." : "Register for VIP Access"}
      </button>

    </form>
  );
}
