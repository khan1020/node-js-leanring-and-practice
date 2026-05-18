const fs = require('fs')

const os = require('os')
    console.log(os.arch());

// Sync operations block the event loop; use only during initial startup bootstrap
