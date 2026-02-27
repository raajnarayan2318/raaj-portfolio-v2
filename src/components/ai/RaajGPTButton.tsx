export default function RaajGPTButton() {
    return (
      <a
        href="https://chatgpt.com/g/g-69a1597261288191b2f83dc60690c242-norbel"
        target="_blank"
        rel="noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          group
        "
      >
        <div
          className="
            flex items-center gap-3
            rounded-full
            border border-white/15
            bg-black/70 backdrop-blur
            px-5 py-3
            text-sm font-medium text-white
            shadow-lg
            hover:bg-white/10 hover:border-white/25
            transition
          "
        >
          <span className="text-cyan-300">💬</span>
          <span className="hidden sm:inline">
            Chat with Norbel
          </span>
        </div>
      </a>
    );
  }