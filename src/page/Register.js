import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    pass: "",
    cpass: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    pass: "",
    terms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      phone: "",
      email: "",
      pass: "",
      terms: "",
    };

    let ok = true;
    const letters = /^[A-Za-z\s]+$/;
    const numbers = /^[0-9]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name
    if (form.fname.trim() === "" || form.lname.trim() === "") {
      newErrors.name = "First and last name are required.";
      ok = false;
    } else if (!letters.test(form.fname) || !letters.test(form.lname)) {
      newErrors.name = "Names should contain letters only.";
      ok = false;
    }

    // Phone
    if (form.phone.trim() === "" || !numbers.test(form.phone)) {
      newErrors.phone = "Phone number should contain digits only.";
      ok = false;
    }

    // Email
    if (form.email.trim() === "" || !emailPattern.test(form.email)) {
      newErrors.email = "Invalid email address.";
      ok = false;
    }

    // Password
    if (form.pass.length < 6) {
      newErrors.pass = "Password must be at least 6 characters.";
      ok = false;
    } else if (form.pass !== form.cpass) {
      newErrors.pass = "Passwords do not match.";
      ok = false;
    }

    // Terms
    if (!form.terms) {
      newErrors.terms = "You must agree to the terms.";
      ok = false;
    }

    setErrors(newErrors);

    if (ok) {
      alert("Registration successful!");
      setForm({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        pass: "",
        cpass: "",
        terms: false,
      });
      setErrors({
        name: "",
        phone: "",
        email: "",
        pass: "",
        terms: "",
      });
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="register-row">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={form.fname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={form.lname}
            onChange={handleChange}
          />
        </div>
        {errors.name && <p className="register-error">{errors.name}</p>}

        <div className="register-row">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        {errors.phone && <p className="register-error">{errors.phone}</p>}
        {errors.email && <p className="register-error">{errors.email}</p>}

        <div className="register-row">
          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={form.pass}
            onChange={handleChange}
          />
          <input
            type="password"
            name="cpass"
            placeholder="Confirm Password"
            value={form.cpass}
            onChange={handleChange}
          />
        </div>
        {errors.pass && <p className="register-error">{errors.pass}</p>}

        <div className="register-terms">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            I agree with the terms &amp; conditions
          </label>
        </div>
        {errors.terms && <p className="register-error">{errors.terms}</p>}

        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}