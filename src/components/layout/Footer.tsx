import SocialLink from '../common/SocialLink';
import { profile } from '../../data/profile';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#070B14]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">SUNHEE CHO</p>
          <p className="mt-1 text-sm text-zinc-500">
            Software Developer Portfolio
          </p>
        </div>

        <div className="flex gap-2">
          <SocialLink type="github" variant="iconOnly" href={profile.github} />
          <SocialLink
            type="email"
            variant="iconOnly"
            href={`mailto:${profile.email}`}
          />
        </div>

        <p className="text-sm text-zinc-600">
          © 2026 SUNHEE CHO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
