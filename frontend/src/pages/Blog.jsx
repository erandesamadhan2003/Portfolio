import { useBlog } from "../hooks/useBlog";

function Blog() {
    const { blogs, loading, error, fetchBlogs } = useBlog();

    return (
        <main className="min-h-screen px-6 py-16 text-[#EAEAEA]">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-[#9B51E0] md:text-4xl">
                    Blog
                </h2>
                <p className="mt-3 text-[#cfcfcf]">
                    Developer notes, engineering learnings, and system design
                    write-ups.
                </p>

                {loading ? (
                    <p className="mt-8 text-[#cfcfcf]">Loading blogs...</p>
                ) : null}

                {error ? (
                    <div className="mt-8">
                        <p className="text-red-400">{error}</p>
                        <button
                            onClick={fetchBlogs}
                            className="mt-3 rounded-lg bg-[#7E3AF2] px-4 py-2 text-sm text-white hover:bg-[#9B51E0]"
                        >
                            Retry
                        </button>
                    </div>
                ) : null}

                {!loading && !error && blogs.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-[#7E3AF2]/30 bg-black/25 p-6 text-[#cfcfcf]">
                        No blog posts available yet.
                    </div>
                ) : null}

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog._id || blog.id || index}
                            className="rounded-2xl border border-[#7E3AF2]/30 bg-gradient-to-b from-[#14072b] to-[#0b0318] p-5 shadow-[0_0_20px_rgba(126,58,242,0.12)]"
                        >
                            <p className="text-xs text-[#cdb7ff]">
                                {blog.category || "Blog Post"}
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-[#f0eaff]">
                                {blog.title || "Untitled"}
                            </h3>
                            <p className="mt-3 line-clamp-5 text-sm leading-6 text-[#cfcfcf]">
                                {blog.description ||
                                    blog.content ||
                                    "No content available."}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Blog;
