"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi! I'm Ejie's AI assistant. Ask me anything about his work, skills, or projects! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const history = updatedMessages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text: `You are a helpful assistant for Ejie Daguplo's portfolio website.
You help visitors learn about Ejie's skills, projects, background, and experience.
Be friendly, concise, and professional. Keep responses short and well-structured.
Use simple markdown only when needed (bold for emphasis, short bullet lists).
Avoid long walls of text. If asked something unrelated to Ejie or his work,
politely redirect the conversation back to the portfolio.

--- ABOUT EJIE ---
Full Name: Ejie Daguplo
Degree: Bachelor of Science in Computer Science (graduating)
University: Bohol Island State University – Clarin Campus (2021–Present)
Location: Bunga Ilaya, Jagna, Bohol, 6308
Email: ejiedaguplo22@gmail.com
Phone: 09462334179
GitHub: https://github.com/EjieDaguplo
Portfolio: https://my-porfolio-gammamurex.vercel.app/

--- TECH SKILLS ---
- Frontend/Web: React, Next.js, TypeScript, JavaScript, PHP, HTML, CSS, Tailwind CSS
- Backend: Express.js, RESTful APIs, Prisma
- Mobile: Kotlin, Jetpack Compose (Native Android)
- AI & ML: Machine Learning, Deep Learning, AI integration
- Automation: AI workflow automation using N8N
- Databases: MySQL, Firebase, Supabase
- Languages: Python, Java, C, PHP

--- SOFT SKILLS ---
Strong problem-solving ability, adaptability, willingness to learn, detail-oriented,
highly motivated, passionate about building impactful technology solutions.

--- WORK / OJT EXPERIENCE ---
Internship at The Generics Pharmacy – Gendrugs Inc.:
- Designed and implemented a Sales Monitoring Web Application actively used by the
  Accounting Department to track and visualize daily sales across multiple branches
  in Bohol and nearby provinces, improving efficiency in reporting and decision-making.

--- PROJECTS ---
Web Applications:
- Diabetes Prediction Web App: Machine learning-powered health risk assessment application
  for accurate diabetes prediction.
- Sales Monitoring Web App (OJT): Real-time sales tracking across all Bohol branches for
  Gendrugs Inc., now actively used by the Accounting Department.

Mobile Applications:
- Student Grade Evaluation App: Grade evaluation with resource recommendations.
- Bohol InstaRecipe: Mobile recipe app featuring Boholano dishes.
- Stress-Relief Drawing App: Creative relaxation app.
- InsuredRiceScan: Insurance claim management system with image-based claim verification,
  geolocation tagging, and rice disease detection (web and mobile).
- YakapApp: Mobile app with User, Provider, and Admin roles for managing appointments
  and scheduling.

--- EDUCATION ---
- BS in Computer Science – BISU Clarin Campus (2021–Present)
- Humanities and Social Sciences – Jagna High School (2014–2020)
- Elementary – Candulao Elementary School, Garcia-Hernandez, Bohol (2008–2014)`,
                },
              ],
            },
            contents: history,
          }),
        },
      );

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't get a response. Please try again!";

      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Oops! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  // Add this at the top of your component, after the other useState hooks
  const messages_cycle = [
    "Want to know more? 🤔",
    "Ask me about Ejie 👋",
    "Feel free to ask me! 😊",
  ];
  const [cycleIndex, setCycleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      // Slide out
      setVisible(false);
      setTimeout(() => {
        setCycleIndex((prev) => (prev + 1) % messages_cycle.length);
        // Slide in
        setVisible(true);
      }, 400); // matches transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Cycling Label */}
        {!isOpen && (
          <div
            style={{
              transform: visible ? "translateX(0)" : "translateX(20px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
            className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-full border border-purple-400/40 shadow-lg shadow-purple-500/20 whitespace-nowrap"
          >
            {messages_cycle[cycleIndex]}
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform duration-200 focus:outline-none shrink-0"
          aria-label="Open chat"
        >
          <Image
            src="/MyFace.jpg"
            alt="Chat with Ejie's AI"
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 border-b border-white/10">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-400/50">
              <Image
                src="/MyFace.jpg"
                alt="Ejie AI"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Ejie's Assistant
              </p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Online
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-gray-400 hover:text-white transition-colors text-lg leading-none"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[50rem]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "model" && (
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2 shrink-0 self-end border border-purple-400/40">
                    <Image
                      src="/MyFace.jpg"
                      alt="AI"
                      width={24}
                      height={24}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-purple-600 text-white rounded-br-sm"
                      : "bg-gray-700 text-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.role === "user" ? (
                    msg.text
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-1 last:mb-0">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-0.5 my-1">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-0.5 my-1">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-gray-100">{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-white">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-gray-300">{children}</em>
                        ),
                        code: ({ children }) => (
                          <code className="bg-gray-800 text-purple-300 px-1 py-0.5 rounded text-xs font-mono">
                            {children}
                          </code>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 underline hover:text-purple-300"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-purple-400/40">
                  <Image
                    src="/MyFace.jpg"
                    alt="AI"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-2xl rounded-bl-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-white/10 bg-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-700 text-white text-sm rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-purple-400"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white px-3 py-2 rounded-xl transition-colors text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
