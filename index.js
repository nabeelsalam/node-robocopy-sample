const robocopy = require('robocopy');

robocopy({
    
        // Specifies the path to the source directory.
        source: './source',

        // Specifies the destination path(s).
        destination: './dest',
    
        // Copy options
        copy: {
            // Turns off support for very long paths (longer than 256 characters). [/256]
            disableLongPaths:false,
            subdirs: true
    
        },
    
        // File options
        file: {
    
            // The following four options can either be an integer or date. If N is less than 1900,
            // N specifies the number of days. Otherwise, N specifies a date in the format YYYYMMDD.
    
            // Specifies the maximum file age (exclude files older than N days or date) [/maxage:<N>]
            maximumAge: 1
    
        },
    
        // Retry options
        retry: {
    
            // Specifies the number of retries on failed copies. The default value of N is
            // 1,000,000 (one million retries). [/r:<N>]
            count: 10,
    
            // Specifies the wait time between retries, in seconds. The default value of N
            // is 30 (wait time 30 seconds). [/w:<N>]
            wait: 30
    
        },
    
        // Logging options
        logging: {
    
            // Produces verbose output, and shows all skipped files. [/v]
            verbose: true,
    
            // Includes source file time stamps in the output. [/ts]
            includeSourceTimestamps: true|false,
    
            // Includes the full path names of the files in the output. [/fp]
            includeFullPaths: true,
    
            // Prints sizes, as bytes. [/bytes]
            sizesAsBytes: true,
    
            // Specifies that directory names are not to be logged. [/ndl]
            excludeDirectoryNames: false,
    
            // Specifies that the progress of the copying operation (the number of
            // files or directories copied so far) will not be displayed. [/np]
            hideProgress: true,
    
            // Shows the estimated time of arrival (ETA) of the copied files. [/eta]
            showEta: false,
    
            // Writes the status output to the log file.
            // [/log+:<LogFile>, /log:<LogFile>, /unilog:<LogFile>, /unilog+:<LogFile>]
            output: {
                file: './logs/copy.log',
                overwrite: false
            },
    
            showAndLog: true
        }
    });