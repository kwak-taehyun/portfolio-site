import Link from "next/link";
import * as layout from "@/styles/layout.css";
import * as nf from "./not-found.css";

export default function NotFound() {
  return (
    <div className={`${layout.container} ${nf.wrap}`}>
      <h1 className={nf.title}>페이지를 찾을 수 없습니다</h1>
      <p className={nf.desc}>주소가 바뀌었거나 삭제된 페이지일 수 있습니다.</p>
      <Link href="/" className={nf.link}>
        홈으로
      </Link>
    </div>
  );
}
