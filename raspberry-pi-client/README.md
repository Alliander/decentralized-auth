# Raspberry Pi Client

Demo for GDPR proof IOTA MAM for the Raspberry Pi. This client reads P1 data and sends it via IOTA MAM to authorized service providers.

## Requirements

- Raspberry Pi with internet connection
- Connected via a P1 cable (RJ11 to USB) to a Dutch smart meter

## Features

This client in demonstrates:
- How a device can be paired with your 'digital house' called my home via IOTA
- How the Pi can send P1 data via IOTA MAM
- How service providers can be authorized to access data
- How access can be revoked

### Pairing a device

### Send data via IOTA MAM

### Authorize access

### Revoke access

## Installation

Generate a seed with:

Copy the source code to your Raspberry Pi

Generate a seed with `cat /dev/urandom | LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1` and add it into the SEED environment variable:

```
export SEED=<seed>
```

Start with `npm start`

## Running the application locally

- Checkout the code
- `npm install` (or `npm install --python=python2.6` when a gyp error appears)
- `npm start`