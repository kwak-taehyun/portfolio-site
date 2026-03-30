"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import * as filterStyles from "./ProjectFilters.css";
import * as layoutStyles from "@/styles/layout.css";

type Props = { projects: Project[] };

export function ProjectFilters({ projects }: Props) {
  const [type, setType] = useState<string>("all");
  const [stack, setStack] = useState<string>("all");
  const [year, setYear] = useState<string>("all");

  const typeOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.types.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const stackOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [projects]);

  const yearOptions = useMemo(() => {
    const set = new Set(projects.map((p) => String(p.year)));
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const typeOk =
        type === "all" || p.types.includes(type);
      const stackOk =
        stack === "all" || p.stack.includes(stack);
      const yearOk = year === "all" || String(p.year) === year;
      return typeOk && stackOk && yearOk;
    });
  }, [projects, type, stack, year]);

  const reset = () => {
    setType("all");
    setStack("all");
    setYear("all");
  };

  return (
    <>
      <div className={filterStyles.bar}>
        <div className={filterStyles.group}>
          <span id="filter-type" className={filterStyles.label}>
            업무 유형
          </span>
          <select
            className={filterStyles.select}
            aria-labelledby="filter-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">전체</option>
            {typeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className={filterStyles.group}>
          <span id="filter-stack" className={filterStyles.label}>
            기술 스택
          </span>
          <select
            className={filterStyles.select}
            aria-labelledby="filter-stack"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          >
            <option value="all">전체</option>
            {stackOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className={filterStyles.group}>
          <span id="filter-year" className={filterStyles.label}>
            연도
          </span>
          <select
            className={filterStyles.select}
            aria-labelledby="filter-year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="all">전체</option>
            {yearOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className={filterStyles.reset} onClick={reset}>
          필터 초기화
        </button>
      </div>

      <div className={layoutStyles.grid12}>
        {filtered.length === 0 ? (
          <p className={`${filterStyles.empty} ${layoutStyles.spanFull}`}>
            조건에 맞는 프로젝트가 없습니다.
          </p>
        ) : (
          filtered.map((p) => (
            <div key={p.slug} className={layoutStyles.span4}>
              <ProjectCard project={p} />
            </div>
          ))
        )}
      </div>
    </>
  );
}
