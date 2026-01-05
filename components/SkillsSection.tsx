
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  const categories: Record<string, string> = {
    'Frontend': '前端开发',
    'Backend': '后端开发',
    'DevOps': '运维部署',
    'Mobile': '移动端/小程序',
    'Crawler': '爬虫开发'
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">掌握的 <span className="text-indigo-600">核心技术</span></h2>
          <p className="text-slate-600 text-lg">全方位的技术栈，助力企业快速构建高质量产品</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl ${skill.color} group-hover:scale-110 transition-transform`}>
                  <i className={skill.icon}></i>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{categories[skill.category] || skill.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-sm font-medium text-slate-500">{skill.proficiency}% 掌握程度</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
