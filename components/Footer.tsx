
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold">让我们一起 <br /><span className="text-indigo-400">创造卓越价值。</span></h2>
            <p className="text-slate-400 text-lg">
              我随时欢迎新的合作机会或关于技术的深度探讨。
            </p>
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-2xl font-medium hover:text-indigo-400 transition-colors">
                <i className="fa-solid fa-envelope"></i> {PERSONAL_INFO.email}
              </a>
              <div className="flex gap-6 pt-4">
                <a href={`https://${PERSONAL_INFO.github}`} target="_blank" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-xl">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all text-xl">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-3xl p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">您的姓名</label>
              <input type="text" className="w-full bg-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-indigo-500" placeholder="王小明" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">您的邮箱</label>
              <input type="email" className="w-full bg-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-indigo-500" placeholder="ming@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">留言内容</label>
              <textarea rows={4} className="w-full bg-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-indigo-500" placeholder="请描述您的合作需求或咨询内容..."></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/50">
              发送留言
            </button>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 {PERSONAL_INFO.name}. 版权所有。</p>
          <p>基于 Next.js, Tailwind 和 Gemini AI 构建</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
