const Contact = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="seconderyHeading">Let&apos;s talk!</h2>
                    <div className="profileDescription">
                        Vivamus in nisl metus? Phasellus.
                    </div>
                </div>
            </div>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">
                        Full name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder=""
                        className="w-full p-3 rounded bg-light-card dark:bg-dark-card"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-3 rounded bg-light-card dark:bg-dark-card"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="3"
                        className="w-full p-3 rounded bg-light-card dark:bg-dark-card"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-light-bg text-light-text dark:bg-dark-button dark:text-dark-text"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
