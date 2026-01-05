
import React from 'react';
import { PROJECTS, EnhancedProject } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">核心 <span className="text-indigo-600">项目经历</span></h2>
          <p className="text-slate-600 text-lg">在企业内网环境下主导或参与的核心业务系统</p>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project: EnhancedProject, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
            >
              {/* 项目图片/视觉呈现 */}
              <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className={`backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${project.projectType === 'Personal'
                    ? 'bg-indigo-600/90 text-white'
                    : project.projectType === 'Commercial'
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-white/90 text-indigo-600'
                    }`}>
                    {project.projectType === 'Personal' ? '个人项目' :
                      project.projectType === 'Commercial' ? '商业项目' : '内部系统'}
                  </span>
                </div>
              </div>

              {/* 项目详情 */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group/link"
                      >
                        访问在线站点
                        <i className="fa-solid fa-arrow-up-right-from-square text-sm group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"></i>
                      </a>
                    </div>
                  )}
                </div>

                {/* 技术亮点 - 内部项目的核心展示区 */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-slate-200"></span> 核心技术贡献
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((item, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-slate-700">
                        <i className="fa-solid fa-circle-check text-indigo-500 mt-1"></i>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 底部技术标签 */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-3">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-indigo-50 text-indigo-700 text-xs font-bold px-4 py-2 rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium">
            * 由于部分项目涉及企业保密协议，更多技术细节欢迎在线咨询或面试探讨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
