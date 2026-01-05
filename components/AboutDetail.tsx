
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const AboutDetail: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* 装饰背景文本 */}
      <div className="absolute top-10 left-10 text-9xl font-black text-slate-50 select-none -z-0 pointer-events-none">
        ABOUT ME
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-8">
              探索我的 <br />
              <span className="text-indigo-600">技术哲学</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {PERSONAL_INFO.keywords.map((word, i) => (
                <span key={i} className="px-5 py-2 bg-slate-100 rounded-2xl text-slate-600 font-bold text-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-default">
                  #{word}
                </span>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <span className="font-bold text-indigo-900">核心信念</span>
              </div>
              <p className="text-indigo-800/80 font-medium italic leading-relaxed">
                “代码不只是逻辑的堆砌，更是解决真实世界问题的艺术。我追求的不仅是功能的实现，更是架构的优雅与体验的纯粹。”
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-6">
            <p className="text-2xl text-slate-800 font-medium leading-relaxed">
              {PERSONAL_INFO.aboutMeLong}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">创新思维</h4>
                  <p className="text-sm text-slate-500">善于从技术社区吸收前沿方案，并将其落地到实际业务中。</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">团队协作</h4>
                  <p className="text-sm text-slate-500">拥有丰富的跨职能沟通经验，擅长在团队中发挥技术影响力。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
