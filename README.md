# Auto Screener

This is a component of a larger project that automates the screening process. The auto screener ensures that a screen session named "API" is active and restarts it if necessary. It uses the `child_process` module to interact with the command line.

## Prerequisites

- Node.js installed
- `screen` install screen

## Usage
node main.js
Configuration
Currently, the auto screener doesn't require any configuration. However, you can modify the following variables in the code to customize its behavior:

checkInterval: The interval (in milliseconds) at which the screen session is checked. By default, it is set to 5 minutes.
API: The name of the screen session to monitor. Modify it if your session has a different name.

Note: This auto screener is designed as a part of a larger project and may require additional components and configurations to function properly
