export interface Skill {
  name: string;
  proficiency: 'Limited' | 'Fair' | 'Good';
  info: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  info: string;
}
