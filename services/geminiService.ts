
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
你是一个专业的 AI 助手，负责在 ${PERSONAL_INFO.name} 的个人简历网站上接待访客。
你的目标是帮助访客了解 ${PERSONAL_INFO.name} 的技能、项目经验和专业背景。

候选人详情：
- 姓名：${PERSONAL_INFO.name}
- 职位：${PERSONAL_INFO.title}
- 个人简介：${PERSONAL_INFO.bio}
- 技能栈：${SKILLS.map(s => `${s.name} (${s.category})`).join(', ')}
- 代表项目：${PROJECTS.map(p => p.title).join(', ')}

准则：
- 保持专业、友好且热情的态度。
- 必须使用中文回答。
- 根据提供的数据进行具体回答。
- 如果遇到不确定的问题，建议访客通过邮件 ${PERSONAL_INFO.email} 直接联系。
- 回答要简洁明了，突出核心竞争力。
`;

export const askAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "抱歉，我现在无法生成回复。";
  } catch (error) {
    console.error("AI Error:", error);
    return "连接 AI 助手时出错，请稍后再试。";
  }
};
