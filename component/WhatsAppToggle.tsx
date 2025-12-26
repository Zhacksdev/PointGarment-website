"use client";

import { useEffect, useRef, useState } from "react";
import { X, Phone } from "lucide-react";

type Message = {
  id: string;
  text: string;
  from: "user" | "support";
};

const WA_PHONE = "6285648102433";

export default function WhatsAppToggle() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", text: "Halo! Ada yang bisa kami bantu?", from: "support" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [open, messages]);

  function sendToWhatsApp(text: string) {
    if (!text) return;
    const encoded = encodeURIComponent(text);
    const url = WA_PHONE
      ? `https://wa.me/${WA_PHONE}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;
    window.open(url, "_blank");
  }

  function handleSend() {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      from: "user",
    };
    setMessages((m) => [...m, userMsg]);

    // simulate posting to WA: open WhatsApp web with prefilled message
    sendToWhatsApp(input.trim());

    setInput("");

    // optional: simulate support acknowledgment
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now().toString() + "-r", text: "Pesan dikirim ke WhatsApp.", from: "support" },
      ]);
    }, 700);
  }

  return (
    <div>
      {/* Floating button */}
      <div className="fixed right-4 bottom-6 z-50">
        <div className="flex flex-col items-end gap-3">
          {/* Chat box */}
          <div
            className={`w-80 md:w-28rem bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden transform transition-all origin-bottom-right ${
              open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            }`}
            aria-hidden={!open}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                <div className="text-gray-900 font-semibold">Chat via WhatsApp</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={listRef} className="max-h-60 overflow-y-auto px-4 py-3 space-y-3 bg-white">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded-md max-w-[80%] text-sm ${msg.from === "user" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                    {msg.text}
                  </div> 
                </div>
              ))}
            </div>

            <div className="px-3 py-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  className="flex-1 bg-gray-100 text-sm outline-none placeholder:text-gray-500 text-gray-900 px-2 py-1 rounded-md"
                  placeholder="Tulis pesan..."
                  aria-label="Tulis pesan"
                />
                <button
                  onClick={handleSend}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                  aria-label="Kirim pesan"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>

          {/* Floating primary button */}
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-green-600 opacity-60 pulse-scale" aria-hidden="true" />
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Open WhatsApp chat"
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg transform-gpu hover:scale-105 transition-transform"
              title="Hubungi via WhatsApp"
            >
              <Phone className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: full width modal when open */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      <style>{`@keyframes pulseScale { 0% { transform: scale(1); opacity: 0.95; } 50% { transform: scale(1.14); opacity: 0.85; } 100% { transform: scale(1); opacity: 0.95; } }
      .pulse-scale { animation: pulseScale 1.6s ease-in-out infinite; transform-origin: center; filter: blur(8px); }
      `}</style>
    </div>
  );
}
