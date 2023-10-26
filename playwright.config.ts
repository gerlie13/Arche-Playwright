import type { PlaywrightTestConfig } from "@playwright/test";
import { on } from "events";

const config: PlaywrightTestConfig ={
  testMatch: /.*\.ts/,
  use: {
    baseURL: "http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login",
    headless: false,
    screenshot: "on",
    video: "on"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html",{
    open: "never"
  }]],
};

export default config;