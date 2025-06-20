//your JS code here. If required.
const userAgent = navigator.userAgent;
      let browserName = "Unknown";
      let browserVersion = "";

      if (/chrome|crios|crmo/i.test(userAgent) && !/edg/i.test(userAgent) && !/opr|opera/i.test(userAgent)) {
        browserName = "Google Chrome";
        browserVersion = userAgent.match(/Chrome\/([\d.]+)/)[1];
      } else if (/firefox|fxios/i.test(userAgent)) {
        browserName = "Mozilla Firefox";
        browserVersion = userAgent.match(/Firefox\/([\d.]+)/)[1];
      } else if (/safari/i.test(userAgent) && !/chrome|crios|crmo/i.test(userAgent)) {
        browserName = "Safari";
        browserVersion = userAgent.match(/Version\/([\d.]+)/)[1];
      } else if (/edg/i.test(userAgent)) {
        browserName = "Microsoft Edge";
        browserVersion = userAgent.match(/Edg\/([\d.]+)/)[1];
      } else if (/opr|opera/i.test(userAgent)) {
        browserName = "Opera";
        browserVersion = userAgent.match(/(Opera|OPR)\/([\d.]+)/)[2];
      }

      return `${browserName} (Version: ${browserVersion})`;
    }

    document.getElementById('browser-info').textContent =
      "You are using: " + getBrowserInfo();