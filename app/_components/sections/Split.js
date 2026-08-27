import { Panel } from "@/app/_components/sections/Panel";

export function Split({ s }) {
  return (
    <div className="section_padding">
      <div className="main_container">
        <div className="inner_sec_top pos_tab_dtl active" style={{ display: "flex" }}>
          <Panel p={s} />
        </div>
      </div>
    </div>
  );
}
