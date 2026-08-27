"use client";

import { useState } from "react";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function ContactPage({ page }) {
  const [sent, setSent] = useState(false);
  const ic = page.icons;

  return (
    <>
      <div className="banner inner_banner">
        <div className="banner_bg">
          <div className="main_container">
            <div className="banner_inner">
              <div className="banner_dtl">
                <h1 className="banner_title">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padding">
        <div className="main_container">
          <div className="kit_contact">
            <div className="kit_contact_form">
              <h2 className="primary_title">Let&rsquo;s Talk</h2>
              {sent ? (
                <p className="primary_text">Thanks — we&rsquo;ll be in touch. (Demo form, nothing was sent.)</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="kit_field">
                    <label>Full Name</label>
                    <input type="text" required />
                  </div>
                  <div className="kit_field">
                    <label>Email</label>
                    <input type="email" required />
                  </div>
                  <div className="kit_field">
                    <label>Phone</label>
                    <input type="tel" />
                  </div>
                  <div className="kit_field">
                    <label>Business Type</label>
                    <select>
                      {["Retail", "Food", "Health & Beauty", "Automotive", "Services"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="kit_field">
                    <label>Message</label>
                    <textarea rows="4" />
                  </div>
                  <button className="primary_cta" type="submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="kit_contact_side">
              <SiteImage src={page.image} className="kit_contact_img" />
              {page.offices.map((o) => (
                <div className="kit_office" key={o.name}>
                  <h4 className="foot_secondary_title">{o.name}</h4>
                  <div className="kit_office_row">
                    <img src={"/assets/img/" + ic.location} alt="" />
                    <span>{o.address}</span>
                  </div>
                  <div className="kit_office_row">
                    <img src={"/assets/img/" + ic.email} alt="" />
                    <a href={"mailto:" + o.email}>{o.email}</a>
                  </div>
                  <div className="kit_office_row">
                    <img src={"/assets/img/" + ic.phone} alt="" />
                    <a href={"tel:" + o.phone.replace(/[^\d+]/g, "")}>{o.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
