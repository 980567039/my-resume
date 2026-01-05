
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              {PERSONAL_INFO.name.charAt(0)}
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              {PERSONAL_INFO.name}
            </span>
          </a>
        </div>
        <div className="flex items-center gap-6 font-medium text-slate-600">
          <a href="#home" className="hover:text-indigo-600 transition-colors hidden md:inline-block">首页</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">关于我</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">技术栈</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">项目</a>
          <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200">
            联系我
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
