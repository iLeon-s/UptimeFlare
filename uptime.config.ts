const pageConfig = {
  // Title for your status page
  title: "McLeon's Server Status",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'foo_monitor',
      // `name` is used at status page and callback message
      name: 'Jafe Homelab',
      // `method` should be a valid HTTP Method
      method: 'POST',
      // `target` is a valid URL
      target: 'https://jafe.nl.eu.org',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://jafe.nl.eu.org',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
      body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      checkLocationWorkerRoute: 'https://xxx.example.com',
    },
    // Linux1 Cache - 148.100.112.190
    {
      id: 'mcls0001',
      name: 'Linux1 Cache - 148.100.112.190',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '148.100.112.190:10518',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://148.100.112.190:10518',
      timeout: 5000,
    },
    // Linux1 Cache - 148.100.77.164
    {
      id: 'mcls0002',
      name: 'Linux1 Cache - 148.100.77.164',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '148.100.77.164:10518',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://148.100.77.164:10518',
      timeout: 5000,
    },
    // Linux1 Cache - 148.100.112.212
    {
      id: 'mcls0003',
      name: 'Linux1 Cache - 148.100.112.212',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '148.100.112.212:10518',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://148.100.112.212:10518',
      timeout: 5000,
    },
    {
      id: 'mcls0004',
      name: 'Hetzner DE',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'hz-de1.belgium.dns.navy:10518',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://hz-de1.belgium.dns.navy:10518',
      timeout: 5000,
    },
    {
      id: 'mcls0005',
      name: 'Hetzner DE 2',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'hz-de2.belgium.dns.navy:443',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://hz-de2.belgium.dns.navy:10518',
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
