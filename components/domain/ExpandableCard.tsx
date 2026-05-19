"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface ExpandableCardProps {
  title: string;
  summary: string;
  details?: string;
  stiffness?: number;
  damping?: number;
}

export function ExpandableCard({
  title,
  summary,
  details = "이 영역에는 카드의 상세 정보를 배치합니다. 클릭 시 부드럽게 펼쳐지며, 필요한 경우 이미지나 보조 액션도 함께 넣을 수 있습니다. 현재는 예시 텍스트만 사용하고 있습니다.",
  stiffness = 100,
  damping = 20,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition-shadow duration-200 hover:shadow-xl hover:shadow-slate-200/80">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full cursor-pointer items-start justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-slate-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <div className="space-y-2">
          <p className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </p>
          <p className="text-sm leading-6 text-slate-600">{summary}</p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness, damping }}
          className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            y: 0,
          },
          closed: {
            height: 0,
            opacity: 0,
            y: -6,
          },
        }}
        transition={{ type: "spring", stiffness, damping }}
        className="overflow-hidden border-t border-slate-200"
      >
        <div className="px-6 py-5 text-sm leading-7 text-slate-600">
          <p>{details}</p>
          <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-slate-500">
            추가 설명, 링크, 액션 버튼 등을 넣어 확장형 카드로 활용할 수
            있습니다.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
