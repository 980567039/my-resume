
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDetail from './components/AboutDetail';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutDetail />
        
        {/* 数据统计部分 */}
        <section className="bg-slate-50 py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">6+</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">年实战经验</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">交付项目</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">掌握技术栈</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">客户满意度</div>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        
        {/* 工作流程部分 */}
        <section className="py-20 bg-indigo-600 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-extrabold">标准化的开发流程 <br /> <span className="opacity-70">确保交付质量。</span></h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg">需求分析与规划</h4>
                    <p className="text-indigo-100">深入理解业务需求，制定最优的技术架构与交付计划。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg">全栈敏捷开发</h4>
                    <p className="text-indigo-100">使用 React/Next.js 及 Python 高效编写高质量、可维护的代码。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg">性能优化与部署</h4>
                    <p className="text-indigo-100">全方位的性能压测、Nginx 配置优化及云端自动化部署。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="glass border-white/30 p-4 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/code/600/400" 
                  alt="工作流程" 
                  className="rounded-2xl w-full shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-pink-500 p-6 rounded-2xl shadow-xl hidden lg:block -rotate-6 animate-pulse">
                <p className="font-bold text-white">Top 1% 全栈人才</p>
              </div>
            </div>
          </div>
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </section>
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;
