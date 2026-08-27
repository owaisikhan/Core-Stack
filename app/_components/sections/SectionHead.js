export function SectionHead({ sub, title, text }) {
  if (!title && !text) return null;
  return (
    <div className="section_head">
      <div className="sub_title">{sub || ""}</div>
      {title ? <h2 className="primary_title">{title}</h2> : null}
      {text ? <p className="primary_text">{text}</p> : null}
    </div>
  );
}
