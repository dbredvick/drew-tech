import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";

const analytics = Analytics({
  app: "developer-spin",
  plugins: [
    googleTagManager({
      containerId: "GTM-5RHXDKV"
    })
  ]
});

export default analytics;
