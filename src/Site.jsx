import * as React from "react";

export default function Site() {
    const nav = [
        { href: "#about", label: "About" },
        { href: "#buffet", label: "Buffet" },
        { href: "#locations", label: "Locations" },
        { href: "#gallery", label: "Gallery" },
        { href: "#hours", label: "Hours" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-black text-neutral-100">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-neutral-800">
                <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
                    <a href="#top" className="font-semibold tracking-widest text-xl">NIKU • STYLE</a>
                    <nav className="hidden md:flex items-center gap-6">
                        {nav.map((n) => (
                            <a key={n.href} href={n.href} className="text-sm hover:text-neutral-300 transition-colors">
                                {n.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm border border-neutral-700 hover:shadow transition"
                        >
                            Reserve
                        </a>
                    </nav>
                    <details className="md:hidden">
                        <summary className="cursor-pointer rounded-xl border border-neutral-700 px-3 py-2 text-sm">Menu</summary>
                        <div className="absolute right-4 mt-2 w-56 rounded-xl border border-neutral-700 bg-black p-2 shadow-lg">
                            {nav.map((n) => (
                                <a key={n.href} href={n.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-800">
                                    {n.label}
                                </a>
                            ))}
                            <a href="#contact" className="block rounded-lg px-3 py-2 text-sm bg-neutral-100 text-black text-center">Reserve</a>
                        </div>
                    </details>
                </div>
            </header>

            {/* Hero */}
            <section id="top" className="relative">
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1606857521015-c6a5a76c3d56?q=80&w=2000&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 -z-10 bg-black/60" />
                <div className="mx-auto max-w-7xl px-4 py-32 text-white">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                            Unlimited A5 Wagyu and Luxury Seafood Buffet
                        </h1>
                        <p className="mt-4 text-lg md:text-xl opacity-90">
                            A modern dining experience with premium cuts, sushi, and seasonal seafood. No video, all flavor.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#buffet" className="rounded-2xl bg-white/95 text-black px-5 py-3 text-sm font-medium shadow">
                                Explore Menu
                            </a>
                            <a href="#contact" className="rounded-2xl border border-white/70 px-5 py-3 text-sm font-medium">
                                Book a Table
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="mx-auto max-w-7xl px-4 py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow">
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
                            alt="Elegant dining room"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold">Our Story</h2>
                        <p className="mt-4 text-neutral-300 leading-relaxed">
                            We bring together the richness of Japanese A5 Wagyu and the freshness of premium seafood in a refined all you can enjoy format. Every plate is prepared to highlight balance and craft.
                        </p>
                        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                            {[
                                { k: "+50", v: "Dishes" },
                                { k: "2", v: "Locations" },
                                { k: "120", v: "Minutes Service" },
                            ].map((i) => (
                                <div key={i.v} className="rounded-2xl border border-neutral-700 p-6">
                                    <div className="text-2xl font-semibold">{i.k}</div>
                                    <div className="text-xs uppercase tracking-widest text-neutral-400 mt-1">{i.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Buffet highlights */}
            <section id="buffet" className="bg-black">
                <div className="mx-auto max-w-7xl px-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-semibold">Buffet Highlights</h2>
                    <p className="mt-3 text-neutral-300 max-w-2xl">
                        Curated selections of steak, sushi, and seafood. Served with ceremony. Refilled with joy.
                    </p>
                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Fresh A5 Wagyu Steak",
                                img:
                                    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop",
                                desc: "Cuts seared to your preference with delicate marbling and deep savor.",
                            },
                            {
                                title: "Premium Oysters",
                                img:
                                    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1600&auto=format&fit=crop",
                                desc: "Freshly shucked oysters served on ice with citrus and sauces.",
                            },
                            {
                                title: "Sushi and Sashimi",
                                img:
                                    "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop",
                                desc: "Nigiri, maki, and seasonal selections prepared to order.",
                            },
                        ].map((c) => (
                            <article key={c.title} className="group overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-sm">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-semibold text-lg text-white">{c.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section id="locations" className="bg-neutral-900">
                <div className="mx-auto max-w-7xl px-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-semibold">Locations</h2>
                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        {[{
                            city: "Downtown LA",
                            address: ["900 Wilshire Blvd Ste 212", "Los Angeles, CA 90017"],
                            hours: ["Mon–Thu 5pm–11pm", "Fri 5pm–12am", "Sat 12pm–3pm, 4pm–12am", "Sun 12pm–3pm, 4pm–11pm"],
                            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
                        }, {
                            city: "New York",
                            address: ["21 W 35th St", "New York, NY 10001"],
                            hours: ["Mon–Thu 5pm–11pm", "Fri 5pm–12am", "Sat 4pm–12am", "Sun 4pm–11pm"],
                            img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop",
                        }].map((loc) => (
                            <div key={loc.city} className="overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-800 shadow-sm">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={loc.img} alt={`${loc.city} dining room`} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">{loc.city}</h3>
                                    <p className="mt-2 text-sm text-neutral-300">
                                        {loc.address.map((l, i) => (
                                            <span key={i} className="block">{l}</span>
                                        ))}
                                    </p>
                                    <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-neutral-300">
                                        {loc.hours.map((h) => (
                                            <li key={h} className="rounded-xl bg-neutral-900 px-3 py-2 border border-neutral-700">{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="mx-auto max-w-7xl px-4 py-20">
                <h2 className="text-3xl md:text-4xl font-semibold">Gallery</h2>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop",
                    ].map((src, i) => (
                        <img key={i} src={src} alt="Restaurant and dishes" className="h-40 md:h-56 w-full object-cover rounded-2xl" />
                    ))}
                </div>
            </section>

            {/* Hours and contact */}
            <section id="hours" className="bg-neutral-900">
                <div className="mx-auto max-w-7xl px-4 py-20">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold">Business Hours</h2>
                            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                                {[
                                    ["Monday", "5pm – 11pm"],
                                    ["Tuesday", "5pm – 11pm"],
                                    ["Wednesday", "5pm – 11pm"],
                                    ["Thursday", "5pm – 11pm"],
                                    ["Friday", "5pm – 12am"],
                                    ["Saturday", "12pm – 3pm | 4pm – 12am"],
                                    ["Sunday", "12pm – 3pm | 4pm – 11pm"],
                                ].map(([d, h]) => (
                                    <div key={d} className="flex items-center justify-between rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3">
                                        <span className="font-medium">{d}</span>
                                        <span className="text-neutral-300">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="contact">
                            <h2 className="text-3xl md:text-4xl font-semibold">Reserve or Inquire</h2>
                            <p className="mt-2 text-neutral-300">Send a request and the team will confirm by email.</p>
                            <form className="mt-6 grid gap-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input className="w-full rounded-xl border border-neutral-700 bg-black px-4 py-3" placeholder="Full name" />
                                    <input className="w-full rounded-xl border border-neutral-700 bg-black px-4 py-3" placeholder="Email" type="email" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input className="w-full rounded-xl border border-neutral-700 bg-black px-4 py-3" placeholder="Party size" type="number" min="1" />
                                    <input className="w-full rounded-xl border border-neutral-700 bg-black px-4 py-3" placeholder="Date" type="date" />
                                </div>
                                <textarea className="w-full rounded-xl border border-neutral-700 bg-black px-4 py-3" rows={4} placeholder="Notes"></textarea>
                                <button type="button" className="rounded-2xl bg-neutral-100 text-black px-6 py-3 text-sm font-medium">
                                    Submit Request
                                </button>
                                <p className="text-xs text-neutral-500">This demo form does not send email. Hook it up to your backend or a form service.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chat widget mount */}
            <ChatWidget />

            {/* Footer */}
            <footer className="border-t border-neutral-800 bg-black">
                <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
                    <div>
                        <div className="font-semibold tracking-widest">NIKU • STYLE</div>
                        <p className="mt-3 text-neutral-400">Premium steak and seafood experience. Built as a clean starting point, no video assets.</p>
                    </div>
                    <div>
                        <div className="font-medium">Links</div>
                        <ul className="mt-3 space-y-2">
                            {nav.map((n) => (
                                <li key={n.href}><a href={n.href} className="hover:text-neutral-300">{n.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium">Contact</div>
                        <ul className="mt-3 space-y-2 text-neutral-400">
                            <li>LA • 900 Wilshire Blvd Ste 212</li>
                            <li>NYC • 21 W 35th St</li>
                            <li>reservations@example.com</li>
                            <li>(555) 555-0199</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-medium">Newsletter</div>
                        <div className="mt-3 flex gap-2">
                            <input className="flex-1 rounded-xl border border-neutral-700 bg-black px-4 py-3" placeholder="Email address" />
                            <button className="rounded-xl border border-neutral-700 px-4 py-3">Join</button>
                        </div>
                        <p className="mt-2 text-xs text-neutral-500">By subscribing you agree to our updates. Unsubscribe anytime.</p>
                    </div>
                </div>
                <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Niku‑Style Demo</div>
            </footer>
        </div>
    );
}

function ChatWidget() {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState([
        { role: "assistant", content: "Hi. I can answer questions about hours, locations, menu, and reservations." },
    ]);
    const listRef = React.useRef(null);
    const API = import.meta.env.VITE_API_URL || "http://localhost:8787";

    React.useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, open]);

    async function send() {
        const text = input.trim();
        if (!text) return;
        setInput("");
        const next = [...messages, { role: "user", content: text }];
        setMessages(next);
        try {
            const res = await fetch(`${API}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });
            const data = await res.json();
            const replyText = typeof data.reply === "string" ? data.reply : data.reply?.content || "";
            setMessages((m) => [...m, { role: "assistant", content: replyText }]);
        } catch (e) {
            setMessages((m) => [
                ...m,
                { role: "assistant", content: "I could not reach the chat server. Check that the backend is running on /api/chat." },
            ]);
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 text-sm font-medium bg-neutral-100 text-black shadow-lg border border-neutral-700"
            >
                {open ? "Close chat" : "Chat with us"}
            </button>

            {open && (
                <div className="fixed bottom-20 right-5 z-50 w-[360px] max-w-[90vw] rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-100 shadow-2xl">
                    <div className="p-3 border-b border-neutral-800 text-sm">Restaurant Assistant</div>
                    <div ref={listRef} className="h-80 overflow-y-auto p-3 space-y-3">
                        {messages.map((m, i) => (
                            <div key={i} className={m.role === "user" ? "text-right" : ""}>
                                <div
                                    className={
                                        "inline-block rounded-2xl px-3 py-2 text-sm " +
                                        (m.role === "user" ? "bg-neutral-800" : "bg-black border border-neutral-700")
                                    }
                                >
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-neutral-800 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                            placeholder="Type a message…"
                            className="flex-1 bg-black rounded-xl border border-neutral-700 px-3 py-2 text-sm outline-none"
                        />
                        <button onClick={send} className="rounded-xl border border-neutral-700 px-3 py-2 text-sm">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
