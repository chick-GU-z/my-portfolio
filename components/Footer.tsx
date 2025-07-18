export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border pattern-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}