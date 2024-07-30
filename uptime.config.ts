const pageConfig = {
  // Title for your status page
  title: "McLeon's Server Status",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/mcl2048', label: 'GitHub' },
    { link: 'https://jafe.nl.eu.org', label: 'Blog' },
    { link: 'mailto:mcleon@tuta.io', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Hitches's Blog
    {
      id: 'mcls0000',
      name: 'Hitch Blog on Blogger',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'hitch.bln.pp.ua:443',
      tooltip: 'My production server Cache port',
      statusPageLink: 'https://hitch.bln.pp.ua',
      timeout: 5000,
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
      target: 'hz-de2.belgium.dns.navy:3443',
      tooltip: 'My production server Cache port',
      statusPageLink: 'http://hz-de2.belgium.dns.navy:3443',
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://7321392726:AAHVILRuul0giFZ2yEgljhPmbw0FFFWPCsE/5883875335",
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
