"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">W</span>
            </div>
            <span className="font-bold text-text-primary">WealthAgent</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-text-secondary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text-secondary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-text-secondary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} WealthAgent. All rights reserved.
          </p>
        </div>

        <p className="text-xs text-text-muted/50 text-center mt-8 max-w-2xl mx-auto">
          WealthAgent provides AI-powered portfolio management tools and is not
          a registered investment advisor. Past performance does not guarantee
          future results. All investments carry risk, including loss of
          principal. Please consult a qualified financial advisor for
          personalized advice.
        </p>
      </div>
    </footer>
  );
}
