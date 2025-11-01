import { Mail, Phone, Linkedin, Github, Youtube } from 'lucide-react';

export const contactData = {
  email: {
    value: '6868shivamkumarmaurya@gmail.com',
    href: 'mailto:6868shivamkumarmaurya@gmail.com',
    icon: Mail,
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-600/20',
    borderColor: 'hover:border-blue-500',
    shadowColor: 'hover:shadow-blue-500/30',
    label: 'Email'
  },
  phone: {
    value: '+91 7394836868',
    href: 'https://wa.me/917394836868',
    icon: Phone,
    iconColor: 'text-green-400',
    bgColor: 'bg-green-600/20',
    borderColor: 'hover:border-green-500',
    shadowColor: 'hover:shadow-green-500/30',
    label: 'Phone / WhatsApp'
  },
  linkedin: {
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/shivamkrmaurya/',
    icon: Linkedin,
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-600/20',
    borderColor: 'hover:border-blue-500',
    shadowColor: 'hover:shadow-blue-500/30',
    label: 'LinkedIn'
  }
};

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/shivamkrmaurya/',
    icon: Linkedin,
    label: 'LinkedIn',
    className: 'hover:bg-blue-600'
  },
  {
    href: 'https://github.com/1Coder-Shivam',
    icon: Github,
    label: 'GitHub',
    className: 'hover:bg-purple-600'
  },
  {
    href: 'https://www.youtube.com/@ShivamKrMaurya',
    icon: Youtube,
    label: 'YouTube',
    className: 'hover:bg-red-600'
  },
  {
    href: 'https://www.geeksforgeeks.org/user/6868shivamkumarmaurya/',
    label: 'GeeksforGeeks',
    text: 'GFG',
    className: 'hover:bg-green-600',
    textColor: 'text-green-400'
  },
  {
    href: 'https://leetcode.com/1Coder_skm/',
    label: 'LeetCode',
    text: 'LC',
    className: 'hover:bg-orange-600',
    textColor: 'text-orange-400'
  }
];

