import { motion } from "motion/react";
import {
  Code2,
  FileJson,
  Palette,
  Globe,
  Zap,
  Layers,
  Server,
  Terminal,
  Database,
  GitBranch,
  Box,

  //   Github,
  //   Linkedin,
  //   Twitter,
  ExternalLink,
  Mail,
  Phone,
  Download,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  User,
  Briefcase,
  Wrench,
  Send,
  Sigma,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icons: Record<string, any> = {
  Code2,
  FileJson,
  Palette,
  Globe,
  Zap,
  Layers,
  Server,
  Terminal,
  Database,
  GitBranch,
  Box,
  Sigma,
  //   Github, Linkedin, Twitter,
  FaGithub,
  FaLinkedin,
  ExternalLink,
  Mail,
  Phone,
  Download,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  User,
  Briefcase,
  Wrench,
  Send,
};

export default function Icon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const LucideIcon = icons[name] || Code2;
  return <LucideIcon className={className} size={size} />;
}
