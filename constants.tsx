
import { Skill, Project } from './types';

export interface EnhancedProject extends Project {
  highlights: string[];
}

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', icon: 'fa-brands fa-react', category: 'Frontend', proficiency: 95, color: 'text-blue-500' },
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', category: 'Frontend', proficiency: 95, color: 'text-emerald-500' },
  { name: 'UniApp/Taro', icon: 'fa-solid fa-mobile-screen', category: 'Mobile', proficiency: 90, color: 'text-purple-600' },
  { name: 'Python/Scrapy', icon: 'fa-brands fa-python', category: 'Crawler', proficiency: 85, color: 'text-yellow-600' },
  { name: 'MySQL/MongoDB', icon: 'fa-solid fa-database', category: 'Backend', proficiency: 80, color: 'text-slate-600' },
  { name: 'Nginx/Linux', icon: 'fa-solid fa-server', category: 'DevOps', proficiency: 80, color: 'text-green-600' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', category: 'DevOps', proficiency: 90, color: 'text-orange-600' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', category: 'Frontend', proficiency: 90, color: 'text-blue-600' },
];

export const PROJECTS: EnhancedProject[] = [
  {
    title: '汽车业务综合管理平台',
    description: '负责“懂车拍”图片采集质检平台与“懂车抓”爬虫任务管理平台的前端开发。',
    highlights: [
      '懂车拍：实现任务派发、接单、图片并发上传及在线审核功能的前端交互',
      '懂车抓：构建爬虫任务创建、运行状态监控及采集结果查看的可视化后台',
      '专注于前端架构，优化大图浏览体验与海量数据表格的渲染性能'
    ],
    tags: ['Vue', 'React', 'Ant Design', 'Ant Design Vue', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    projectType: 'Internal',
  },
  {
    title: '恒大灵鹿生活 (O2O 生活服务)',
    description: '连接商圈与社区的生活超市小程序，涵盖消费者端、配送端、商家端及后台管理系统。',
    highlights: [
      '负责消费者端核心业务开发，实现商品浏览、购物车、下单及支付全流程',
      '负责配送端开发，实现骑手接单、配送状态实时同步',
      '基于 Taro 实现, 可以多端打包发布，确保消费者与骑手端的高效交互体验'
    ],
    tags: ['Taro', 'React', 'Nutui UI', 'Mini Program', 'O2O'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    projectType: 'Commercial',
  },
  {
    title: '电商 SaaS 平台',
    description: '一站式电商解决方案，包含商城小程序、获客 App、SaaS 管理后台及商家后台。',
    highlights: [
      '负责商城小程序与获客 App 的功能迭代与性能优化',
      '深度参与 SaaS 管理后台与商家端后台的二次开发与定制化需求实现',
      '构建灵活的店铺装修组件库，支持商家个性化配置店铺首页',
    ],
    tags: ['UniApp', 'Vue', 'Element UI', 'SaaS', 'Admin Dashboard'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    projectType: 'Commercial',
  },
  {
    title: '分布式爬虫与 SEO 数据采集',
    description: '针对百度, 360, 谷歌等搜索引擎，构建数据采集系统，采集筛选目标关键词数据，用于 SEO 优化。',
    highlights: ['使用 Scrapy 框架构建多线程爬虫', '结合 MySQL 存储数据，进行数据的清洗', '维护代理池，实现高频爬虫的稳定性'],
    tags: ['Python', 'Scrapy', 'MySQL', 'SEO'],
    image: '/images/seo_crawler_dashboard.png',
    projectType: 'Internal',
  },
  {
    title: '全栈电商独立站 (个人项目)',
    description: '基于现代化技术栈构建的高性能无头电商平台，探索前沿全栈架构。',
    highlights: ['使用 Next.js (App Router) 构建高性能前端', '集成 Payload CMS (Headless) 管理内容', 'MongoDB 灵活存储产品数据，实现高度定制化'],
    tags: ['Next.js', 'MongoDB', 'Payload CMS', 'Fullstack'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    projectType: 'Personal',
    link: 'https://nuvie-modave.vercel.app/',
  },
];

export const PERSONAL_INFO = {
  name: "凌有策 (Lance) - 前端工程师(9年开发经验)",
  title: "资深前端工程师",
  bio: "9 年开发经验，专注于打造极致的前端交互体验。精通 Vue/React 生态及跨端开发，同时具备 Python 爬虫与全栈开发能力，能从更广阔的视角优化前端架构。",
  aboutMeLong: "我是一名以用户体验为核心的资深前端工程师。我的编程之旅始于 2017 年，虽然在 2018 年曾深入研究 Python 爬虫与数据处理，但这段经历最终成为了我前端生涯的独特养分——它让我能更好地理解数据流转与后端逻辑。2019 年至今，我专注于构建高性能的 Web 与移动应用，从“懂车拍”的复杂交互到“灵鹿生活”的跨端架构，我始终致力于用最前沿的前端技术解决业务挑战。全栈能力是我的加分项，而打磨极致的前端产品才是我的核心追求。",
  keywords: ["前端架构", "Vue/React", "跨端开发", "用户体验", "全栈思维"],
  email: "lingyouce@gmail.com",
  phone: "18823462242",
  github: "github.com/980567039",
};
