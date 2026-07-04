import type { Experience } from "../types/experience";

export const experiences: Experience[] = [{
  company: "IBK PAYGOS",
  logo: "https://gos.ibk.co.kr/icons/logo_ibk_paygos_row.svg",
  link: "https://gos.ibk.co.kr/",
  position: "Software Developer",
  period: "2025",
  overview: "Enterprise Banking Platform 개발 및 인프라 마이그레이션",
  projects: [
    {
      title: "데이터베이스 설계 및 인프라 마이그레이션",
      details: [
        "전체 뱅킹 서비스 비즈니스 로직 분석을 바탕으로 안정적인 구조의 데이터베이스 스키마 설계",
        "레거시 Tibero SQL을 MySQL로 마이그레이션 및 Cloud 환경 이전 작업을 수행하여 인프라 효율성 제고",
        "금융 보안 기준 충족을 위한 데이터 암호화(Data Encryption) 적용 및 사후 관리를 위한 기술 문서 작성"
      ]
    },
    {
      title: "뱅킹 플랫폼 대시보드 및 서비스 개발",
      details: [
        "React와 TailwindCSS를 활용하여 직관적이고 반응성이 뛰어난 관리자(Admin) 및 고객(Customer) 대시보드 프론트엔드 개발",
        "Java 기반의 안정적인 백엔드 REST API 개발 및 외부 레거시 API 연동 작업 수행",
        "대량 데이터 처리를 위한 배치(Batch) 프로세스 구축 및 네트워크 안정성 검증"
      ]
    }
  ],
  
  skills: ["React", "Java", "MySQL", "Tibero", "TailwindCSS", "Jenkins", "Jira"]
}];