// Thx https://stackoverflow.com/a/53239387/6612932

import { execSync } from "node:child_process";

const env = process.env;

if (
  // if INIT_CWD (yarn/npm install invocation path) and PWD
  // are the same, then local (dev) install/add is taking place
  env.INIT_CWD === env.PWD ||
  // local (dev) yarn install may have been run
  // from a project subfolder
  env.INIT_CWD.indexOf(env.PWD) === 0
) {
  // do post-installation things
  execSync("husky install");
}
