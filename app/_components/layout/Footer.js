import Link from "next/link";
import { nav } from "@/app/_lib/nav";
import { siteConfig } from "@/app/_lib/siteConfig";

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer_bg">
        <div className="consultation_bg">
          <div className="main_container">
            <div className="consultation_block section_padding">
              <div className="main_container">
                <div className="consultaioin_inner">
                  <div className="block">
                    <div className="sub_title">Get in Touch</div>
                    <h2 className="title">Let&rsquo;s get started with our team</h2>
                  </div>
                  <div className="block">
                    <Link href="/contact-us" className="primary_cta secondary_cta">
                      Request a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="footer_inner">
          <div className="footer_block">
            <div className="foot_col logo">
              <div className="footer_logo">
                <Link href="/" className="logo">
                  <img src={siteConfig.footerLogo} alt={siteConfig.name} width="181" height="49" style={{ height: "auto" }} />
                </Link>
                <div className="primary_text">
                  <p>A unified omnichannel commerce platform designed for innovation, efficiency, and scalable business growth.</p>
                </div>
              </div>
            </div>
            <div className="footer_right_col">
              <div className="foot_col" style={{ order: 21 }}>
                <h3 className="foot_title">Solutions</h3>
                <ul className="footer_link">
                  {nav.solutions.map((i) => (
                    <li key={i.href}>
                      <Link className="footer_item" href={i.href}>
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="foot_col" style={{ order: 30 }}>
                <h3 className="foot_title">Industries We Serve</h3>
                <ul className="footer_link">
                  {nav.industries.map((i) => (
                    <li key={i.href}>
                      <Link className="footer_item" href={i.href}>
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="foot_col" style={{ order: 36 }}>
                <h3 className="foot_title">Company</h3>
                <ul className="footer_link">
                  <li>
                    <Link className="footer_item" href="/about-us">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_item" href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_item" href="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot_col" style={{ order: 60 }}>
                <h3 className="foot_title">Legal</h3>
                <ul className="footer_link">
                  <li>
                    <Link className="footer_item" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_item" href="/terms-conditions">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="foot_col" style={{ order: 50 }}>
                <div>
                  <h3 className="foot_title">Contacts</h3>
                  <div className="footer_link">
                    <div className="footer_link_li">
                      <a href={"mailto:" + siteConfig.contactEmail}>{siteConfig.contactEmail}</a>
                    </div>
                    <div className="footer_add">
                      {siteConfig.offices.map((o) => (
                        <div className="footer_add_inner" key={o.name}>
                          <h4 className="foot_secondary_title">{o.name}</h4>
                          <a href="#" aria-disabled="true" tabIndex={-1}>{o.address}</a>
                          <a href={"tel:" + o.phone.replace(/[^\d+]/g, "")}>{o.phone}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="foot_col" style={{ order: 70 }}>
                <h3 className="foot_title">Follow Us</h3>
                <div className="social">
                  {siteConfig.social.map((s) => (
                    <div className="social-li" key={s.icon}>
                      <a className="icon_item" href={s.href} target="_blank" rel="nofollow noreferrer">
                        <img src={"/assets/" + s.icon} alt={s.label} style={{ width: "auto" }} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="main_container">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
