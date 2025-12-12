
import React from 'react';

export function WaitlistCTA() {
    return (
        <section className="py-24 bg-private-bg-light dark:bg-private-bg-dark border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white mb-6">Ready to accelerate your progress?</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                    Slots for private mentorship are limited each semester. Join our waitlist to get notified when new slots open up.
                </p>
                <form className="max-w-md mx-auto mb-8 flex flex-col sm:flex-row gap-2">
                    <input className="flex-grow px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-private-surface-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="Enter your email address" type="email" />
                    <button className="bg-private-primary hover:bg-private-primary-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg whitespace-nowrap" type="submit">
                        Join Waitlist
                    </button>
                </form>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    By signing up, you agree to our <a className="underline hover:text-private-primary dark:hover:text-white" href="#">Terms of Service</a> and <a className="underline hover:text-private-primary dark:hover:text-white" href="#">Privacy Policy</a>.
                </p>
            </div>
        </section>
    );
}
