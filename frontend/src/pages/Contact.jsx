import { useState } from "react";
import { useContact } from "../hooks/useContact";

function Contact() {
    const { loading, success, error, submitContact, resetContactState } =
        useContact();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (success || error) resetContactState();
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitContact(form);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen px-6 py-16 text-[#EAEAEA]">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-[#9B51E0] md:text-4xl">
                    Contact
                </h2>
                <p className="mt-3 max-w-2xl text-[#cfcfcf]">
                    Send a message for collaboration, projects, or engineering
                    discussions.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-[1fr_380px]">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-[#7E3AF2]/30 bg-black/25 p-6 shadow-[0_0_24px_rgba(126,58,242,0.16)]"
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm text-[#cdb7ff]">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-[#7E3AF2]/30 bg-[#14072b] px-4 py-3 outline-none focus:border-[#9B51E0]"
                                    placeholder="Samadhan Erande"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm text-[#cdb7ff]">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-[#7E3AF2]/30 bg-[#14072b] px-4 py-3 outline-none focus:border-[#9B51E0]"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="mb-2 block text-sm text-[#cdb7ff]">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={7}
                                className="w-full rounded-lg border border-[#7E3AF2]/30 bg-[#14072b] px-4 py-3 outline-none focus:border-[#9B51E0]"
                                placeholder="Write your message..."
                            />
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-lg bg-[#7E3AF2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9B51E0] disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {success ? (
                                <p className="text-sm text-green-400">
                                    Message sent successfully.
                                </p>
                            ) : null}

                            {error ? (
                                <p className="text-sm text-red-400">{error}</p>
                            ) : null}
                        </div>
                    </form>

                    <aside className="rounded-2xl border border-[#7E3AF2]/30 bg-black/25 p-6">
                        <h3 className="text-xl font-semibold text-[#cdb7ff]">
                            Contact Info
                        </h3>
                        <div className="mt-4 space-y-4 text-sm text-[#d7d7d7]">
                            <div>
                                <p className="text-[#9B51E0]">Email</p>
                                <p>erandesamadhan2003@gmail.com</p>
                            </div>
                            <div>
                                <p className="text-[#9B51E0]">Location</p>
                                <p>India</p>
                            </div>
                            <div>
                                <p className="text-[#9B51E0]">Terminal</p>
                                <p className="font-mono text-[#22c55e]">
                                    cd contact
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default Contact;
