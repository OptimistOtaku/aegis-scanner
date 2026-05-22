const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🏁 Starting Aegis-Scanner Test Suite...\n');

// 1. Basic JS Smoke Test: Verify that bin/cli.js can launch and output help text
console.log('➡️ Step 1: Running CLI Smoke Test...');
try {
    const cliPath = path.join(__dirname, '..', 'bin', 'cli.js');
    
    // Spawn the process
    const helpOutput = execSync(`node "${cliPath}" --help`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    
    if (helpOutput.includes('Aegis Pre-Deployment Scanner') || helpOutput.includes('options')) {
        console.log('✅ Step 1 Success: CLI script compiles and responds to --help flags!\n');
    } else {
        throw new Error('Unexpected cli --help output: ' + helpOutput);
    }
} catch (error) {
    console.error('❌ Step 1 Failed: CLI smoke test crashed.');
    console.error(error.message || error);
    process.exit(1);
}

// 2. Python Test Suite: Check if Python is available and run the Pytest checks
console.log('➡️ Step 2: Running Core Python Scanner Engine Tests via Pytest...');

// Find standard python or python3 based on OS
function getPythonCommand() {
    const commands = process.platform === 'win32' ? ['python', 'python3'] : ['python3', 'python'];
    for (const cmd of commands) {
        try {
            execSync(`${cmd} --version`, { stdio: 'ignore' });
            return cmd;
        } catch (e) {
            // continue
        }
    }
    return null;
}

const pythonCmd = getPythonCommand();
if (!pythonCmd) {
    console.warn('⚠️ Warning: No Python installation detected. Skipping python tests.');
    process.exit(0);
}

// If in CI, auto-install dependencies first so that pytest and PyYAML are ready
const isCI = process.env.CI || process.env.GITHUB_ACTIONS;
if (isCI) {
    console.log('🤖 CI/CD detected. Setting up pytest & PyYAML dynamically...');
    
    // Ensure pip is present
    try {
        execSync(`${pythonCmd} -m ensurepip --default-pip`, { stdio: 'ignore' });
    } catch (e) {
        // ignore
    }

    try {
        console.log('Installing dependencies with --break-system-packages...');
        execSync(`${pythonCmd} -m pip install pytest PyYAML --break-system-packages`, { stdio: 'inherit' });
        console.log('✅ CI Python Dependencies successfully configured!\n');
    } catch (e) {
        console.log('Falling back to standard pip install...');
        try {
            execSync(`${pythonCmd} -m pip install pytest PyYAML`, { stdio: 'inherit' });
            console.log('✅ CI Python Dependencies successfully configured!\n');
        } catch (err) {
            console.error('❌ Error setting up python dependencies in CI environment:');
            console.error(err.message || err);
            process.exit(1);
        }
    }
}

// Run pytest
console.log(`Running: ${pythonCmd} -m pytest`);
const pytestProcess = spawn(pythonCmd, ['-m', 'pytest'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
});

pytestProcess.on('close', (code) => {
    if (code === 0) {
        console.log('\n✨ All tests passed successfully!');
        process.exit(0);
    } else {
        console.error(`\n❌ Python test suite failed with exit code ${code}`);
        process.exit(code);
    }
});
