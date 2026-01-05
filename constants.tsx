
import { Skill, Project } from './types';

export interface EnhancedProject extends Project {
  highlights: string[];
}

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'fa-brands fa-react', category: 'Frontend', proficiency: 95, color: 'text-blue-500' },
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', category: 'Frontend', proficiency: 90, color: 'text-emerald-500' },
  { name: 'Next.js', icon: 'fa-solid fa-n', category: 'Frontend', proficiency: 95, color: 'text-black' },
  { name: 'Taro', icon: 'fa-solid fa-layer-group', category: 'Mobile', proficiency: 85, color: 'text-red-500' },
  { name: 'Python', icon: 'fa-brands fa-python', category: 'Backend', proficiency: 80, color: 'text-yellow-600' },
  { name: 'Nginx', icon: 'fa-solid fa-server', category: 'DevOps', proficiency: 75, color: 'text-green-600' },
  { name: 'Linux', icon: 'fa-brands fa-linux', category: 'DevOps', proficiency: 80, color: 'text-slate-700' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', category: 'Frontend', proficiency: 90, color: 'text-blue-600' },
];

export const PROJECTS: EnhancedProject[] = [
  {
    title: '企业级 ERP 管理系统',
    description: '针对内部业务流程定制的大型资源管理平台，处理高并发数据请求与复杂的审批流。',
    highlights: ['主导前端架构从 Vue 2 到 Vue 3 的平滑迁移', '利用 Nginx 反向代理解决跨域及负载均衡问题', '优化大规模数据表格的渲染性能，提升 60% 加载速度'],
    tags: ['Vue 3', 'TypeScript', 'Nginx', 'Element Plus'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '跨平台移动协同工具',
    description: '基于 Taro 开发的内部办公协同小程序，打通了企业微信与自有 OA 系统。',
    highlights: ['实现一套代码同时发布为 H5 和微信小程序', '集成自研的离线缓存方案，确保弱网环境下表单不丢失', '接入 Python 后端实现的高性能消息推送服务'],
    tags: ['Taro', 'React', 'Python', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '自动化部署与监控中台',
    description: '内部 DevOps 工具链，集成项目构建、容器化部署及服务器指标实时监控。',
    highlights: ['基于 Linux Shell 和 Python 脚本实现自动化发布流程', '使用 Next.js 构建可视化监控看板', '配置 Nginx 日志分析系统，实现故障快速定界'],
    tags: ['Next.js', 'Linux', 'Python', 'Nginx'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda546697c?q=80&w=800&auto=format&fit=crop',
  },
];

export const PERSONAL_INFO = {
  name: "张伟 (Alex)",
  title: "资深全栈工程师",
  bio: "拥有 6 年以上全栈开发经验，热衷于构建高效且美观的数字产品。擅长使用 React/Next.js 构建可扩展的前端架构，并使用 Python 开发稳健的后端服务。熟练掌握 Linux 系统管理、Nginx 配置及云原生部署。",
  aboutMeLong: "作为一名长期深耕于全栈领域的开发者，我一直秉持着“技术服务于业务，审美驱动体验”的原则。在职业生涯中，我从简单的界面交互开发逐步成长为能够负责整个系统架构的全栈工程师。我享受在 Linux 控制台中调试 Nginx 配置的逻辑感，也热爱在 React 组件中打磨交互动效的细腻感。我不仅追求代码的简洁与高效，更关注产品在实际业务环境中的稳定表现。我相信，一个优秀的全栈工程师应该像一座桥梁，连接起复杂的后端逻辑与极致的用户体验。",
  keywords: ["逻辑思维", "极致审美", "解决问题", "持续学习", "敏捷交付"],
  email: "alex.zhang@example.com",
  github: "github.com/alexzhang",
  linkedin: "linkedin.com/in/alexzhang",
};
