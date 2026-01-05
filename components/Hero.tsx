
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm">
            欢迎来到我的数字世界
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            打造 <span className="gradient-text">高可用</span> <br />
            全栈解决方案。
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
              onClick={handleDownloadPDF}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl shadow-slate-200"
            >
              <i className="fa-solid fa-file-pdf"></i> 导出 PDF 简历
            </button>
            <a href="#about" className="glass px-10 py-4 rounded-2xl font-bold hover:bg-white transition-all flex items-center gap-2">
              了解更多关于我
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float">
            <img 
              src="https://picsum.photos/seed/dev-portrait/600/600" 
              alt="开发者头像" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* 装饰元素 */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
