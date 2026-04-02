import Icon from './Icon';
import { SOCIALS } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold text-primary">
            Dev<span className="text-neutral-900">Portfolio</span>
          </a>
          <p className="text-neutral-500 mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <a 
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary hover:border-primary transition-all"
              title={social.platform}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>

        <div className="text-sm text-neutral-500">
          Designed & Built with ❤️
        </div>
      </div>
    </footer>
  );
}
