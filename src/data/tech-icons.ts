// Technology label -> Iconify icon. `mono`: light tone for dark logos.

export interface TechIcon {
  icon: string;
  mono?: boolean;
}

const dotnet: TechIcon = { icon: 'logos:dotnet' };
const azure: TechIcon = { icon: 'logos:microsoft-azure' };
const aws: TechIcon = { icon: 'logos:aws', mono: true };
const airflow: TechIcon = { icon: 'logos:airflow-icon' };

export const techIcons: Record<string, TechIcon> = {
  // Languages
  Python: { icon: 'logos:python' },
  JavaScript: { icon: 'logos:javascript' },
  TypeScript: { icon: 'logos:typescript-icon' },
  'C#': { icon: 'logos:c-sharp' },
  PHP: { icon: 'logos:php' },
  Rust: { icon: 'logos:rust', mono: true },
  CSS: { icon: 'logos:css-3' },

  // Frameworks and libraries
  Django: { icon: 'logos:django-icon' },
  React: { icon: 'logos:react' },
  Preact: { icon: 'logos:preact' },
  AngularJS: { icon: 'devicon:angularjs' },
  Laravel: { icon: 'logos:laravel' },
  'Node.js': { icon: 'logos:nodejs-icon' },
  Electron: { icon: 'devicon:electron' },
  'Tauri 2': { icon: 'logos:tauri' },
  '.NET': dotnet,
  '.NET 8': dotnet,
  '.NET 10': dotnet,
  '.NET Core': dotnet,
  '.NET Framework': dotnet,

  // Databases
  Oracle: { icon: 'custom:oracle' },
  PostgreSQL: { icon: 'logos:postgresql' },
  'SQL Server': { icon: 'devicon:microsoftsqlserver' },
  MySQL: { icon: 'devicon:mysql', mono: true },

  // Data processing
  DataStage: { icon: 'logos:ibm', mono: true },
  Pandas: { icon: 'logos:pandas-icon', mono: true },
  NumPy: { icon: 'logos:numpy' },
  Airflow: airflow,
  'Apache Airflow': airflow,
  'Power BI': { icon: 'logos:microsoft-power-bi' },
  Cube: { icon: 'logos:cube-icon' },

  // AI
  MCP: { icon: 'logos:model-context-protocol-icon', mono: true },

  // Cloud and platforms
  Azure: azure,
  'Azure App Services': azure,
  'Azure Storage': azure,
  'Application Insights': azure,
  AWS: aws,
  'AWS CloudFront': aws,
  Docker: { icon: 'logos:docker-icon' },
  Jenkins: { icon: 'logos:jenkins' },
  SonarQube: { icon: 'devicon:sonarqube' },
  Firebase: { icon: 'logos:firebase-icon' },
  Linux: { icon: 'logos:linux-tux' },
  'Zoom API': { icon: 'logos:zoom-icon' },
};
