// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Environment for production
const EBI_BASE_URL = 'http://localhost:4200';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact';
const INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/';

export const environment = {
  production: false,
  evn: 'dev',

  // analytics_id: 'UA-XXXXXX-XX',
  ebi_base_url: EBI_BASE_URL,
  license_url: LICENSE_URL,
  intact_psi25_url : INTACT_FTP_BASE_URL + '/current/psi25/pmid',
  intact_psi30_url : INTACT_FTP_BASE_URL + '/current/psi30/pmid',
  intact_psimitab_url : INTACT_FTP_BASE_URL + '/current/psimitab/pmid',
  intact_dotm_url: EBI_BASE_URL + '/~intact/site/dotm/dotm-1.1.xml',
  intact_portal_url: EBI_BASE_URL + '/intact',
  intact_portal_support_url: EBI_BASE_URL + 'support/intact',
  intact_training_url: EBI_BASE_URL + 'intact/resources/training',
  intact_portal_ws: EBI_BASE_URL + '/intact/ws',
  //TODO... below will be changed when have a graph server
  graph_ws: EBI_BASE_URL + '/graph',
  intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL
};
