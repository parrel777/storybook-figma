export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-subtle)] p-[calc(var(--dimension-lg))]">
      <main className="mx-auto max-w-[800px] rounded-[var(--card-border-radius)] bg-[var(--bg-default)] p-[calc(var(--card-padding))] shadow-md">
        <h1 className="mb-[calc(var(--spacing-md))] text-3xl font-bold text-[var(--fg-default)]">
          Design Tokens Test Page
        </h1>

        <p className="mb-[calc(var(--spacing-lg))] text-[var(--fg-muted)]">
          이 페이지는 tokens.css에 정의된 CSS 변수를 테스트하기 위한
          페이지입니다.
        </p>

        <section className="mb-[calc(var(--spacing-xl))]">
          <h2 className="mb-[calc(var(--spacing-sm))] text-xl font-semibold text-[var(--accent-default)]">
            Sizing Tokens
          </h2>
          <div className="flex items-end gap-[calc(var(--spacing-sm))]">
            <div className="flex h-[var(--sizing-sm)] w-[var(--sizing-sm)] items-center justify-center bg-[var(--colors-blue-300)]">
              SM
            </div>
            <div className="flex h-[var(--sizing-md)] w-[var(--sizing-md)] items-center justify-center bg-[var(--colors-blue-400)]">
              MD
            </div>
            <div className="flex h-[var(--sizing-lg)] w-[var(--sizing-lg)] items-center justify-center bg-[var(--colors-blue-500)] text-white">
              LG
            </div>
            <div className="flex h-[var(--sizing-xl)] w-[var(--sizing-xl)] items-center justify-center bg-[var(--colors-blue-600)] text-white">
              XL
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-[calc(var(--spacing-sm))] text-xl font-semibold text-[var(--fg-subtle)]">
            Button Token Test
          </h2>
          <button className="cursor-pointer rounded-[var(--button-border-radius)] border-none bg-[var(--button-primary-background)] px-[calc(var(--spacing-md))] py-[calc(var(--spacing-sm))] font-bold text-[var(--button-primary-text)] transition-opacity hover:opacity-90">
            Primary Button
          </button>
        </section>
      </main>
    </div>
  );
}
