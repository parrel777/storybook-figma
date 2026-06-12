"use client";

export default function TokenSystemPage() {
  return (
    // 배경색: --bg-muted, 글자색: --fg-default 원본 토큰 그대로 적용
    <div className="min-h-screen bg-[var(--bg-muted)] p-8 text-[var(--fg-default)]">
      {/* 상단 헤더 영역 */}
      <header className="mx-auto mb-12 max-w-4xl text-center">
        {/* 폰트 패밀리(--font-families-inter) 적용, 크기는 Tailwind(text-5xl)와 조합 */}
        <h1 className="mb-4 text-5xl font-[var(--font-families-inter)] font-bold tracking-[-5%]">
          Design System{" "}
          <span className="text-[var(--accent-default)]">Showcase</span>
        </h1>
        <p className="text-lg text-[var(--fg-muted)]">
          제공해주신 <code>tokens.css</code> 원본 변수와 Tailwind CSS만을
          조합하여 제작한 페이지입니다.
        </p>
      </header>

      {/* 메인 레이아웃 (카드 그리드) */}
      <main className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* 카드 1: UI 컴포넌트 예시 */}
        <div
          // 배경색: --card-background, 테두리: --bg-subtle 원본 토큰 매핑
          // 단위가 없는 수치 토큰은 Tailwind의 임의 값 구문 내에서 _px를 붙여 처리합니다.
          className="flex flex-col justify-between border border-[var(--bg-subtle)] bg-[var(--bg-default)] shadow-md"
          style={{
            padding: "calc(var(--card-padding) * 1px)",
            borderRadius: "calc(var(--card-border-radius) * 1px)",
          }}
        >
          <div>
            <h2 className="mb-2 text-2xl font-[var(--font-families-inter)] font-bold">
              Interactive Card
            </h2>
            <p className="mb-6 text-sm text-[var(--fg-muted)]">
              이 카드의 배경색, 패딩, 라운딩 값은 Figma에서 전달된 디자인 토큰
              원본 변수를 실시간으로 참조하고 있습니다.
            </p>
          </div>

          <div className="flex gap-4">
            {/* Primary 버튼 (원본 토큰 적용) */}
            <button
              className="flex-1 px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--button-primary-background)",
                color: "var(--button-primary-text)",
                borderRadius: "calc(var(--button-border-radius) * 1px)",
              }}
            >
              Primary Action
            </button>

            {/* Secondary 버튼 (원본 토큰 적용) */}
            <button
              className="bg-[var(--accent-bg)] px-6 py-3 text-sm font-medium text-[var(--fg-default)] transition-colors hover:opacity-80"
              style={{
                borderRadius: "calc(var(--button-border-radius) * 1px)",
              }}
            >
              Secondary
            </button>
          </div>
        </div>

        {/* 카드 2: 시스템 팔레트 시각화 모니터 */}
        <div
          className="border border-[var(--bg-subtle)] bg-[var(--bg-default)] shadow-md"
          style={{
            padding: "calc(var(--card-padding) * 1px)",
            borderRadius: "calc(var(--card-border-radius) * 1px)",
          }}
        >
          <h2 className="mb-4 text-2xl font-[var(--font-families-inter)] font-bold">
            Color Palette
          </h2>
          <div className="space-y-3">
            {/* Accent Color */}
            <div className="flex items-center gap-3 rounded bg-[var(--bg-muted)] p-2">
              <div className="h-8 w-8 rounded border border-[var(--bg-subtle)] bg-[var(--accent-default)]" />
              <div>
                <p className="text-xs font-semibold text-[var(--fg-muted)]">
                  --accent-default
                </p>
                <p className="font-mono text-sm text-[var(--fg-default)]">
                  #7f9cf5
                </p>
              </div>
            </div>

            {/* Muted Text Color */}
            <div className="flex items-center gap-3 rounded bg-[var(--bg-muted)] p-2">
              <div className="h-8 w-8 rounded bg-[var(--fg-muted)]" />
              <div>
                <p className="text-xs font-semibold text-[var(--fg-muted)]">
                  --fg-muted
                </p>
                <p className="font-mono text-sm text-[var(--fg-default)]">
                  #4a5568
                </p>
              </div>
            </div>

            {/* Background Subtle */}
            <div className="flex items-center gap-3 rounded bg-[var(--bg-muted)] p-2">
              <div className="h-8 w-8 rounded border border-[var(--bg-subtle)] bg-[var(--bg-subtle)]" />
              <div>
                <p className="text-xs font-semibold text-[var(--fg-muted)]">
                  --bg-subtle
                </p>
                <p className="font-mono text-sm text-[var(--fg-default)]">
                  #edf2f7
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 푸터 */}
      <footer className="mx-auto mt-16 max-w-4xl border-t border-[var(--bg-subtle)] pt-6 text-center text-xs text-[var(--fg-subtle)]">
        &copy; {new Date().getFullYear()} Design Token System Page. Powered by
        Style Dictionary.
      </footer>
    </div>
  );
}
